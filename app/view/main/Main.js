Ext.define('Example.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            tab: {
                bind: {
                    title: '{i18n.HOME}'
                }
            },
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            tab: {
                bind: {
                    title: '{i18n.USERS}'
                }
            },
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{i18n.EXAMPLE_TEXT}'
            }
        }, {
            tab: {
                bind: {
                    title: '{i18n.GROUPS}'
                }
            },
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{i18n.EXAMPLE_TEXT}'
            }
        }, {
            tab: {
                bind: {
                    title: '{i18n.SETTINGS}'
                }
            },
            iconCls: 'x-fa fa-cog',
            items: [{
                xtype: 'settings'
            }]
        }
    ]
});