sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "simpleapp/utils/Simple",
    "simpleapp/model/formatter"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, JSONModel, Simple, formatter) {
		"use strict";

		return Controller.extend("simpleapp.controller.Main", {

            formatter: formatter,

			onInit: function () {
                /*    let oModel = new JSONModel({
                    ThemeId: "",
                    Title: "",
                    Description: "",
                    Owner: "",
                    Status: "",
                    CreationDate: ""
                });
                this.getView().setModel(oModel, "viewModel");
                */
                this.Simple = new Simple(this, "first");
            },
            
            onButtonPressed: function (oEvent) {

                let msg = oEvent.getSource().getProperty('text');
                MessageToast.show("pressed button" + msg);
            },

            onClose: function (oEvent) {
                oEvent.getSource().getParent().close();
            }, 

            onDialogPress: function () {
                let sText = "Look at me!";
                this.Simple.open("\n"+sText);
            },

		});
	});
