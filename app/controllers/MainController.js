redtouch.controllers.projects = new Ext.Controller({
    index: function(options) {
        redtouch.views.viewport.setActiveItem(
            redtouch.views.projectList, options.animation
        );
    },

    tasks: function(options) {
        var id = parseInt(options.id);

        redtouch.proxies.tasks.extraParams = {project_id: id};
        redtouch.stores.tasks.load({
            scope: this,
            callback: function(records, operation, success) {
                redtouch.views.viewport.setActiveItem(
                    redtouch.views.taskList, options.animation
                );
            }
        });

    }
});
