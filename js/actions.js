var time = new Date().getHours();
var morning = 4; //4am
var wakeupTime = 5; //5am
var noon = 12; //12pm
var napTime = 13; //1pm
var partyTime = 14; //2pm
var evening = 18; //6pm
var night = 21; //9pm
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


var updateClock = function() {
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    var messageText;
    var message = document.getElementById("timeEvent");
    var lolcat = document.getElementById("lolcat");

    if (time >= 5 && time < 6) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wow! Time to wake up!";
    } else if (time < noon && time >= morning) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
        messageText = "Good morning, sunshine!";
    } else if (time >= partyTime && time < 15) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "PARTY! PARTY! PARTY!";
    } else if (time >= noon && time < 13) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Lunch time!";
    } else if (time >= napTime && time < partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg;"
        messageText = "Yawn....naptime :)";
    } else if (time > noon && time < evening) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
        messageText = "Good afternoon!";
    } else if (time >= evening && time <= night) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
        messageText = "Good evening!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
        messageText = "Good night!";
    }

    message.innerText = messageText;
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

var wakeUpEvent = function () {
    wakeupTime = wakeUpTimeSelector.value;
}

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
}

var napEvent = function() {
    napTime = napTimeSelector.value;
}

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);