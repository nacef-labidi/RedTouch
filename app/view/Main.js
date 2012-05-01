Ext.define("Redtouch.view.Main", {
    extend: 'Ext.navigation.View',
    xtype: 'mainpanel',

    requires: [
        'Redtouch.view.ProjectList',
        'Redtouch.view.IssueList'
    ],

    config: {
        items: [
            {
                xclass: 'Redtouch.view.ProjectList'
            }
        ]
    }
});