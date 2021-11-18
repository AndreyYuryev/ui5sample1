sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "simpleapp/model/models",
    "sap/ui/model/json/JSONModel"

],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("simpleapp.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                let oJsonData = {
                    data: [
                        {
                            title: 'Thema 1',
                            description: 'A first thema',
                            dateOfEvent: null,
                            author: 'z.Ivanov',
                            status: 'active'
                        },
                        {
                            title: 'Thema 2',
                            description: 'A second thema',
                            dateOfEvent: null,
                            author: 'a.Petrov',
                            status: 'New'
                        },
                        {
                            title: 'Thema 3',
                            description: 'A third thema',
                            dateOfEvent: null,
                            author: 'x.Sidorov',
                            status: 'test'
                        }
                    ]
                };

                let oLocalModel = new JSONModel(oJsonData);

                this.setModel(oLocalModel, "localModel");

            }
        });
    }
);