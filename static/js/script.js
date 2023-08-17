
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
    final_transcript += '. '
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
    document.querySelector(".prompt-input").value = final_transcript;
    document.querySelector(".user-speech-interim").innerHTML = interim_transcript;

  }  
  




  btn.addEventListener('click', function(){
    console.log(userText.value);
    // speak(document.querySelector('.prompt-input').value)

    if(userText.value.includes('sad')){
      speak('Dont be sad man!! God is with you')
    }

    if(userText.value.includes('create a forgetting curve')){
      speak('What should I create a forgetting curve for,');
      createForgettingCurve();
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

let settingVoice = setInterval(()=> {

  if(speechSynthesis.getVoices().length !== 0)
  {
    utterance.voice = window.speechSynthesis.getVoices()[3]
    clearInterval(settingVoice)
  }
}, 200)

function speak(text){
  
  // Create a new speechSynthesisU
  let utterance = new SpeechSynthesisUtterance();

  // Changing voice to girl
  utterance.voice = window.speechSynthesis.getVoices()[5];

  
  utterance.text = text


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

function createForgettingCurve(){
  recognition.start()
  if(userText.value){
    let newFC = userText.value
    speak(`Created a forgetting curve for ${newFC}`)
  } 
}