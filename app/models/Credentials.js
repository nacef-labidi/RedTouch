redtouch.models.Credentials = Ext.regModel('redtouch.models.Credentials', {
    fields: ['login', 'password'],
    proxy: {
        type: 'localstorage',
        id: 'redmine-credentials'
    }
});

redtouch.stores.credentials = new Ext.data.Store({
    model: "redtouch.models.Credentials"
});