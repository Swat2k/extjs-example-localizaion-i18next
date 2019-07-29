Ext.define('Example.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.viewport',

    data: {
        // Текущая локализация
        i18n: {}
    },

    constructor: function (config) {
        const me = this;
        const ret = me.callParent([config]);
        // Мы будем проксировать все обращения к свойствам i18n в библиотеку
        me.initi18n();
        return ret;
    },

    privates: {
        /**
         * Создание Proxy для трансляции запросов к i18n
         */
        initi18n: function () {
            const me = this;
            me.set('i18n', new Proxy({}, me.i18nHandler));
        },
        /**
         * Обновление данных локализации (например если она редактируется на фронте, и необходимо
         * сразу применить изменения.
         * @param {Object} data данные локализации
         * @param {Boolean} apply по-умолчанию true, автоматически применяет локализацию
         */
        loadI18nResource: function (data, apply = true) {
            i18next.default.services.resourceStore.data = Ext.clone(data);
            if (apply) {
                this.initi18n();
            }
        },
        /**
         * Обработчик методов Proxy
         */
        i18nHandler: {
            get: function (target, name) {
                if (i18next.exists(name)) {
                    return i18next.t(name);
                }
                return target[name];
            }
        }
    }

});