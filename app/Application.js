Ext.define('Example.Application', {
    extend: 'Ext.app.Application',
    name: 'Example',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    launch: async function () {
        // Наше приложение будет с корневой ViewModel
        Ext.Viewport.setViewModel({
            type: 'viewport'
        });

        // Устанавливаем splashscreen
        Splashscreen.show('Application starting', 'Load localization...')

        // Загружаем локализацию
        await Localization.init();

        // Рисуем viewport
        Ext.Viewport.add(Ext.create('Example.view.main.Main'));

        // Скрываем splashscreen
        Splashscreen.hide();
    }
});