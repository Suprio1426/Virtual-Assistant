 const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {

        // recognition.start()
    //CONVERT TEXT TO VOICE.....
    function speak(text){
       const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }
  
    function handleCommands(command){

      if (command.includes("open youtube")){
            speak("Opening youtube sir...");
        window.open("https://www.youtube.com", "_blank");
      }
      else if(command.includes("open facebook")){
        speak("Opening facebook sir...");
        window.open("https://www.facebook.com", "_blank");
      }
      else if(command.includes("open instagram")){
        speak("Opening instagram sir...");
        window.open("https://www.instagram.com", "_blank");

       }
     else if(command.includes("open whatsapp")){
        speak("Opening whatsapp sir...");
        window.open("https://www.whatsapp.com", "_blank");
    }
     else if(command.includes("open vscode")){
        speak("Opening vscode sir...");
        window.open("C:\Users\supri\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code");
    }
      else{
         speak("searching on google sir...");
         window.open(`https://www.google.com/search?q=${command}`, "_blank");
      }
    }
    speak("Hello sir..., how can i help you..");
    

     setTimeout(() => {
       btn.innerHTML = "Listening ..."
        btn.style.backgroundColor = "red"
        recognition.start();
     },2000);

     recognition.onresult = (event) => {
      //console.log(event);
        const command =event.results[0][0].transcript.toLowerCase();
        handleCommands(command);
     };
     recognition.onend = () =>{
         btn.innerHTML = "Done sir.."
        btn.style.backgroundColor = "rgb(28, 130, 28)"
        btn.innerHTML = "Anything Else sir.."
     };
});
  