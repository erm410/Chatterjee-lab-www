require(["dojo/parser", "dojo/on", "dijit/Dialog", "dojo/dom", "dijit/registry", "dojo/domReady!", "dijit/layout/TabContainer", "dijit/layout/ContentPane"], 
		function(parser, on, Dialog, dom, registry) {

	try {
		var bio;

		parser.parse().then(setGroupOnload);

		function setGroupOnload() {
			registry.byId("group").on("load", setBioEvents);
		}

		function setBioEvents() {
			on(dom.byId("amanda"), "click", bioClickHander);
		}

		function bioClickHander(e) {
			e.preventDefault();
			showBio(this.id);
		}

		function showBio(person) {
			if (!person) {
				return;
			}
			bio = new Dialog({
				href: "bios/" + person + ".html"
			});
			bio.on("close", destroyBio);
			bio.show();
		}

		function destroyBio() {
			this.destroyRecursively();
		}
	} catch (e) {
		console.log(e.message);
	}

});