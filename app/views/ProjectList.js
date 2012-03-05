redtouch.views.ProjectList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    items: [{
        xtype: 'list',
        id: 'itemslist',
        store: redtouch.stores.projects,
        itemTpl: new Ext.XTemplate(
            '<div class="project">',
            '<h1>{name}</h1>',
            '<span>{description}</span>',
            '</div>'),
        listeners: {
            itemtap: function(dv, index, item, e) {
                Ext.dispatch({
                    controller: redtouch.controllers.projects,
                    action: 'tasks',
                    id: dv.store.getAt(index).getId()
                });
            }
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        title: 'RedTouch'
    }],
    initComponent: function() {
        redtouch.stores.projects.load();
        redtouch.views.ProjectList.superclass.initComponent.apply(this, arguments);
    }
});

