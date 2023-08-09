


// Setup date and time

function updateCurrentTimeDateAndDay() {
    var currentTimeElement = document.getElementById("currentTime");
    var currentDateElement = document.getElementById("currentDate");
    var currentDayElement = document.getElementById("currentDay");
    
    var now = new Date();
    var currentTime = "<h1><strong>" + now.toLocaleTimeString() + "</strong></h1>";
    var currentDate = "<h1><strong>" + now.toLocaleDateString() + "</strong></h1>";
    var currentDay = "<h1><strong>" + now.toLocaleDateString('en-US', { weekday: 'long' }) + "</strong></h1>";
    
    currentTimeElement.innerHTML = currentTime;
    currentDateElement.innerHTML = currentDate;
    currentDayElement.innerHTML = currentDay;
}

updateCurrentTimeDateAndDay();
setInterval(updateCurrentTimeDateAndDay, 1000); 





// setup wake time and Message

const MessagesList = {
    0: "The night owl's wisdom guides the early risers. Embrace the tranquility of dawn.",
    1: "As the world sleeps, you're already up and conquering the day. Keep shining!",
    2: "Amidst the silence, you're scripting the start of a productive day. Good morning!",
    3: "While the stars still twinkle, you're creating your own brilliance. Have an amazing day!",
    4: "Rising with the sun, you're an inspiration to us all. Good morning!",
    5: "Starting the day with the sunrise? Your energy is contagious. Have an amazing morning!",
    6: "Waking up early speaks volumes about your commitment and drive. Have a productive day!",
    7: "Rising before the rest of the world wakes up is your superpower. Have an incredible day!",
    8: "The early bird gets more than just worms – they get success! Keep soaring high.",
    9: "You're turning morning inspiration into daytime accomplishments. Keep up the great work!",
    10: "The day is young, and so are your aspirations. Make it a day to remember!",
    11: "Mid-morning and your productivity is already in full swing. Keep riding that momentum!",
    12: "Lunchtime fuels both body and spirit. Keep rocking the day with your early start!",
    13: "Afternoon sun and your determination continue to shine brightly. Keep pushing forward!",
    14: "In the midst of the day's hustle, your early rise keeps you ahead of the game.",
    15: "Afternoon is no match for your early morning zeal. Keep conquering your goals!",
    16: "Late afternoon and your energy is as high as it was at dawn. Keep up the fantastic pace!",
    17: "As the day winds down, your accomplishments continue to soar. Well done!",
    18: "Evening sunsets remind us of the beauty in early beginnings. Reflect on a productive day!",
    19: "Your early start laid the foundation for a day well-lived. Enjoy a well-deserved evening.",
    20: "Twilight arrives, and you're still shining bright. Here's to your dedication!",
    21: "Nighttime whispers its arrival, but your early morning echoes on. Keep inspiring!",
    22: "In the quiet of the night, your early rise is a beacon of determination. Rest well!",
    23: "The day comes full circle, and your early start remains an inspiration. Sleep tight!"
  };


function setupMessage(){

    var now = new Date();

    var MessageElement = document.getElementById("message");
    var message = "<i>" + MessagesList[now.getHours()] + "</i>"

    MessageElement.innerHTML = message;
}

setupMessage()



// setup today's quotes
const quotesList = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Start where you are. Use what you have. Do what you can.",
    // ... (Add all 366 quotes here)
    "You are capable of more than you know.",
  ];


function setupTodaysQuote(){

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));

  var quote = quotesList[dayOfYear]
  console.log(quote, dayOfYear)

  var todaysQuoteElement = document.getElementById("todaysQuote");
  todaysQuoteElement.innerHTML = "<i>" + quote + "</i>"

}

setupTodaysQuote()

