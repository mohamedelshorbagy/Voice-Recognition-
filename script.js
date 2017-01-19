
$(document).ready(function () {
    
   setInterval(function(){ 
   
     var textvoice = $("input").val();
       var textDiv = $(".test").text(textvoice);
   
   }, 500);
    
    



});













  function startDictation() {
 
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
        
      recognition.lang = "ar-EG";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }



  function startDictation2() {
 
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
 
      var recognition = new webkitSpeechRecognition();
 
      recognition.continuous = false;
      recognition.interimResults = false;
        
      recognition.lang = "en-US";
      recognition.start();
 
      recognition.onresult = function(e) {
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        
      };
 
      recognition.onerror = function(e) {
        recognition.stop();
      }
 
    }
  }




// Speak Part from the Responsive.js Library

var speakLoud = document.getElementById("speakLoud");
var inputField = document.getElementById('transcript');




speakLoud.onclick = function () {
    responsiveVoice.speak(inputField.value);
    


};



