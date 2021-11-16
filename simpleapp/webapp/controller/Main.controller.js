sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("simpleapp.controller.Main", {
			onInit: function () {

            },
            
            onButtonPressed: function (oEvent) {

                let msg = oEvent.getSource().getProperty('text');
                MessageToast.show("pressed button" + msg);
            }
		});
	});
