require(["dojo/parser", "dojo/on", "dijit/Dialog", "dojo/dom", "dijit/registry", "dojo/query", "dojo/domReady!", 
         "dijit/layout/TabContainer", "dijit/layout/ContentPane"], 
		function(parser, on, Dialog, dom, registry, query) {

	try {
		var dialog;

		parser.parse().then(onloadHandlers);

		function onloadHandlers() {
			registry.byId("group").on("load", setBioClickHandlers);
			registry.byId("protocols").on("load", setProtocolClickHandlers);
		}

		function setBioClickHandlers() {
			on(dom.byId("amanda"), "click", bioClickHander);
		}
		
		function setProtocolClickHandlers() {
			query("#protocolList a").on("click", protocolListHandler);
		}

		function bioClickHander(e) {
			e.preventDefault();
			showDialog("bios/" + this.id + ".html");
		}

		function protocolListHandler(e) {
			e.preventDefault(e);
			showDialog("protocols/" + this.id + ".html");
		}
		
		function showDialog(href) {
			if (!href) {
				return;
			}
			dialog = new Dialog({
				href: href
			});
			dialog.on("close", destroyBio);
			dialog.show();
		}
		
		function destroyBio() {
			this.destroyRecursively();
		}
	} catch (e) {
		console.log(e.message);
	}

});