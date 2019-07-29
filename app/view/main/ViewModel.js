Ext.define('Example.view.main.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.app-main',

    formulas: {
        selectionCount: {
            bind: '{personnel.selection}',
            get: function () {
                return this.getView().getSelections().length;
            }
        },
        personnelSelectionHtml: {
            bind: {
                selectionCount: '{selectionCount}',
                i18n: '{i18n}',
                // смотри Overrides.app.bind.Multi
                fireOnEachBinding: true
            },
            get: function(values) {
                return i18next.t('EXAMPLE_KEY', {count: values.selectionCount || 0});
            },
        },
    },

});