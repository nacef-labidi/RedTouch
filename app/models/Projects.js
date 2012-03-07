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

    proxy: redtouch.proxies.projects
});

redtouch.stores.projects = new Ext.data.Store({
    model: "redtouch.models.Project",
    remoteFilter: true
});

redtouch.proxies.tasks = new Ext.data.AjaxProxy({
    url: '/redmine/issues.json',
    reader: {
        type: 'json',
        root: 'issues'
    }
});

