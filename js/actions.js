let time = new Date().getHours();
let morning = 4; //4am
let wakeupTime = 5; //5am
let noon = 12; //12pm
let napTime = 13; //1pm
let partyTime = 14; //2pm
let evening = 18; //6pm
let night = 21; //9pm
let isPartyTime = false;
const partyTimeButton = document.getElementById("partyTimeButton");
const wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
const lunchTimeSelector = document.getElementById("lunchTimeSelector");
const napTimeSelector = document.getElementById("napTimeSelector");


const updateClock = function() {
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    let messageText;
    let message = document.getElementById("timeEvent");
    let lolcat = document.getElementById("lolcat");

    if (time >= 5 && time < 6) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/wakeup.jpg?raw=true";
        messageText = "Wow! Time to wake up!";
    } else if (time < noon && time >= morning) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/default.jpg?raw=true";
        messageText = "Good morning, sunshine!";
    } else if (time >= partyTime && time < 15) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/party.jpg?raw=true";
        messageText = "PARTY! PARTY! PARTY!";
    } else if (time >= noon && time < 13) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/lunchtime.jpg?raw=true";
        messageText = "Lunch time!";
    } else if (time >= napTime && time < partyTime) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/naptime.jpg?raw=true;"
        messageText = "Yawn....naptime :)";
    } else if (time > noon && time < evening) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/default.jpg?raw=true";
        messageText = "Good afternoon!";
    } else if (time >= evening && time <= night) {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/default.jpg?raw=true";
        messageText = "Good evening!";
    } else {
        image = "https://github.com/katarzyna-kw/lolcat/blob/main/images/default.jpg?raw=true";
        messageText = "Good night!";
    }

    message.innerText = messageText;
    lolcat.src = image;

    showCurrentTime();
};


const showCurrentTime = function()
{
    // display the string on the webpage
    const clock = document.getElementById('clock');
 
    let currentTime = new Date();
 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    const clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
 
    clock.innerText = clockTime;
};

updateClock();

const oneSecond = 1000;
setInterval(updateClock, oneSecond);


const partyEvent = function() {
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "Party Over :("
        partyTimeButton.style.backgroundColor = "#ffde7d";    
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY TIME!!"
        partyTimeButton.style.backgroundColor = "Aquamarine";    
    }
};

partyTimeButton.addEventListener("click", partyEvent);

const wakeUpEvent = function () {
    wakeupTime = wakeUpTimeSelector.value;
}

const lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
}

const napEvent = function() {
    napTime = napTimeSelector.value;
}

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);

const modeButton = document.querySelector(".light-mode");
const theme = document.querySelector("body");

modeButton.addEventListener("click", function () {
    if (theme.classList.contains("light-mode")) {
        theme.classList.remove("light-mode");
        modeButton.innerText = "Light Mode";
    }
    else {
        theme.classList.add("light-mode");
        modeButton.innerText = "Dark Mode";
    }
});