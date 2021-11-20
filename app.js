window.SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
let template = document.getElementById("template");
let p = document.createElement("p");
template.appendChild(p);
var value=1;

recognition.addEventListener("result",e=>{
 let text = e.results[0][0].transcript;
 p.innerHTML = text;4
 console.log(text);
 
 if(e.results[0].isFinal === true){
 p = document.createElement("p");
 template.appendChild(p);
 }
 window.localStorage.setItem(`Speech:${value}`,text);
 value++;
});
recognition.addEventListener("end",recognition.start)
recognition.start();




