let input = document.querySelector("textarea");
let btn = document.querySelector("button");
let output = document.querySelector("#output");
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
btn.addEventListener('click',translate);