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

  // listening 
  let recognition = new webkitSpeechRecognition();
  let final_transcript = "";

  // this will continously listen to the user
  recognition.continuous = true;

  // setting lang en-Global
  recognition.lang = 'en-GB';

  // This event does when object starts 
  recognition.onstart = () => {
    console.log('Started Listening...')  
    document.querySelector('.waveContainer').style.display = 'flex';
    document.querySelector('nav').style.display = 'flex';

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

    let interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    document.querySelector(".prompt-input").value = final_transcript;
    // document.querySelector(".user-speech-interim").innerHTML = interim_transcript;

  }  

// THis part is not required since we can call for recognition by 
// function listen(){
  
//   // Some browsers may not support, backup webkit for those
//   const SpeechRecognition1 = window.SpeechRecognition || window.webkitSpeechRecognition;
  
//   // Create a SpeechRecognition instance
//   const recognition = new SpeechRecognition1(); // Prefix for Chrome
  
  
//   // const recognition = new SpeechRecognition()
//   const speechRecognitionList = new SpeechGrammarList();
//   speechRecognitionList.addFromString(grammar, 1);
//   recognition.grammars = speechRecognitionList;

//   // Configure recognition
//   recognition.lang = 'en-IN';
//   recognition.continuous = true;
//   recognition.interimResults = true;

//   // Event handlers
//   recognition.onresult = (event) => {
//     const transcript = event.results[event.results.length - 1][0].transcript;
//     console.log('Recognized:', transcript);
//   };

//   recognition.onend = () => {
//     recognition.start(); // Restart recognition
//   };

//   // Start recognition
//   recognition.start();

// }
