Ext.define('Redtouch.view.ProjectList', {
    extend: 'Ext.List',
    xtype: 'projectlist',
    requires: ['Redtouch.store.Projects'],

    config: {
        title: 'Projects',
        store: 'Projects',
        itemTpl: '{name}',
        onItemDisclosure: true
    }
});
