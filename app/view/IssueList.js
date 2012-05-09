Ext.define('Redtouch.view.IssueList', {
    extend: 'Ext.List',
    xtype: 'issuelist',
    requires: ['Redtouch.store.Issues', 'Redtouch.view.IssueDetails'],


    config: {
        title: 'Issues',
        store: 'Issues',
        itemTpl: '#{id} {tracker} {subject}, {status}',
        onItemDisclosure: true
        grouped: true
    }
});
