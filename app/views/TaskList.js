redtouch.views.TaskList = Ext.extend(Ext.Panel, {
    layout: 'fit',
    items: [{
        xtype: 'list',
        id: 'itemslist',
        store: redtouch.stores.tasks,
        itemTpl: new Ext.XTemplate(
            '<div class="task">',
            '<h1>#{id} - {subject}</h1>',
            '<span>{tracker}</span>',
            '</div>'),
        listeners: {
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Test',
        items: [
            {
                text: 'Back',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: redtouch.controllers.main,
                            action: 'projects',
                            animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            }
        ]
    }],
    initComponent: function() {
        redtouch.views.TaskList.superclass.initComponent.apply(this, arguments);
    }
});

