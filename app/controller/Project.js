Ext.define('Redtouch.controller.Project', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'projectlist': {
                disclose: 'listIssues'
            },
            'issuelist': {
                disclose: 'issueDetails'
            }
        }
    },

    listIssues: function(list, record) {
        var store = Ext.getStore('Issues');
        store.getProxy().setExtraParam('project_id', record.data.id);
        store.load();

        this.getMain().push({
            xtype: 'issuelist',
            title: record.data.name + ' Issues'
        });
    },

    issueDetails: function(list, record) {
        this.getMain().push({
            xtype: 'issuedetails',
            title: 'Issue #' + record.data.id,
            data: record.getData()
        });
    }
    
});