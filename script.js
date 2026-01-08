const btn = document.querySelector("#btn");
const content = document.querySelector("#content");
const voice = document.querySelector("#voice");


// to make assistance speak
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = 'en-GB'; // we can change language as like this // 'en-GB' for english
    window.speechSynthesis.speak(text_speak);
}

// to wish based on time on each time we update it
function wishMe(){
    let day = new Date();
    let hrs = day.getHours();
    
    if(hrs >= 3 && hrs < 12){
        speak("Good afternoon, baby. How are you? Did you have your breakfast?");
    }
    else if(hrs >= 12 && hrs < 18){
        speak("Good afternoon, baby. Did you have your lunch?");
    }
    else{
        speak("Hello Sir, How was your day. Don't forget to have your dinner. Good night!");
    }
}

// on ever load of the window it will call wishMe function
window.addEventListener('load', () => {
    wishMe();
})


// to set speech recognition. Whatever we will speak it will read it
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;

    setTimeout(() => {
        content.innerText = 'Click here to talk to me';
    }, 3000);

    takeCommand(transcript.toLowerCase());
    
}


// on each click on the button it will respond 
btn.addEventListener("click", () => {
    recognition.start();
    btn.computedStyleMap.display = 'none';
    voice.style.display = 'block';
})

function takeCommand(message){
    btn.computedStyleMap.display = 'flex';
    voice.style.display = 'none';
    if(message.includes("hello")){
        speak("hello sir, how can i help you!");
    }
    else if(message.includes("who are you") || message.includes("hu r u")){
        speak("I am a Virtual Assistant, created by Nana KWeku Diawuo Appiah.")
    }
    else if(message.includes("open youtube")){
        speak("Opening Youtube...");
        window.open("https://www.youtube.com");

        content.innerText = 'Opening YouTube...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }

    else if(message.includes("open google")){
        speak("Opening Google...");
        window.open("https://www.google.com/");

        content.innerText = 'Opening Google...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }

    else if(message.includes("open chatgpt")){
        speak("Opening Chatgpt...");
        window.open("chatgpt.com");

        content.innerText = 'Opening ChatGpt...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }

    else if(message.includes("open tryhackme") || message.includes("open tryhack") || message.includes("open try hacking") || message.includes("open try hate me")){
        speak("Opening TryHackMe...");
        window.open("https://tryhackme.com/");

        content.innerText = 'Opening TryHackMe...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);

      }  

    else if(message.includes("open ctftime")){
        speak("Opening CTFtime...");
        window.open("https://ctftime.org/");

        content.innerText = 'Opening CTFtime...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }
    

    else if(message.includes("open calculator")){
        speak("Opening Calculator...");
        window.open("calculator://");

        content.innerText = 'Opening Calculator...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }

    else if(message.includes("open whatsapp")){
        speak("Opening WhatsApp...");
        window.open("whatsapp://");

        content.innerText = 'Opening WhatsApp...';
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }

    else if(message.includes("tell me time") || message.includes("what's the time right now") || message.includes("tell me time")) {
        let time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"});
        speak(time);
    }

    else if(message.includes("tell me date") || message.includes("what's the date today") || message.includes("tell me today's date")) {
        let date = new Date().toLocaleString(undefined, {day:"numeric", month:"short"});
        speak(date);
    }

    else{
        speak(`This is what i have found on the internet about ${message.replace("shifra","")} || ${message.replace("shipra","")}`);
        window.open(`https://www.google.com/search?q=${message.replace("shifra", "")}`);
        setTimeout(() => {
            content.innerText = 'Click here to talk to me';
        }, 3000);
    }

    
}