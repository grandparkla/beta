---
title: Plan your visit
permalink: /visit/
# announcement: "🚧 The fountain, splash pad and playground are [currently closed](/alerts/) for maintenance and park improvements. Thank you for your patience 🙏"
---

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 2/4;
}
.illustration svg {
  height: 15vmax;
  width: auto;
}
main h1,
main h1 + p,
main h1 + p + nav,
main h1 + figure + p,
main h1 + figure + p + nav {
  grid-column-end: -4;
}

body > main > figure {
  width: calc(100vw - 3em);
  height: calc(100vw - 3em);
  max-width: calc(20em - 3em);
  max-height: calc(20em - 3em);
  border-radius: 50%;
}
body > main > figure img {
  display: block;
  width: calc(100vw - 3.75em);
  height: calc(100vw - 3.75em);
  max-width: calc(20em - 3.75em);
  max-height: calc(20em - 3.75em);
  object-fit: cover;
  border-radius: 50%;
}
@media (min-width: 60em) {
  body > main > figure {
    width: auto;
    height: auto;
    max-width: unset;
    max-height: unset;
    grid-column: -3/-1;
    grid-row: 2/5;
    justify-self: end;
    align-self: start;
    margin-bottom: 0;
    margin-top: 0;
  }
  body > main > figure + figure {
    grid-column: -4/-2;
    grid-row: 3/6;
    left: -10vw;
  }
  body > main > figure + figure + figure {
    grid-column: -3/-1;
    grid-row: 4/7;
    left: unset;
  }
  body > main > figure img {
    width: 25vw;
    height: 25vw;
    max-width: unset;
    max-height: unset;
  }
  /*
  body > main > main:first-of-type {
    margin-top: -10vw;
  }
  */
    body > main > figure {
      grid-row: 1/5;
    }
}
@media (min-width: 80em) {
  body > main > figure {
    margin-right: 5vw;
    grid-row: 1/5;
  }
  body > main > figure img {
    width: calc(2.5/8 * 100vw - 3em);
    height: calc(2.5/8 * 100vw - 3em);
  }
}
@media (min-width: 60em) {
  body > main > figure:nth-of-type(2) {
    left: -10vw;
    top: 5vw;
  }
  body > main > figure:nth-of-type(2) img {
    width: calc(1.5/8 * 100vw - 3em);
    height: calc(1.5/8 * 100vw - 3em);
  }
  body > main > figure:nth-of-type(3) img {
    width: calc(2/8 * 100vw - 3em);
    height: calc(2/8 * 100vw - 3em);
  }
}

@media (min-width: 60em) {
  body > main > h1 {
    margin-top: 0.75em;
  }
  body > main > h1 {
    grid-column: 2/-1;
    z-index: 1;
    margin-top: 0em;
    margin-bottom: 0.25em;
    /*
    text-shadow: 0 0 1em var(--sky);
    */
  }
  body > main > h1 + p {
    grid-row: 3/4;
    grid-column: 5/-2;
    font-size: inherit;
    position: relative;
    left: 2vw;
    padding-top: 0.125em;
  }
  body > main > nav:not(:first-child) {
    grid-row: 3/4;
    grid-column: 2/5;
    justify-self: end;
    text-align: left;
    padding: 0.5em 1.9em 4.5em 0;
    position: relative;
    left: 2vw;
  }
  body > main > nav:not(:first-child) li a {
    display: block;
  }
  body > main > nav:not(:first-child) li a::before {
    left: unset;
    right: -1.5em;
  }
  body > main > figure:nth-of-type(1) {
    grid-row: 2/3;
    grid-column: 2/-2;
    align-self: start;
    justify-self: start;
    left: unset;
    top: unset;
    margin: unset;
  }
  body > main > figure:nth-of-type(2) {
    grid-row: 2/3;
    grid-column: 2/-2;
    align-self: start;
    justify-self: center;
    left: unset;
    top: unset;
    margin: unset;
  }
  body > main > figure:nth-of-type(3) {
    grid-row: 2/3;
    grid-column: 2/-2;
    align-self: start;
    justify-self: end;
    left: unset;
    top: unset;
    margin: unset;
  }
  body > main > main:first-of-type {
    margin-top: 4.5em;
  }
  body > main > figure:nth-of-type(1) img,
  body > main > figure:nth-of-type(2) img,
  body > main > figure:nth-of-type(3) img {
    width: calc(2/8 * 100vw - 3em);
    height: calc(2/8 * 100vw - 3em);
  }
}
/*
body > main > figure:nth-of-type(1),
body > main > figure:nth-of-type(2),
body > main > figure:nth-of-type(3),
body > main > figure:nth-of-type(1) img,
body > main > figure:nth-of-type(2) img,
body > main > figure:nth-of-type(3) img {
  border-radius: 0;
}
*/

/*
.illustration-palm-1 {
  margin-left: -1.5em;
  width: 100vw;
  margin-right: -1.5em;
  left: unset;
  color: hsla(0, 0%, 0%, 0.5);
  transform: translateY(calc(-100% + 6em)) scaleX(-1);
}
@media (min-width: 60em) {
  .illustration-palm-1 {
    transform: translateY(calc(-50% + 18em)) scaleX(-1);
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
*/
</style>

{% comment %}
<div class="illustration">
{% include backgrounds/fountain-edited-2.svg %}
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
  .illustration {
    grid-row: 3/4;
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

<style>
@media (min-width: 60em) and false {
  .illustration-flowers-1 {
    transform: translateY(calc(-50% + 38em));
    left: 0;
  }
  .illustration-flowers-2 {
    transform: translateY(calc(-25% + 36em)) scaleX(-1);
  }
}

.illustration-palm-1 {
  margin-left: -1.5em;
  width: 100vw;
  margin-right: -1.5em;
  left: unset;
  color: hsla(0, 0%, 0%, 0.5);
  color: hsla(244, 59%, 28%, 0.625);
  color: hsla(202, 59%, 28%, 0.625);
  color: hsla(180, 100%, 30%, 0.625);
  color: hsla(180, 59%, 28%, 0.625);
  /*
  opacity: 1;
  -webkit-mask-image: unset;
  mask-image: unset;
  */
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
color: hsl(180, 100%, 30%);
display: none;
}
</style>

Plan your visit
=================



<figure>
  <img src="/uploads/areas/gardens-2.jpg" alt="Photo" height="500" />
</figure>
<figure>
  <img src="/uploads/programs/sunday-sessions-5.jpg" alt="" height="500" />
</figure>
<figure>
  <img src="/assets/temporary/park/splash.jpg" alt="Photo 1" height="500" />
</figure>
<!--
-->

<!-- <section class="special-notice" role="status">
  <h2>
    
    Alerts &amp; Closures
  </h2>
  <p>🚧 The fountain, splash pad and playground are <a href="/alerts/">currently closed</a> for maintenance and park improvements. Thank you for your patience 🙏</p>

</section> -->

{% comment %}
<main markdown="1">

* * *

## Alerts & closures

{% capture markdown_text %}{% include closed-areas.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>
{% endcomment %}


<main class="lime-light" markdown="1">

<div></div>
<div></div>

Grand Park is open every day from <time datetime="05:30">5:30 a.m.</time> to <time datetime="22:00">10 p.m.</time> 
_<span class="avoid-break"><small>The playground is open from <time datetime="08:00">8 a.m.</time> to <time datetime="20:00">8 p.m.</time></small></span>_

<nav markdown="1">
*   [Directions to the park](/directions/)
*   [Areas of the park](/areas/)
*   [Park rules](/rules/)
*   [FAQs](/faqs/)
*   [Alerts & closures](/alerts/)
</nav>

</main>


<main class="lime-light" markdown="1">

* * *

Directions
----

{% include directions.markdown %}

</main>

<!--
*   [Map of the Park](#map)
*   [Plants & Gardens](#plants)
*   [What’s Nearby](#nearby)
*   [History](#history)
-->

<!--
Map of the Park <a id="map"></a>
---------------

<figure>
  <a href="/assets/temporary/map.jpg"><img src="/assets/temporary/map.jpg" height="500" alt="Map of Grand Park" /></a>
</figure>


Plants & Gardens <a id="plants"></a>
----------------

What’s Nearby
-------------

History
-------
-->





