Ext.namespace('redtouch.proxies');

redtouch.proxies.projects = new Ext.data.AjaxProxy({
    url: '/redmine/projects.json',
    reader: {
        type: 'json',
        root: 'projects'
    }
});

redtouch.models.Project = Ext.regModel("redtouch.models.Project", {
    fields: [
        {name: "id",              type: "int"},
        {name: "name",            type: "string"},
        {name: "identifier",      type: "string"},
        {name: "description",     type: "string"},
        {name: "created_on",      type: "string"},
        {name: "updated_on",      type: "string"}
    ],

    proxy: redtouch.proxies.projects,
    autoLoad: true
});

redtouch.stores.projects = new Ext.data.Store({
    model: "redtouch.models.Project",
    remoteFilter: true
});

redtouch.proxies.tasks = new Ext.data.AjaxProxy({
    url: 'http://localhost/redmine/issues.json',
    reader: {
        type: 'json',
        root: 'issues'
    }
});

redtouch.models.Task = Ext.regModel("redtouch.models.Task", {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'subject', type:'string'},
        {name: 'description', type:'string'},
        {name: 'start_date', type:'string'},
        {name: 'due_date', type:'string'},
        {name: 'done_ratio', type:'string'},
        {name: 'estimated_hours', type:'string'},
        {name: 'created_on', type:'string'},
        {name: 'updated_on', type:'string'},
        {name: 'tracker', type:'string', convert: function(v, record) {
            return v.name;
        }},
        {name: 'project', type:'string', convert: function(v, record) {
            return v.name;
        }},
        {name: 'status', type:'string', convert: function(v, record) {
            return v.name;
        }},
        {name: 'priority', type:'string', convert: function(v, record) {
            return v.name;
        }},
        {name: 'author', type:'string', convert: function(v, record) {
            return v.name;
        }},
        {name: 'assigned_to', type:'string', convert: function(v, record) {
            return v.name;
        }}
    ],

    proxy: redtouch.proxies.tasks
});

redtouch.stores.tasks = new Ext.data.Store({
    model: "redtouch.models.Task",
    remoteFilter: true
});
