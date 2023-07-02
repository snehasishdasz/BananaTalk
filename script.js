let input = document.querySelector("textarea");
let btn = document.querySelector("button");
let output = document.querySelector("#output");
let listenBtn = document.querySelector("#listen");
let serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getUrl(inputTxt){
    return serverUrl + "?text=" + inputTxt;
}

function errorHandler(error){
    console.log("Error occured" ,error);
    alert("Something wrong with server! please try again after some time");
}
function translate(){
    let inputTxt = input.value;

    if(inputTxt.trim() == ""){
        alert("Please enter some text to translate in the given area first!");
        return;
    }

    fetch(getUrl(inputTxt))
    .then(response => response.json())
    .then(json =>{
        let translatedTxt = json.contents.translated;
        output.innerHTML = translatedTxt;
    }).catch(errorHandler)
}
function speakText() {
    let message = output.textContent;

    if ('speechSynthesis' in window) {
        // Speech synthesis supported
        var synthesis = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(message);
        utterance.voiceURI = 'Google US English';
        utterance.volume = 1;
        utterance.rate = 0.8;
        utterance.pitch = 1.5;
        synthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support speech synthesis.");
    }
}

btn.addEventListener("click", translate);
listenBtn.addEventListener("click", speakText);
