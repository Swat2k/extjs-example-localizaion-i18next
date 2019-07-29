Ext.define('Example.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    model: 'Example.model.Personnel',
    data: {
        items: [{
                name: 'Jean Luc',
                email: "jeanluc.picard@enterprise.com",
                phone: "555-111-1111"
            },
            {
                name: 'Worf',
                email: "worf.moghsson@enterprise.com",
                phone: "555-222-2222"
            },
            {
                name: 'Deanna',
                email: "deanna.troi@enterprise.com",
                phone: "555-333-3333"
            },
            {
                name: 'Data',
                email: "mr.data@enterprise.com",
                phone: "555-444-4444"
            },
            {
                name: 'Dmitry Kazarin',
                email: "dikazarin@gmail.com",
                phone: "555-555-55555"
            },
            {
                name: 'John',
                email: "worf.moghsson@enterprise.com",
                phone: "555-666-6666"
            },
            {
                name: 'Frank',
                email: "deanna.troi@enterprise.com",
                phone: "555-777-7777"
            },
            {
                name: 'Lola',
                email: "mr.data@enterprise.com",
                phone: "555-888-8888"
            }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});