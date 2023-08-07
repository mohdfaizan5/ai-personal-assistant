
let userText = document.querySelector('.prompt-input');
const btn = document.querySelector('.search-btn');
const micBtn = document.querySelector('.mic-btn');

const welcomeGreet = 'Hey Champ, hope you are doing well';
// speak(welcomeGreet)
document.querySelector('.waveContainer').style.display = 'none'


document.addEventListener('DOMContentLoaded', () => {



  // listening 
  let recognition = new webkitSpeechRecognition();
  let final_transcript = "";

  // this will continously listen to the user
  recognition.continuous = true;

  // setting lang en-Global
  recognition.lang = 'en-IN';

  // This event does when object starts 
  recognition.onstart = () => {
    console.log('Started Listening...')  
    document.querySelector('.waveContainer').style.display = 'flex';
  }


  // This event will trigger when listneing is stopped
  recognition.onend = () => {   
    console.log("Stopped Listening")
    document.querySelector('.waveContainer').style.display = 'none'
    final_transcript += '. <br>'
  }

  // For continous listning:
  recognition.continuous = true;

  // This is the final text that is been displayed when everything is processed
  recognition.onresult = (event) => {
    // console.log(event.results.transcript)
    // document.querySelector('.user-speech').innerText = event.results[0][0].transcript;
    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    document.querySelector(".user-speech").innerHTML = final_transcript;
    document.querySelector(".user-speech-interim").innerHTML = interim_transcript;

  }  
  




  btn.addEventListener('click', function(){
    console.log(userText.value);

    if(userText.value.includes('sad')){
      speak('Dont be sad man!! God is with you')
    }

    // speak(userText.value)
  })

  // Speak when mic button is clicked
  let isListening = false;
  micBtn.addEventListener('click', function(){

    if (isListening === false){
      // document.querySelector('.waveContainer').style.display = 'flex'
      recognition.start()
      isListening = true;
    }
    else{
      // document.querySelector('.waveContainer').style.display = 'none'
      isListening = false;
      recognition.stop()
    }
  })
  
})




function speak(text){
  
  // Create a new speechSynthesisU
  let utterance = new SpeechSynthesisUtterance();

  utterance.text = text
  utterance.voice = window.speechSynthesis.getVoices()[5]

  // Finally speaking
  window.speechSynthesis.speak(utterance)
}

function listen(){
  // Create a SpeechRecognition instance
  const recognition = new webkitSpeechRecognition(); // Prefix for Chrome

  // Configure recognition
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = true;

  // Event handlers
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    console.log('Recognized:', transcript);
  };

  recognition.onend = () => {
    recognition.start(); // Restart recognition
  };

  // Start recognition
  recognition.start();

}