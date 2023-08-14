
const url = 'https://inspiredstorms.pythonanywhere.com/diary';
const requestData = {
    query: {
        noQuery: "send all",
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


    let allDiariesHTML = '';

    for (let i=0; i<data.length; i++) {
        diary = data[i]
        let diariesHTML = '';
        let title = diary.title;
        let content = diary.content;
        diariesHTML += `
            <div class="diary column">
                <h1>${title}</h1>
                <p>${content}</p>
            </div>
            <div class="column horizontalAds infeedAdContainer">  
            </div>
        `;

        allDiariesHTML += diariesHTML;
    }


    var diariesContainerElement = document.getElementById("diariesContainer");
  
    diaries = allDiariesHTML
  
    diariesContainerElement.innerHTML = diaries

    console.log(allDiariesHTML)



})
.catch(error => {
  console.error('Error:', error);
});





