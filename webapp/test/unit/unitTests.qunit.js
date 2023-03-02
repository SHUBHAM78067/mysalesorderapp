/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/anubhavtraining/sd/so/mysalesorderapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});