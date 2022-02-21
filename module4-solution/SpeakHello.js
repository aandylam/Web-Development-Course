(function(window) {
    var hellotoSpeaker = new Object();
    var speakWord = "Hello";
    hellotoSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.hellotoSpeaker = hellotoSpeaker;
})(window);
