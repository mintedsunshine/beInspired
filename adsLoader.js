const multiplexAdTemplate =`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3634501689585191" crossorigin="anonymous"> </script>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-3634501689585191"
     data-ad-slot="1663130210"></ins>

<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>`

const multiplexAdContainers = document.getElementsByClassName('multiplexAdContainer');
for (let i = 0; i < multiplexAdContainers.length; i++) {
    multiplexAdContainers[i].innerHTML = multiplexAdTemplate.trim();
}