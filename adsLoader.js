// Templates list

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





