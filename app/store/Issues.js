Ext.define('Redtouch.store.Issues', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Redtouch.model.Issue',
        grouper: function(record) {
            return record.get('tracker');
        }
    }
});
