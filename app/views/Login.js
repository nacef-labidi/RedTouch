redtouch.views.LoginForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function() {
        var fields = {
            xtype: 'fieldset',
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: true,
                useClearIcon: true
            },
            items: [
                {
                    name: 'login',
                    label: 'Login'
                },
                {
                    name: 'password',
                    label: 'Password',
                    xtype: 'passwordfield'
                }
            ]
        };

        Ext.apply(this, {
            items: [fields],
            dockedItems: [
                {
                    dock: 'top',
                    xtype: 'toolbar',
                    title: 'Login',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Submit',
                            handler: this.onSubmit,
                            scope: this,
                            ui: 'confirm'
                        }
                    ]
                }
            ]
        });

        redtouch.views.LoginForm.superclass.initComponent.call(this);
    },

    onSubmit: function() {
        Ext.dispatch({
            controller: redtouch.controllers.main,
            action: 'login',
            data: this.getValues()
        });
    }
});