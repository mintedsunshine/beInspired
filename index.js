


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





// setup hourly wisdom

const hourlyWisdomList = {
  0: "The early bird catches the worm.",
  1: "The journey of a thousand miles begins with a single step.",
  2: "It's never too late to learn something new.",
  3: "The only way to do great work is to love what you do.",
  4: "The mind is everything. What you think you become.",
  5: "The difference between ordinary and extraordinary is that little extra.",
  6: "The only way to get started is to quit talking and begin doing.",
  7: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
  8: "The only thing that is impossible is something you do not attempt.",
  9: "The only thing that is constant is change.",
  10: "The best way to predict the future is to create it.",
  11: "The only way to know if you can achieve something is to try.",
  12: "The best way to learn is by doing.",
  13: "The only way to truly understand something is to teach it to someone else.",
  14: "The more you learn, the more you realize you don't know.",
  15: "A mind is a terrible thing to waste.",
  16: "The only thing that is more powerful than knowledge is action.",
  17: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
  18: "The only way to stay ahead of the curve is to keep learning.",
  19: "The only way to truly understand something is to experience it for yourself.",
  20: "The only way to change the world is to start with yourself.",
  21: "The only way to make a difference is to be different.",
  22: "The only way to be truly happy is to be true to yourself.",
  23: "The only way to live is to live in the present moment.",
  24: "The only way to know your limits is to push them."
};



function setupHourlyWisdom(){

    var now = new Date();

    var hourlyWisdomElement = document.getElementById("hourlyWisdom");
    var hourlyWisdom = "<i>" + hourlyWisdomList[now.getHours()] + "</i>"

    hourlyWisdomElement.innerHTML = hourlyWisdom;
}

setupHourlyWisdom()



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

