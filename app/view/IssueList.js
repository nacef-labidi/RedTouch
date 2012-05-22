Ext.define('Redtouch.view.IssueList', {
    extend: 'Ext.List',
    xtype: 'issuelist',
    requires: ['Redtouch.store.Issues', 'Redtouch.view.IssueDetails'],


    config: {
        title: 'Issues',
        store: 'Issues',
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="issue">',
                '<div class="id">',
                    '<p class="number">#{id}</p>',
                    '<p class="tracker">{tracker}</p>',
                '</div>',
                '<div class="details">',
                    '<h3>{subject}</h3>',
                    '<p>{status}</p>',
                '</div>',
            '</div>'
        ),
        onItemDisclosure: true,
        grouped: true
    }
});
