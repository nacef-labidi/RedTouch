Ext.define('Redtouch.model.Project', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'auto'},
            {name: 'identifier', type: 'auto'},
            {name: 'updated_on', type: 'auto'},
            {name: 'description', type: 'auto'},
            {name: 'created_on', type: 'auto'}
        ],
        proxy: {
            type: 'ajax',
            url: '/redmine/projects.json',
            reader: {
                type: 'json',
                rootProperty: 'projects'
            }
        }
    }
});