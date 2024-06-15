
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

    loadAds()
    
})
.catch(error => {
  console.error('Error:', error);
});


function loadAds(){
        // // Templates list

    const multiplexAdTemplate =`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3634501689585191" crossorigin="anonymous"> </script>
    
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-format="autorelaxed"
         data-ad-client="ca-pub-3634501689585191"
         data-ad-slot="1663130210">
    </ins>
    
    <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>`
    
    
    const inFeedAdTemplate = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3634501689585191" crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="fluid"
        data-ad-layout-key="-e2+58-1q-dy+14t"
        data-ad-client="ca-pub-3634501689585191"
        data-ad-slot="4268579427">
    </ins>
    
    <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>`
    
    
    const multiplexAdContainers = document.getElementsByClassName('multiplexAdContainer');
    for (let i = 0; i < multiplexAdContainers.length; i++) {
        multiplexAdContainers[i].innerHTML = multiplexAdTemplate.trim();
    }
    
    const inFeedAdContainers = document.getElementsByClassName('inFeedAdContainer');
    for (let i = 0; i < inFeedAdContainers.length; i++) {
        inFeedAdContainers[i].innerHTML = inFeedAdTemplate.trim();
    }
}
