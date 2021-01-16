var time = new Date().getHours();
var noon = 12;
var evening = 17;
var partyTime = 18;
var napTime = lunchTime + 2;
var lunchTime = 12;
var wakeUpTime = 5;
var isPartyTime = false;

var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var updateClock = function() {
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    var messageText;        
    var timeEventJS = document.getElementById("timeEvent");
    var lolcat = document.getElementById("lolcat");

    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "PARTY TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "NAP TIME...";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "LUNCH!!";
    } else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "MORNING, SUNSHINE";
    } else if (time < noon) {
        messageText = "GOOD MORNING!";
    } else if (time > evening) {
        messageText = "GOOD EVENING!";
    } else {
        messageText = "GOOD AFTERNOON!";
    }

    timeEventJS.innerText = messageText;
    lolcat.src = image;

    showCurrentTime();

};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) { 
        meridian = "PM"; 
    }  
    if (hours > noon) { 
        hours = hours = 12; 
    }
 
    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;

};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "Party Over :(";
        partyTimeButton.style.backgroundColor = "#222";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#B11414";
    }

};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

var napTimeEvent = function() {
    napTime = napTimeSelector.value;
};

var lunchTimeEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
napTimeSelector.addEventListener('change', napTimeEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);