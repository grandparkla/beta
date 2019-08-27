---
title: Things to do
permalink: /events/
---

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 2/4;
}
.illustration svg {
  height: 15vmax;
  width: 15vmax;
  margin-top: 1em;
  margin-left: 1em;
}
main h1,
main h1 + p,
main h1 + p + nav {
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
    grid-row: 2/5;
    justify-self: end;
    align-self: start;
    margin-bottom: 0;
    margin-top: 0;
  }
  nav + figure img {
    width: 25vw;
    height: 25vw;
  }
}
@media (min-width: 80em) {
  nav + figure {
    margin-right: 5vw;
    grid-row: 1/5;
  }
  nav + figure img {
    width: calc(2.5/8 * 100vw - 3em);
    height: calc(2.5/8 * 100vw - 3em);
  }
}


.illustration-palm-1 {
  margin-left: -1.5em;
  width: 100vw;
  margin-right: -1.5em;
  left: unset;
  color: hsla(0, 0%, 0%, 0.5);
}
@media (min-width: 60em) {
  .illustration-palm-1 {
  }
}
.illustration-palm-1 svg {
  width: 100vw;
  max-width: unset;
  margin-left: unset;
}
.illustration-palm-2 {
  display: none;
}
</style>

{% comment %}
<div class="illustration">
{% include backgrounds/picnic.svg %}
</div>
{% endcomment %}
{% endif %}




<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/2;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15.5em;
    position: relative;
    z-index: -1;
  }
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
  }
  /*
  body > main > nav:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 1;
    color: var(--snow);
    align-self: end;
  }
  */
  body > main > h1:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 1;
    color: var(--snow) !important;
    margin-bottom: 2.25em;
    align-self: end;
  }
  body > .sun {
    display: none;
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

Things to do
=============================================

<!--
Relax, have a picnic, play in the splash pad, and enjoy our free events & activities.
-->
Lunchtime yoga, summer dance sessions, free admission holiday celebrations, <span class="avoid-break">and more!</span>
<!-- All are invited to have a picnic on the lawn, stroll through the gardens, play in the splash pad, and attend Grand Park’s free year-round <span class="avoid-break">events & activities!</span> -->

<nav markdown="1">
{% if site.events_today -%}
*   [Today](/events/#today)
{% elsif site.events_tomorrow -%}
*   [Tomorrow](/events/#tomorrow)
{% endif -%}
*   [Every day](/events/#daily)
*   [Lunchtime](/events/#weekly)
*   [Calendar](/calendar/)
*   [Programs](/programs/)
</nav>

<figure>
  <img src="/assets/temporary/park/umbrellas.jpg"  alt="Photo 1" height="500" />
</figure>

<!--

<figure>
  <img src="/assets/temporary/welcome/384-wide/32.jpg" srcset="/assets/temporary/welcome/384-wide/32.jpg 384w, /assets/temporary/welcome/512-wide/32.jpg 512w, /assets/temporary/welcome/768-wide/32.jpg 768w, /assets/temporary/welcome/1024-wide/32.jpg 1024w, /assets/temporary/welcome/1536-wide/32.jpg 1536w, /assets/temporary/welcome/2048-wide/32.jpg 2048w" sizes="100vw" alt="Photo 1" height="500" />
</figure>

<figure>
  <img src="/assets/temporary/misc/3_11_17_Downtown_Bookfest_cr_Javier_Guillen-139.jpg" alt="Photo 1" height="500" />
</figure>
-->

{% capture today_tomorrow %}{% include today-tomorrow.markdown %}{% endcapture %}
{{ today_tomorrow | markdownify }}

{% comment %}
## <a id="today"></a> Today at<br /><span class="avoid-break">Grand Park</span>
{% endcomment %}

## Happening soon

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
          Sunday, September 22
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-2.jpg" height="300" alt="" />
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


## Lunch à la Park <a id="weekly"></a>

### Every week at lunchtime

Come into the sunshine and enjoy everyone’s favorite time of the workday – the mighty lunch.

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <!--
        <p>Today from <time datetime="11:00">11 a.m.</time> to <time datetime="14:00">2 p.m.</time></p>
        -->
        <p>
          Tuesday, Wednesday &amp; Thursday
          <!--<br />June 11–13<br /><time datetime="11:00">11 a.m.</time> to <time datetime="14:00">2 p.m.</time>-->
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
        <!--
        <p>Today from <time datetime="12:15">12:15 p.m.</time> to <time datetime="13:00">1:00 p.m.</time></p>
        -->
        <p>
          Wednesday &amp; Friday
          <!--
          <br />June 12 &amp; 14<br /><time datetime="12:15">12:15 p.m.</time> to <time datetime="13:00">1:00 p.m.</time>
          -->
        </p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

{% comment %}
<style>
.hill {
  grid-column: 1/-1;
  margin-left: -1.5em;
  margin-right: -1.5em;
  margin-top: -1.5em;
}
.hill svg {
  display: block;
  position: relative;
  z-index: 1;
  left: 0;
  bottom: -1px;
  width: 100vw;
  height: calc(173.2/1658.8 * 100vw);
  max-width: none;
  color: var(--snow);
}
.hill svg path {
  fill: currentColor;
}
</style>

<div class="hill" style="
    /* background: hsl(31, 90%, 68%); */
">
  <svg style="color: hsl(77, 100%, 89%);/* background: hsla(0, 0%, 99%, 0.5); */" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1658.8 173.2" preserveAspectRatio="none">
  <path d="M1662.1,177.1L1662.1,177.1L-2.8,174.3l1.1-66.6c0,0,389,62.5,534.7,59.2c195-4.5,399.6-12.8,655.5-68.3
  	C1427.4,46.8,1563.9,7.3,1664.4,0L1662.1,177.1z"></path>
  </svg>
</div>

<div class="hill" style="
    background: hsl(31, 90%, 68%);
    transform: scale(1, 1);
">
  <svg style="color: hsl(76, 51%, 46%);background: hsl(77, 100%, 89%);
  height: calc(173.2/1658.8 * 50vw);" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1658.8 173.2" preserveAspectRatio="none">
  <path d="M1662.1,177.1L1662.1,177.1L-2.8,174.3l1.1-66.6c0,0,389,62.5,534.7,59.2c195-4.5,399.6-12.8,655.5-68.3
  	C1427.4,46.8,1563.9,7.3,1664.4,0L1662.1,177.1z"></path>
  </svg>
</div>
{% endcomment %}

<main markdown="1" class="strawberry" style="background-image: linear-gradient(to bottom, hsl(32, 93%, 72%), var(--strawberry)); background-image: linear-gradient(to bottom, hsl(31, 90%, 68%), var(--strawberry)); background-image: linear-gradient(to bottom, var(--strawberry), hsl(31, 90%, 68%)); background-image: linear-gradient(to bottom, var(--lime), var(--banana)); background-image: linear-gradient(to bottom, var(--lime), hsl(58, 56%, 58%)); background-image: linear-gradient(to bottom, hsla(90, 51%, 40%, 1), hsla(90, 51%, 40%, 1) 33.3vh, hsla(77, 51%, 46%, 1) 100vh, var(--lime)); background-image: none; background-color: var(--lime); background-image: linear-gradient(to bottom, var(--lime), hsl(70, 61%, 59%)); border-top: 0.375em solid hsl(77, 100%, 89%);">

* * *

## Calendar

{% include calendar.markdown %}

</main>

