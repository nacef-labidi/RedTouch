Ext.define('Redtouch.store.Projects', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Redtouch.model.Project',
        autoLoad: true
    }
});
