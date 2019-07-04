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

{% if site.use_illustrations or true %}
<style>
body > main {
  padding-top: 1.5em;
}
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
main h1,
main h1 + h2 + p {
  grid-column-end: -3;
}
main h1 + h2 + p {
  max-width: 30em;
  margin-bottom: 7.5em;
}
@media (min-width: 60em) {
  main h1 + h2 + p {
    margin-bottom: 0;
  }
}
</style>

<style>
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
body > .sun {
  display: none;
}
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
  min-height: calc(100vw);
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
  min-height: calc(100vw);
  box-sizing: border-box;
  text-shadow: 0 0 0.5em hsla(0, 0%, 0%, 0.25);
  flex-wrap: wrap;
  align-content: flex-end;
}
@media (min-aspect-ratio: 1/1) {
  .welcome img,
  main > h1.welcome span {
    min-height: calc(66vw);
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
  min-height: calc(66vw);
  position: relative;
}
.welcome > b::after {
  content: "";
  position: absolute;
  z-index: 9999;
  background-image: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.25), hsla(0, 0%, 0%, 0) 25%, hsla(0, 0%, 0%, 0));
  width: 100%;
  height: 100%;
}
.welcome {
  grid-column: 1/-1 !important;
  margin-left: -1.5em !important;
  margin-right: -1.5em !important;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
@media (min-width: 50em) {
  main > h1.welcome {
    margin-top: -12.5em !important;
  }
  header {
    position: relative;
    z-index: 9999999999;
    text-shadow: 0 0 0.5em hsla(0, 0%, 0%, 0.25);
  }
  main > h1.welcome span {
    font-size: 7vw;
  }
}
@media (min-width: 60em) {
  main > h1.welcome {
    margin-top: -10em;
  }
}
</style>

{% include welcome.markdown %}




## Welcome to <span class="avoid-break">Grand Park</span>

All are invited to have a picnic on the lawn, stroll through the gardens, play in the splash pad, and attend Grand Park’s free year-round <span class="avoid-break">events & activities!</span>

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

<main markdown="1" class="lime-light">

{% if site.use_illustrations %}
<div class="illustration">
{% include backgrounds/trees-edited.svg %}
</div>
{% endif %}


{% capture today_tomorrow %}{% include today-tomorrow.markdown %}{% endcapture %}
{{ today_tomorrow | markdownify }}

## Happening soon

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
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
  </li>
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
        <p>
          Sunday, July 21
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-8.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
  
## Lunch à la park
  
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
      <img src="/uploads/programs/food-trucks-2.jpg" height="300" alt="" />
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
  
## Every day

<ol class="event-list">
  <li>
    <a href="/splash-pad/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Splash Pad</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/splash-pad-3.jpg" height="300" alt="" />
    </a>
  </li>
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

