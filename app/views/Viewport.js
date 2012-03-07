redtouch.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into redtouch.views namespace
        Ext.apply(redtouch.views, {
            projectList  : new redtouch.views.ProjectList(),
            taskList     : new redtouch.views.TaskList(),
            loginForm    : new redtouch.views.LoginForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                redtouch.views.loginForm,
                redtouch.views.projectList,
                redtouch.views.taskList
            ]
        });
        redtouch.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
