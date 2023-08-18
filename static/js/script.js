// import { otherFile } from './speechRecognition.js';
 
// otherFile();
let allQuestions = {
  'what is your name':'natasha',
  'create a forgetting curve':'yes i'
}


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
  


  // Handling user input.

  btn.addEventListener('click', function(){
    console.log(userText.value);
    // speak(document.querySelector('.prompt-input').value)

    // if(userText.value.includes(allQuestions.forEach(element => {
    //   element.key
      
    // });))

    if(userText.value.includes('sad')){
      speak('Dont be sad man!! God is with you')
    }

    if(userText.value.includes('create a forgetting curve')){
      speak('What should I create a forgetting curve for,');
      console.log('What should I create a forgetting curve for,');
      createForgettingCurve();
    }

    if(userText.value.includes('pomodoro')){
      console.log(userText.value)
      speak('opening pomodoro')
      window.location = './other_applications/pomodoro-akshay/'
    }

    if(userText.value.includes('forgetting curve')){
      console.log(userText.value)
      speak('opening forgetting curve')
      window.location = './other_applications/forgetting-curve-faizan/'
    }

    if(userText.value.includes('who are you') || userText.value.includes('tell me something about you') ){
      speak('...  I am personal assistant that can help you in your daily work.')
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

  // Changing voice to girl
  // utterance.voice = window.speechSynthesis.getVoices()[5]; //Eng Google UK Female.

  // speak what arg is passed to it.
  utterance.text = text

  // Finally speaking
  window.speechSynthesis.speak(utterance)

  utterance.onstart = (event)=> {
    console.log('started speaking')
  }

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