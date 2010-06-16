dojo.provide("DemoExample.init");

dojo.addOnLoad(function(){
	console.log("Init()");
	dojo.byId("demoContainer").innerHTML="<h1>Hello World</h1>";
});
