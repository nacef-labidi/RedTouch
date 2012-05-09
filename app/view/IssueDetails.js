Ext.define('Redtouch.view.IssueDetails', {
    extend: 'Ext.Panel',
    xtype: 'issuedetails',

    config: {
        styleHtmlContent: true,
        tpl :[
            '<h2>{subject}</h2>',
            '<span>{description}</span>'
        ]
    }
});
