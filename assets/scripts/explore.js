// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

const voiceSelect = document.querySelector('select');
const text = document.querySelector('textarea');
const tap = document.querySelector('button');
const image = document.querySelector('img');
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute('lang', voices[i].lang);
    option.setAttribute('name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

console.log(tap);
console.log(text);

function init() {
  populateVoiceList();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoiceList;
}

let utterance = new SpeechSynthesisUtterance(text.value);
text.addEventListener('input', () => {
  utterance = new SpeechSynthesisUtterance(text.value);
});

voiceSelect.addEventListener('input', () => {
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  
});

tap.addEventListener('click', () => {
  
  synth.speak(utterance);
  
  utterance.addEventListener('start', () => {
    image.src="assets/images/smiling-open.png";
    console.log("Start Here");
  });

  utterance.addEventListener('end', () => {
    image.src="assets/images/smiling.png";
    console.log("End jere");
  });

});



}

