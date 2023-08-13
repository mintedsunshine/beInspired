
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

    for (const title in data) {
        const diaries = data[title];
        let diariesHTML = '';
        for (let i = 0; i < diaries.length; i++) {
            const diary = diaries[i];
            diariesHTML += `
                <div class="diary">
                    <h1>${title}</h1>
                    <p>${diary}</p>
                </div>
            `;
        }
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





