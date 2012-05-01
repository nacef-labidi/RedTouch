Ext.define('Redtouch.model.Issue', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'created_on', type: 'auto'},
            {name: 'done_ratio', type: 'auto'},
            {name: 'start_date', type: 'auto'},
            {name: 'description', type: 'auto'},
            {name: 'subject', type: 'auto'},
            {name: 'updated_on', type: 'auto'}
        ],
        proxy: {
            type: 'ajax',
            url: '/redmine/issues.json',
            reader: {
                type: 'json',
                rootProperty: 'issues'
            }
        }
    }
});