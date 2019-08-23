---
title: Programs
permalink: /programs/
---

<nav markdown="1">
*   [Things to do](/events/)
</nav>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 3/5;
}
.illustration svg {
  height: 20vmax;
  width: auto;
}
body > main > nav:first-of-type,
main h1,
main h1 + p,
main h1 + p + nav,
main h1 + figure + p,
main h1 + figure + p + nav {
  grid-column-end: -4;
}

nav + figure {
  width: calc(100vw - 3em);
  height: calc(100vw - 3em);
  border-radius: 50%;
}
nav + figure img {
  display: block;
  width: calc(100vw - 3.75em);
  height: calc(100vw - 3.75em);
  object-fit: cover;
  border-radius: 50%;
  max-width: none;
}
@media (min-width: 60em) {
  nav + figure {
    width: auto;
    height: auto;
    grid-column: -3/-1;
    grid-row: 3/6;
    justify-self: end;
    align-self: start;
    margin-bottom: 0;
    margin-top: -1.5em;
  }
  nav + figure img {
    width: 25vw;
    height: 25vw;
  }
}
@media (min-width: 80em) {
  nav + figure {
    margin-right: 5vw;
    grid-row: 2/6;
  }
  nav + figure img {
    width: calc(2.5/8 * 100vw - 3em);
    height: calc(2.5/8 * 100vw - 3em);
  }
}
</style>

{% comment %}
<div class="illustration">
{% include backgrounds/fireworks.svg %}
</div>
{% endcomment %}
{% endif %}

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/3;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15.5em;
    position: relative;
    z-index: -1;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    overflow: hidden;
  }
  /*
  body > main > figure:first-of-type::after {
    content: "";
    background-image: linear-gradient(to right, hsla(267, 94%, 12%, 0.75), hsla(267, 94%, 12%, 0.75) 33%, hsla(267, 94%, 12%, 0));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  */
  body > main > figure:first-of-type::after {
    content: "";
    background-image: linear-gradient(to top, hsla(0, 0%, 0%, 0.25) 25%, hsla(0, 0%, 0%, 0.25) 25%, hsla(0, 0%, 0%, 0));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  body > main > figure:first-of-type img {
    width: 100%;
    height: calc(100vh + 1.5rem);
    min-height: 50vw;
    object-fit: cover;
    /*
    filter: blur(0.75vw);
    transform: scale(1.025);
    */
  }
  body > main > nav:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 2;
    color: var(--snow);
    align-self: end;
  }
  body > main > h1:first-of-type {
    grid-row: 2/3;
    align-self: start;
    position: relative;
    z-index: 1;
    color: var(--snow) !important;
  }
  body > main > h1:first-of-type + p,
  body > main > h1:first-of-type + figure + p {
  /*
    grid-row: 3/4;
    color: var(--snow) !important;
    text-shadow: 0 0 0.75em hsla(267, 94%, 12%, 1);
    */
  }
  body > main > h1:first-of-type + p + nav,
  body > main > h1:first-of-type + figure + p + nav {
  /*
    grid-row: 4/5;
    color: var(--snow) !important;
    text-shadow: 0 0 0.75em hsla(267, 94%, 12%, 1);
    */
  }
  body > main {
    grid-template-rows: repeat(6, min-content);
  }
  body > main > figure:first-of-type + main {
    margin-top: -1.5em;
  }
  body > .sun svg {
    color: var(--snow) !important;
    display: none;
  }
  /*
  .illustration {
    color: var(--snow);
  }
  */
  .illustration {
    grid-row: 4/6;
  }
}
</style>

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    /*
    grid-column: 1/-1;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-bottom: 0;
    */
  }
  body > main > figure:first-of-type img {
    height: 50vw;
    object-fit: cover;
  }
</style>

Programs
========

All are invited to Grand Park’s free year-round events including live music, exercise sessions, holiday gatherings, lunchtime activities, and much more!

<nav markdown="1">
*   [Lunch à la Park](/lunch/)
*   [Our L.A. Voices](/our-la-voices/)
*   [Sunday Sessions](/sunday-sessions/)
*   [4th of July](/4thofjuly/)
*   [Día de los Muertos](/día-de-los-muertos/)
*   [Winter Glow](/winter-glow/)
*   [New Year’s Eve](/nyela/)
</nav>

{% comment %}
<figure>
  <img src="/assets/temporary/misc/3_11_17_Downtown_Bookfest_cr_Javier_Guillen-139.jpg" alt="Photo 1" height="500" />
</figure>


<figure>
  <img src="/assets/temporary/misc/NYELA2019-0579.JPG" alt="" height="500" />
</figure>


<figure>
  <img src="/assets/temporary/welcome/384-wide/33.jpg" srcset="/assets/temporary/welcome/384-wide/33.jpg 384w, /assets/temporary/welcome/512-wide/33.jpg 512w, /assets/temporary/welcome/768-wide/33.jpg 768w, /assets/temporary/welcome/1024-wide/33.jpg 1024w, /assets/temporary/welcome/1536-wide/33.jpg 1536w, /assets/temporary/welcome/2048-wide/33.jpg 2048w" sizes="100vw" alt="Noche de Ofrenda" height="500" />
</figure>

{% endcomment %}

## Lunch à la Park

<p style="margin-right: 30vw">Come into the sunshine and enjoy everyone’s favorite time of the workday – the mighty lunch.</p>

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <!-- <p>Wednesday &amp; Friday</p> -->
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <!-- <p>Tuesday, Wednesday &amp; Thursday</p> -->
      </div>
      <img src="/assets/temporary/misc/2018_LunchalaPark_Javier_Guillen.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/spring-concerts/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Spring Concerts</h4>
        <!-- <p>Thursday</p> -->
      </div>
      <img src="/uploads/programs/spring-concerts.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## Our L.A. Voices

A pop-up arts + culture fest

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/our-la-voices/">
      <div>
        <h3>Our L.A. Voices</h3>
        <h4>Lunchtime Workshops</h4>
        <!-- <p>a pop-up arts + culture fest</p> -->
      </div>
      <img src="/uploads/programs/our-la-voices-4.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/our-la-voices/">
      <div>
        <h3>Our L.A. Voices</h3>
        <h4>Our L.A. Voices Festival</h4>
        <!-- <p>a pop-up arts + culture fest</p> -->
      </div>
      <img src="/uploads/programs/our-la-voices.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## Sunday sessions

L.A.’s finest DJs on select Sundays

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
      </div>
      <img src="/uploads/programs/sunday-sessions-2.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## 4th of July

Holiday celebration

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/4thofjuly/">
      <div>
        <h3>4th of July</h3>
        <h4>4th of July Block Party</h4>
      </div>
      <img src="/uploads/programs/4thofjuly.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## Downtown <span class="avoid-break">Día de los Muertos</span>

Grand Park celebrates the traditions of Día de los Muertos with multiple ways to experience and learn about the holiday.

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/noche-de-ofrenda/">
      <div>
        <h3>Día de los Muertos</h3>
        <h4>Noche de Ofrenda</h4>
        <!-- <p>Saturday, October 27, 2018</p> -->
      </div>
      <img src="/assets/temporary/welcome/384-wide/33.jpg" srcset="/assets/temporary/welcome/384-wide/33.jpg 384w, /assets/temporary/welcome/512-wide/33.jpg 512w, /assets/temporary/welcome/768-wide/33.jpg 768w, /assets/temporary/welcome/1024-wide/33.jpg 1024w, /assets/temporary/welcome/1536-wide/33.jpg 1536w, /assets/temporary/welcome/2048-wide/33.jpg 2048w" sizes="100vw" alt="Noche de Ofrenda" height="300" />
    </a>
  </li>
  <li>
    <a href="/baile-de-los-muertos/">
      <div>
        <h3>Día de los Muertos</h3>
        <h4>Baile de los Muertos</h4>
        <!-- <p>Saturday, November 3, 2018</p> -->
      </div>
      <img src="/assets/temporary/misc/2017_10_28_17_NocheDeOfrenda2017_Javier_Guillen-1.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/día-de-los-muertos-art/">
      <div>
        <h3>Día de los Muertos</h3>
        <h4>Altars & Art Installations</h4>
        <!-- <p>October 28 – November 4, 2018</p> -->
      </div>
      <img src="/uploads/programs/dia-de-los-muertos.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## Winter Glow

A month-long, immersive nighttime art experience 

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/winter-glow/">
      <div>
        <h3>Winter Glow</h3>
        <h4>Art Installations</h4>
      </div>
      <img src="/uploads/programs/winter-glow-3.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## New Year’s Eve

Countdown to the new year

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/nyela/">
      <div>
        <h3>New Year’s Eve</h3>
        <h4>N.Y.E.L.A.</h4>
      </div>
      <img src="/uploads/programs/nyela/live-video-poster.jpg" height="300" alt="" />
    </a>
  </li>
</ol>



<!-- ### Winter Glow

A month-long, immersive nighttime art experience 

<nav markdown="1">
*   [Art installations](/winter-glow/)
*   [New Year’s Eve, Los Angeles](/nyela/)
</nav> -->

<!--
*   [Lunch à la Park](/lunch/)
*   [Arts & culture](/)
*   [Classes & activities](/)
*   [For kids](/kids/)
*   [Holiday celebrations](/)
-->

{% comment %}

Lunch à la Park
---------------

### Every week at lunchtime

Come into the sunshine and enjoy everyone’s favorite time of the workday – the mighty lunch.

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <!-- <p>Tuesday, Wednesday &amp; Thursday</p> -->
      </div>
      <img src="/assets/temporary/misc/2018_LunchalaPark_Javier_Guillen.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/spring-concerts/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Spring Concerts</h4>
        <!-- <p>Thursday</p> -->
      </div>
      <img src="/uploads/programs/spring-concerts.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <!-- <p>Wednesday &amp; Friday</p> -->
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

* * *

Summer season
-------------

Free admission events, on select Sundays and holidays

<ol class="event-list">
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
      </div>
      <img src="/uploads/programs/sunday-sessions-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/4thofjuly/">
      <div>
        <h3>4th of July</h3>
        <h4>4th of July Block Party</h4>
      </div>
      <img src="/uploads/programs/4thofjuly.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

* * *

Fall season
-------------

Grand Park celebrates the traditions of Día de los Muertos with multiple ways to experience and learn about the holiday.

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/día-de-los-muertos/">
      <div>
        <h3>Fall season</h3>
        <h4>Día de los Muertos</h4>
      </div>
      <img src="/assets/temporary/día-de-los-muertos.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


* * *

Winter season
-------------

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/winter-glow/">
      <div>
        <h3>Winter season</h3>
        <h4>Winter Glow</h4>
        <p>an immersive nighttime art experience</p>
      </div>
      <img src="/uploads/programs/winter-glow-3.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/nyela/">
      <div>
        <h3>Winter season</h3>
        <h4>N.Y.E.L.A.</h4>
        <p>Countdown to 2019, New Year’s Eve</p>
      </div>
      <img src="/uploads/programs/nyela/live-video-poster.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


* * *

Spring season
-------------

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/spring-concerts/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Spring Concerts</h4>
        <p>featuring L.A.’s youth artists</p>
      </div>
      <img src="/uploads/programs/spring-concerts.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/our-la-voices/">
      <div>
        <h3>Spring season</h3>
        <h4>Our L.A. Voices</h4>
        <p>a pop-up arts + culture fest</p>
      </div>
      <img src="/uploads/programs/our-la-voices.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


{% endcomment %}


