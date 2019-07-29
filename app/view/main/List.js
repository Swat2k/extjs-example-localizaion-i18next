Ext.define('Example.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',
    requires: [
        'Example.store.Personnel'
    ],
    bind: {
        title: '{i18n.PERSONNEL}',
    },
    viewModel: {
        type: 'app-main'
    },
    selectable: {
        mode: 'multi',
        publishes: 'rows'
    },
    reference: 'personnel',
    store: {
        type: 'personnel'
    },
    columns: [{
        bind: {
            text: '{i18n.NAME}'
        },
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230
    }, {
        bind: {
            text: '{i18n.PHONE}'
        },
        dataIndex: 'phone',
        width: 150
    }],
    items: [{
        xtype: 'container',
        dock: 'top',
        padding: 48,
        bind: {
            html: '<b>{i18n.EXAMPLE_SELECTED}: {selectionCount} {personnelSelectionHtml}</b>'
        }
    }]
});