---
title: Grand Park / The Park for Everyone
permalink: /

welcome:

# From a person

  # Chinese (simplified)
  - 欢迎

  # Filipino
  - Maligayang pagdating

  # Hawaiian
  - E Komo Mai

  # Spanish
  - Bienvenido
  
# From Google Translate

  # Arabic
  - أهلا بك

  # Armenian
  - Բարի գալուստ

  # Chinese (traditional)
  - 歡迎

  # Croatian
  - Dobrodošli

  # Dutch
  - Welkom

  # English
  - Welcome

  # French
  - Bienvenue

  # German
  - Herzlich willkommen

  # Greek
  - καλως ΗΡΘΑΤΕ

  # Hebrew
  - ברוך הבא

  # Hindi
  - स्वागत हे 

  # Hungarian
  - Üdvözöljük

  # Hmong
  - Txais tos

  # Italian
  - Benvenuta

  # Japanese
  - ようこそ

  # Korean
  - 환영

  # Lao
  - ຍິນດີຕ້ອນຮັບ

  # Navajo: https://glosbe.com/en/nv/welcome
  - Yáʼátʼééh

  # Persian
  - خوش آمدید

  # Polish
  - Witamy

  # Portugese
  - Bem vinda

  # Russian
  - приветствовать

  # Swedish
  - Välkommen

  # Thai
  - ยินดีต้อนรับ

  # Vietnamese
  - Chào mừng bạn 

  # Yiddish
  - באַגריסונג
---

<style>
body > main > main:first-of-type > h2:first-of-type,
body > main > main:first-of-type > .event-list + h2 {
  position: absolute;
  left: -9999px;
}
</style>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/4;
}
.illustration svg {
  height: 13.5vmax;
  width: 13.5vmax;
  margin-top: 1em;
  margin-left: 1em;
}
.illustration svg * {
  fill: currentColor;
}
body > main > main:first-of-type > h2:first-child + p,
body > main > main:first-of-type > h2:first-child + p + nav {
  grid-column-end: -3;
}
body > main > main:first-of-type > h2:first-child + p {
  max-width: 30em;
}
</style>

<style>
/*
.illustration {
  position: absolute;
  right: 10%;
  transform: translate(0, -100%);
  color: var(--snow);
}
.illustration svg {
  display: block;
  height: 13.125vmax;
  width: auto;
  position: relative;
  top: -1.5em;
}
*/
/*
body > main {
  padding-top: 1.5em;
}
*/
main > h1.welcome {
  display: grid;
  height: 7.5em;
}
@media (min-width: 60em) {
  main > h1.welcome {
    height: 7.5em;
  }
}
main > h1.welcome span {
  margin: 0;
  display: block;
  align-self: start;
  height: auto;
}
main > h1.welcome span svg {
  display: none;
}
main > h1.welcome span svg {
  display: none;
}
main > h1.welcome {
  width: auto;
  overflow: visible;
  margin-left: 0em;
  margin-right: 0em;
}
@media (min-width: 60em) {
  main > h1.welcome {
    padding-left: 2.25em;
    padding-right: 2.25em;
    padding-left: 0;
    padding-right: 0;
    grid-column: 2/-2;
    width: 133.333vh;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-self: center;
  }
  main > h1.welcome span {
    font-size: 3.5vw;
  }
  main > h1.welcome + p {
    margin-top: 3em;
    margin-bottom: 1.5em;
  }
  main > h1.welcome + h2 {
    max-width: 7em;
  }
}

/*
main > h1.welcome em {
  transition: opacity 0.2s;
}
*/
main > h1.welcome em.hidden {
  opacity: 0;
  position: absolute;
  left: -9999px;
}

</style>

{% endif %}

<style>
.welcome {
  position: relative;
  height: auto !important;
  border-width: 0.375em 0;
  border-style: solid;
  border-color: var(--text-color);
}
.welcome img {
  object-fit: cover;
  object-position: center;
  position: relative;
  min-height: calc(66vw);
  box-sizing: border-box;
  display: block;
  grid-column: 1/-1;
  grid-row: 1/-1;
  align-self: stretch;
  transition: opacity 0.2s;
}
main > h1.welcome span {
  padding: 0.75em !important;
  position: relative;
  z-index: 999999;
  display: flex !important;
  min-height: calc(66vw);
  box-sizing: border-box;
  text-shadow: 0 0 0.5em hsla(0, 0%, 0%, 0.25);
  flex-wrap: wrap;
  align-content: flex-end;
}
/*
@media (min-aspect-ratio: 1/1) {
  .welcome img,
  main > h1.welcome span {
    width: 100%;
    height: calc(100vh + 1.5rem);
    min-height: 50vw;
  }
}
*/
@media (min-width: 40em) {
  .welcome img,
  main > h1.welcome span {
    width: 100%;
    height: 66vh;
    min-height: 66vh;
  }
}
main > h1.welcome span > * {
  margin: 0 0.25em !important;
}
.welcome > * {
  grid-column: 1/-1;
  grid-row: 1/-1;
  display: flex !important;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.welcome > b {
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  /* min-height: calc(66vw); */
  position: relative;
}
.welcome > b::after {
  content: "";
  position: absolute;
  z-index: 9999;
  background-image: linear-gradient(to top, hsla(0, 0%, 0%, 0.25), hsla(0, 0%, 0%, 0.25) 25%, hsla(0, 0%, 0%, 0));
  width: 100%;
  height: 100%;
}
.welcome {
  /*
  grid-column: 1/-1 !important;
  */
  margin-left: -1.5em !important;
  margin-right: -1.5em !important;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
@media (min-width: 60em) {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
/*
@media (min-width: 60em) {
  .welcome {
    margin-left: -6.25vw !important;
    margin-right: -6.25vw !important;
  }
}
*/
@media (min-width: 50em) {
  main > h1.welcome span {
    font-size: 3vw;
  }
}
@media (min-width: 60em) and (false) {
  main > h1.welcome {
    margin-top: -12.5em !important;
  }
  header {
    position: relative;
    z-index: 9999999999;
  }
  body > .sun {
    z-index: 9999999999;
    display: none;
  }
  body > .sun svg {
    color: var(--snow) !important;
  }
}
@media (min-width: 60em) and (false) {
  main > h1.welcome {
    margin-top: -10em;
  }
}

body > main > h1.welcome {
  margin-top: 0;
}
body > main > main:first-of-type {
  margin-top: 0;
  padding-top: 3em;
}
@media (min-width: 60em) {
  body > main > h1.welcome {
    margin-top: 0;
    margin-bottom: 7.5em;
  }
  body > main > main:first-of-type {
    margin-top: -1.5em;
    padding-top: 4.5em;
  }
}

h1.welcome {
  background: var(--text-color) !important;
  border: 0.375em solid var(--text-color) !important;
}
main > h1.welcome {
  background: var(--strawberry);
}
h1.welcome,
h1.welcome span {
  color: var(--snow);
}

</style>


{% include welcome.markdown %}




<script>
(function() {

  if (!document.body.querySelector || !document.body.querySelectorAll) return

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  (function() {

    function randomize(selector) {
      let items = document.querySelectorAll(selector)
      if (items.length < 1) return

      let nextItem
      let parent = items[0].parentNode
      let maxItems = 5

      for (let index = 0; index < items.length; index++) {

        // Get a random item
        nextItem = items[getRandomInt(items.length)]

        // Move it before the first item
        parent.removeChild(nextItem)
        // console.dir(nextItem)
        // console.dir(items)
        parent.insertBefore(nextItem, document.querySelector(selector))
      }

      if (Node && Node.ELEMENT_NODE) {
        nextItem = parent.firstChild
        do {
          if (nextItem.nodeType == Node.ELEMENT_NODE) {
            // console.log("adding a space")
            nextItem.parentNode.insertBefore(document.createTextNode(" "), nextItem)
          }
        } while(nextItem = nextItem.nextSibling)
      }
      
      items = document.querySelectorAll("h1.welcome > span > em")
      
      let cursor = 0
      let itemsAtRandom = []
      do {
        let randomInt = getRandomInt(items.length)
        if (!itemsAtRandom.includes(randomInt)) {
          itemsAtRandom.push(randomInt)
        }
      } while(itemsAtRandom.length < items.length)

      let englishIndex
      for (let index = 0; index < items.length; index++) {
        // console.log(items[index].getAttribute("data-message"))
        if (items[index].getAttribute("data-message") == "Welcome") {
          englishIndex = index
        }
      }
      if (englishIndex) {
        // console.log(englishIndex)
        // console.log(items[englishIndex])
        let targetIndex = itemsAtRandom.indexOf(englishIndex);
        // console.log(targetIndex)
        if (targetIndex > -1) {
          // console.log("removing the item: " + targetIndex)
          itemsAtRandom.splice(targetIndex, 1);
        }
        for (let index = 1; index < itemsAtRandom.length - 3; index+=3) {
          itemsAtRandom.splice(index, 0, englishIndex)
        }
        // console.log(itemsAtRandom)
      }

      function update() {
        // console.log("update")

        let toShow

        toShow = [itemsAtRandom[cursor]]
        cursor++
        if (cursor > itemsAtRandom.length - 1) cursor = 0

        toShow.push(itemsAtRandom[cursor])
        cursor++
        if (cursor > itemsAtRandom.length - 1) cursor = 0

        toShow.push(itemsAtRandom[cursor])
        cursor++
        if (cursor > itemsAtRandom.length - 1) cursor = 0

        let counter = 1
        // do {
        //   let randomInt = getRandomInt(items.length)
        //   if (!toShow.includes(randomInt)) {
        //     toShow.push(randomInt)
        //   }
        // } while(toShow.length < 1)
        // console.dir(toShow)
        for (let index = 0; index < items.length; index++) {
          nextItem = items[index]
          if (toShow.includes(index)) {
            nextItem.classList.remove("hidden")
            // nextItem.classList.add(`visible-${counter++}`)
          } else {
            nextItem.classList.add("hidden")
            nextItem.classList.remove(`visible-1`)
            nextItem.classList.remove(`visible-2`)
            nextItem.classList.remove(`visible-3`)
            nextItem.classList.remove(`visible-4`)
            nextItem.classList.remove(`visible-5`)
            nextItem.classList.remove(`visible-6`)
          }
        }
      }
      setInterval(update, 8090)
      update()
    }

    randomize("h1.welcome > span > *")
    document.querySelector("h1.welcome span").removeAttribute("style")
  })();

  (function() {
    let zIndex = 1
    let cursor = 0
    let currentImage
    let previousImage
    let images = document.querySelectorAll(".welcome > b > img")
    let imagesAtRandom = []
    do {
      let randomInt = getRandomInt(images.length)
      if (!imagesAtRandom.includes(randomInt)) {
        imagesAtRandom.push(randomInt)
      }
    } while(imagesAtRandom.length < images.length)

    /*
    console.log(imagesAtRandom)
    let itemsToRemove = [5, 6, 8, 18, 19, 20, 25, 36, 38, 39, 40, 41, 42, 43]
    for (let index = 0; index < itemsToRemove.length; index++) {
      let targetIndex = imagesAtRandom.indexOf(itemsToRemove[index] - 1);
      // console.log(targetIndex)
      if (targetIndex > -1) {
        // console.log("removing the item: " + targetIndex)
        imagesAtRandom.splice(targetIndex, 1);
      }
    }
    */

    function updateImage() {
      currentImage = images[imagesAtRandom[cursor]]
      cursor++
      if (cursor > imagesAtRandom.length - 1) cursor = 0
      currentImage.style.zIndex = zIndex++
      currentImage.style.display = "block"
      setTimeout(() => {
        currentImage.style.opacity = 1
        setTimeout(() => {
          if (previousImage) previousImage.style.opacity = 0
          if (previousImage) previousImage.style.display = "none"
        }, 500)
      }, 1)
    }
    setInterval(updateImage, 8090)
    updateImage()
  })();

})();
</script>

<main markdown="1" class="strawberry-light" style="padding-top: 2.25em; padding-bottom: 0;">



<h2 style="position: static; max-width: 8em">Welcome to <span class="avoid-break">Grand Park</span></h2>

All are invited to have a picnic on the lawn, stroll through the gardens, play in the splash pad, and attend Grand Park’s free year-round <span class="avoid-break">events & activities!</span>

{% if site.use_illustrations %}
<style>
.illustration-group {
  display: grid;
  grid-template-columns: 1fr;
  width: 23vmax;
}
.illustration-group > div {
  grid-column: 1/-1;
  grid-row: 1/-1;
}
.illustration-city-hall svg {
  transform: scaleX(-1);
}
.illustration-city-hall-sun {
  width: 3.75vmax;
  height: 3.75vmax;
  background-color: var(--banana);
  border-radius: 50%;
}

@media (min-width: 60em) {
  .illustration-group {
    transform: scale(0.65) translateY(3.875em);
  }
}
</style>
<div class="illustration illustration-group" style="color: hsl(32, 93%, 72%)">
  <div class="illustration-city-hall-sun"></div>
  <div>
  {% include trees/city-hall-edited.svg %}
  </div>
  <div class="illustration-city-hall" style="transform: translate(22.5%, -9%) scale(1.2); filter: brightness(95%) saturate(0.95);">
  {% include trees/palm-2.svg %}
  </div>
  <div style="transform: translate(10%, 11%) scale(0.75); filter: brightness(95%) saturate(0.95);">
  {% include trees/palm-2.svg %}
  </div>
</div>
{% endif %}

</main>
<main markdown="1" class="strawberry" style="background-image: linear-gradient(to bottom, hsl(32, 93%, 72%), var(--strawberry))">


{% capture today_tomorrow %}{% include today-tomorrow.markdown %}{% endcapture %}
{{ today_tomorrow | markdownify }}

<div></div>

{% comment %}
## Happening soon
{% endcomment %}

## <a id="today"></a> Today at <span class="avoid-break">Grand Park</span>

<ol class="event-list" style="grid-template-columns: 1fr;">
  <!-- <li>
    <a href="/4thofjuly/">
      <div>
        <h3>4th of July</h3>
        <h4>4th of July Block Party</h4>
        <p>
          Thursday, July 4
        </p>
      </div>
      <img src="/uploads/programs/4thofjuly.jpg" height="300" alt="" />
    </a>
  </li> -->
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
        <p>
          Sunday, August 18
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-8.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
  
## Lunch à la Park <a id="weekly"></a>

### Every week at lunchtime

Come into the sunshine and enjoy everyone’s favorite time of the workday – the mighty lunch.

<ol class="event-list">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>
          Tuesday, Wednesday &amp; Thursday
        </p>
      </div>
      <img src="/assets/temporary/misc/2018_LunchalaPark_Javier_Guillen.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>
          Wednesday &amp; Friday
        </p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
  
## <a id="daily"></a> Every day

These [areas of the park](/areas/) are open daily. Just drop by!

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/splash-pad/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Splash Pad</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/assets/temporary/misc/Select_JMC1743.jpg" style="object-position: bottom;" alt="Splash Pad" height="500" />
    </a>
  </li>
</ol>
<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/gardens/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Gardens</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/gardens-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/playground/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Playground</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/playground-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/dog-run/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Dog Run</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/dog-run.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/performance-lawn/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Performance Lawn</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/performance-lawn-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

</main>

