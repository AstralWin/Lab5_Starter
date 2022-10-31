// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById('horn-select');
  const image = document.body.querySelector('img');

  const volu = document.querySelector('input');
  const volimg = document.querySelector("div#volume-controls img")
  
  const audio = document.querySelector("audio");
  const tap = document.querySelector('button');
  
  console.log(audio);
  console.log(tap);
  console.log(volimg);
  
  horn.addEventListener('input', () => {
    if (horn.value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
      audio.type = "audio/mp3";
    }

    if (horn.value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    
    if (horn.value == "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }

  });

  volu.addEventListener('change', () => {
    audio.volume = volu.value / 100;

    if (audio.volume == 0)
      volimg.src = "assets/icons/volume-level-0.svg";

    if (audio.volume >=0.01 && audio.volume < 0.33)
      volimg.src = "assets/icons/volume-level-1.svg";
    
    if (audio.volume >=0.33 && audio.volume < 0.67)
      volimg.src = "assets/icons/volume-level-2.svg";

    if (audio.volume >=0.67 && audio.volume <= 1)
      volimg.src = "assets/icons/volume-level-3.svg";
  });

  const jsConfetti = new JSConfetti();
  tap.addEventListener('click', () => {
    audio.play();
    if (horn.value == "party-horn") {
      jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      });
    }
  });
}