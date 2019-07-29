Ext.define('Example.view.settings.View', {
    extend: 'Ext.Container',
    xtype: 'settings',
    padding: 48,
    items: [
        {
            xtype: 'combobox',
            bind: {
                label: '{i18n.CURRENT_LANG}'
            },
            queryMode: 'local',
            displayField: 'name',
            valueField: 'locale',
            value: 'en',
            store: [
                { locale: 'en', name: 'English' },
                { locale: 'ru', name: 'Русский' },
            ],
            listeners: {
                select: function (self, record) {
                    // Меняем локализацию
                    i18next.changeLanguage(record.get('locale'));
                }
            }
        }
    ]
});