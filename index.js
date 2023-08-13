


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


var now = new Date();
const thisHour = now.getHours()
const startOfYear = new Date(now.getFullYear(), 0, 0);
const dayOfYear = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));


const url = 'https://inspiredstorms.pythonanywhere.com/quotes';
const requestData = {
    query: {
        todaysQuote: dayOfYear.toString(),
        hourlyWisdom: thisHour.toString()
    }
};


fetch(url, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
})
.then(response => {
  if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
  }
  return response.json();
})
.then(data => {


  var todaysQuoteElement = document.getElementById("todaysQuote");
  var hourlyWisdomElement = document.getElementById("hourlyWisdom");

  todaysQuote = "<i>" + data['todaysQuote'] + "</i>";
  hourlyWisdom = "<i>" + data['hourlyWisdom'] + "</i>";

  todaysQuoteElement.innerHTML = todaysQuote
  hourlyWisdomElement.innerHTML = hourlyWisdom


})
.catch(error => {
  console.error('Error:', error);
});
