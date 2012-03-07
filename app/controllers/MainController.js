redtouch.controllers.main = new Ext.Controller({
    projects: function(options) {
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

    },

    login: function(options) {
        Ext.Ajax.defaultHeaders = {
            'Authorization': Base64.encode(options.data.login + ':' + options.data.password)
        };

        Ext.Ajax.request({
            url: '/redmine/projects.xml',
            success: function(response, responseText) {
                redtouch.stores.credentials.add({login: options.data.login, password: options.data.password});
                redtouch.stores.projects.load({
                    scope: this,
                    callback: function(records, operation, success) {
                        redtouch.views.viewport.setActiveItem(redtouch.views.projectList, 'flip');
                    }
                });
            },
            failure: function(response, opts) {
                redtouch.views.viewport.setActiveItem(redtouch.views.loginForm);
            }
        });

    }
});
