/**
 * @class Overrides.app.bind.Multi
 * @author Dmitry Kazarin <dikazarin@gmail.com>
 * 
 * Добавляет возможность пересчета формул, если меняется хотя бы один параметр из bind'a
 * 
 * formulas: {
 *      test: {
 *          bind: {
 *              a: '{b}',
 *              c: '{d}',
 *              fireOnEachBinding: true
 *          }
 *          get: function (values) {
 *              ....
 *          }
 *      }
 * }
 * 
 **/

Ext.define ('Overrides.app.bind.Multi', {
    override: 'Ext.app.bind.Multi',

    compatibility: '7.0.0.132',

    constructor: function(descriptor, owner, callback, scope, options) {
        var me = this,
            trackStatics = options && options.trackStatics;
        me.callSuper([
            owner,
            callback,
            scope,
            options
        ]);
        me.bindings = [];
        me.literal = descriptor.$literal;
        if (descriptor.constructor === Object) {
            if (trackStatics) {
                me.staticKeys = [];
            }

            // Добавляем fireOnEachBinding опцию
            me.fireOnEachBinding = descriptor.fireOnEachBinding ;

            me.addObject(descriptor, me.lastValue = {}, me.staticKeys);
        } else {
            me.addArray(descriptor, me.lastValue = []);
        }

        if (!--me.missing && !me.scheduled) {
            me.schedule();
        }
    },

    add: function(descriptor, data, property) {
        var me = this,
            owner = me.owner,
            bindings = me.bindings,
            method = me.literal ? (descriptor.reference ? 'bindEntity' : 'bindExpression') : 'bind',
            binding, depth;
        ++me.missing;
        binding = owner[method](descriptor, function(value) {
            data[property] = value;
            if (binding.calls === 1) {
                --me.missing;
            }
            // Пересчитываем бинд если fireOnEachBinding === true
            if ((!me.missing || me.fireOnEachBinding === true) && !me.scheduled) {
                me.schedule();
            }
        },
        me, null);
        depth = binding.depth;
        if (!bindings.length || depth < me.depth) {
            me.depth = depth;
        }
        bindings.push(binding);
        return !this.isBindingStatic(binding);
    },
}) ;