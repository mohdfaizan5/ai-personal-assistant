const API_KEY = 'sk-2FMImxiM5LlSYsWOCvkgT3PlbkFJF79FvqmZt6RvhW3u5jyE'
let userPrompt = 'tell me about incubation center'


const generateResponse = async(){
  

// Setting up the API to get specific details.
const API_URL = 'https://api.openai.com/v1/completions' // From where request needs to be done
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  },
  body:JSON.stringify({
    model: 'text-davinci-003',
    prompt: userPrompt,
    max_tokens: 2048,
    temperature: 0.2,
    n: 1,
    stop: null
  })
}
}

// Calling/Requesting the API
function callingAI(){
  try{
    const response = await(async fetch(API_URL, requestOptions)).json();
    console.log(response.choices[0].text)
  }
  catch(error){
    console.log('error has occurred ')
    console.log(error)
  }
}