(function(window) {
    var byetoSpeaker = new Object();
    var speakWord = "Good Bye";
    byetoSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byetoSpeaker = byetoSpeaker;
})(window);
