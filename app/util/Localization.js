Ext.define('Example.util.Localization', {
    alternateClassName: ['Localization'],
    singleton: true,
    /**
     * Загружает и инициализирует локализацию
     * @param {String} locale выбранная локаль
     */
    init: function (locale = 'en') {
        return new Ext.Promise(function (resolve) {
            // Подписываемся на события
            i18next.on('initialized', function() {
                i18next.on('languageChanged', function () {
                    // При смене языка, нам нужно обновить данные с локализацией
                    Ext.Viewport.getViewModel().initi18n();
                });
                resolve(true);
            })
            // Загружаем локализацию
            Ext.Ajax.request({
                url: `${Ext.getResourcePath('localization.json')}`,
                method: 'GET',
                cors: true,
                useDefaultXhrHeader: true,
                withCredentials: true,
                success: function (response) {
                    i18next.init({
                        lng: locale,
                        debug: true,
                        resources: Ext.decode(response.responseText)
                    }, function (err) {
                        if (err) {
                            Ext.raise('Failed init Localization')
                        };
                    });
                },
                failure: function () {
                    resolve(false);
                }
            });
        });
    },
});