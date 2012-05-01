Ext.define('Redtouch.controller.Project', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'projectlist': {
                disclose: 'listIssues'
            }
        }
    },

    listIssues: function(list, record) {
        var store = Ext.getStore('Issues');
        store.getProxy().setExtraParam('project_id', record.data.id);
        store.load();

        this.getMain().push({
            xtype: 'issuelist',
            title: 'Issues'
        });
    }
    
});