let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");




// This block of code sets up an event listener for the onvoiceschanged event of the speechSynthesis object. When this event is triggered, the getVoices() method is called to get the updated list of available voices, which are then stored in the voices array. The first voice in the array is set as the default voice for the speech object.

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  // console.log(voices); Debugging Statement
  speech.voice = voices[0];









