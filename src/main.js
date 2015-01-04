/*jslint devel:true */

define(function (require, exports, module) {
	'use strict';
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	LanguageManager.defineLanguage("twig", {
		name: "Twig",
		mode: "jinja2",
		fileExtensions: ["twig"],
		blockComment: ["{#", "#}"],
		lineComment: []
	});

	console.log("Twig syntax highlighting extension loaded");
});
