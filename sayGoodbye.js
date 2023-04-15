(function(window) {
	var Word = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(Word + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);