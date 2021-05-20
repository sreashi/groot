var btn = document.querySelector(".btn");
var txt = document.querySelector("#text");
var result = document.querySelector("#text2");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?";

var serverURL = "https://api.funtranslations.com/translate/groot.json";
function getTranslationUrl(text){
    return serverURL + "?" + "text=" + text

}
function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with sever!Try again later");
}
function clickHandler() {
   
    // result.innerText = "bbaaannaana "+ txt.value;
    const inputText = txt.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translateTxt = json.contents.translated;
        result.innerText =  translateTxt;
    })
    .catch(errorHandler)
};

btn.addEventListener("click",clickHandler);

