---
title: Grand Park // The Park for Everyone
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

{% if site.use_illustrations %}
<style>
main > h1.welcome span {
  height: auto;
  overflow: visible;
  margin: 0;
}
main > h1.welcome span svg {
  display: none;
}
main h1,
main h1 + h2 + p {
  grid-column-end: -4;
}
</style>

<style>
.girl {
  grid-column: -3/-1;
  grid-row: 1/3;
}
.girl svg {
  height: 20vmax;
  width: auto;
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
    grid-column: 2/-3;
  }
  main > h1.welcome span {
    /* font-size: 3.8vw; */
  }
  main > h1.welcome + p {
    margin-top: 3em;
    margin-bottom: 1.5em;
  }
}

main > h1.welcome em {
  transition: opacity 0.2s;
}
main > h1.welcome em.hidden {
  opacity: 0;
  position: absolute;
  left: -9999px;
}

</style>

{% if site.use_illustrations %}
<div class="girl">
{% include backgrounds/fountain.svg %}
</div>
{% endif %}

{% endif %}

{% include welcome.markdown %}

{% capture today_tomorrow %}{% include today-tomorrow.markdown %}{% endcapture %}
{{ today_tomorrow | markdownify }}


## Welcome to <span class="avoid-break">Grand Park</span>

All are invited to have a picnic on the lawn, stroll through the gardens, play in the splash pad, and attend Grand Park’s free year-round <span class="avoid-break">events & activities!</span>

<main markdown="1">

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

