(function(window) {
	var Word = "Hello";
	var helloSpeaker = function (name) {
		console.log(Word + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);