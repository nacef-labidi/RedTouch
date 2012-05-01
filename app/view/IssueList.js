Ext.define('Redtouch.view.IssueList', {
    extend: 'Ext.List',
    xtype: 'issuelist',
    requires: ['Redtouch.store.Issues'],

    config: {
        title: 'Issues',
        store: 'Issues',
        itemTpl: '{subject}',
        onItemDisclosure: true
    }
});
