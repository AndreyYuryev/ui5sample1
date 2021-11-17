sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "simpleapp/utils/Simple"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, JSONModel, Simple) {
		"use strict";

		return Controller.extend("simpleapp.controller.Main", {
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

            onSelectionChange: function (oEvent) {
                let oItem = oEvent.getSource().getSelectedItem();
                let oData = oItem.getBindingContext();
            /*    let sPath = oItem.getBindingContext().getPath();
                let oData = this.getView().getModel().getProperty(sPath);
                this.getView().getModel("viewModel").setProperty("/ThemeId", oData.ThemeId);
                this.getView().getModel("viewModel").setProperty("/Title", oData.Title);
                this.getView().getModel("viewModel").setProperty("/Description", oData.Description);
                this.getView().getModel("viewModel").setProperty("/Owner", oData.Owner);
                this.getView().getModel("viewModel").setProperty("/Status", oData.Status);
                this.getView().getModel("viewModel").setProperty("/CreationDate", oData.CreationDate);
            */
            },

            onClose: function (oEvent) {
                oEvent.getSource().getParent().close();
            }

		});
	});
