// initialize skrollr library
var s = skrollr.init({
	render: function(data) {
		// log the current scroll position
		console.log(data.curTop);
	}
});