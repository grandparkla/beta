---
title: About the park
permalink: /about/
---

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 2/4;
}
.illustration svg {
  height: 17vmax;
  width: auto;
}
main h1,
main h1 + p,
main h1 + p + nav {
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
    grid-row: 2/4;
    justify-self: end;
    align-self: start;
    margin-bottom: 0;
    margin-top: 0;
  }
  body > main > figure img {
    width: 25vw;
    height: 25vw;
    max-width: unset;
    max-height: unset;
    max-width: unset;
    max-height: unset;
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
    grid-row: 1/4;
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
    grid-row: 2/3;
    grid-column: 5/-2;
    font-size: inherit;
    position: relative;
    left: 2vw;
    padding-top: 0.125em;
  }
  body > main > nav:not(:first-child) {
    grid-row: 2/3;
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
  margin-left: 0;
  width: 100%;
  margin-right: 0;
  left: 0;
  color: hsla(0, 0%, 0%, 0.5);
  transform: translateY(calc(-100% + 6em)) scaleX(-1);
}
@media (min-width: 60em) {
  .illustration-palm-1 {
    transform: translateY(calc(-50% + 18em)) scaleX(-1);
  }
}
.illustration-palm-1 svg {
  width: 100%;
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
{% include backgrounds/magic-forest-edited-2.svg %}
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
  /*
  margin-left: 0;
  width: 100%;
  margin-right: 0;
  left: 0;
  */
  color: hsla(0, 0%, 0%, 0.5);
  color: hsla(244, 59%, 28%, 0.625);
  color: hsla(202, 59%, 28%, 0.625);
  color: hsla(180, 100%, 30%, 0.625);
  color: hsla(180, 59%, 28%, 1);
  color: hsla(244, 59%, 28%, 0.625);
  /*
  opacity: 1;
  -webkit-mask-image: unset;
  mask-image: unset;
  */
}
.illustration-palm-1 {
  transform: translateY(calc(-50% + 24em));
}
/*
.illustration-palm-1 svg {
  width: 100%;
  max-width: unset;
  margin-left: unset;
}
*/
.illustration-palm-2 {
color: hsla(180, 59%, 28%, 1);
color: hsla(244, 59%, 28%, 0.95);
color: var(--snow);
color: hsla(244, 59%, 28%, 0.625);
}
</style>

About the park
==============

Located in Downtown L.A.’s Bunker Hill neighborhood at the crossroads of Little Tokyo, Historic Core, Union Station, Chinatown and Olvera Street, Grand Park provides all Angelenos a central gathering place to relax, celebrate and connect.


<nav markdown="1">
*   [Rent the park](/rent/)
*   [For members of the media](/for-media/)
*   [Meet the staff](/staff/)
*   [Sign up for news](/news-sign-up/)
*   [Donate](/donate/)
*   [Contact us](/contact/)

<!--
*   [Filming & photography](/film-photography/)
*   [Job opportunities](/job-opportunities/)
-->
</nav>

<style>
.figure-group {
  margin-top: 0 !important;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.375em;
  padding: 1.5em 0.375em;
}
.figure-group > figure {
  grid-column: auto;
  grid-row: auto;
  margin: 0;
  background: transparent;
  padding-bottom: 100%;
  position: relative;
}
.figure-group > figure > img {
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media (min-width: 60em) {
  .figure-group {
    grid-gap: 1.5em;
    padding: 4.5em 6em;
  }
}
</style>

<main class="lime-light figure-group" markdown="1">

<figure>
  <img src="/assets/temporary/misc/NYELA2019-0682.JPG" alt="Photo 1" height="500" />
</figure>

<figure>
  <img src="/assets/temporary/optimized/3_11_17_Downtown_Bookfest_cr_Javier_Guillen.jpg" alt="Photo 1" height="500" />
</figure>

<figure>
  <img src="/assets/temporary/welcome/384-wide/42.jpg" srcset="/assets/temporary/welcome/384-wide/42.jpg 384w, /assets/temporary/welcome/512-wide/42.jpg 512w, /assets/temporary/welcome/768-wide/42.jpg 768w, /assets/temporary/welcome/1024-wide/42.jpg 1024w, /assets/temporary/welcome/1536-wide/42.jpg 1536w, /assets/temporary/welcome/2048-wide/42.jpg 2048w" sizes="100vw" alt="Photo 1" height="500" />
</figure>

</main>

<main markdown="1" class="sky-light">

* * *

## Rent the park

{% capture markdown_text %}{% include rent.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

<figure style="border-radius: 0; height: auto; background: transparent; grid-column: 3/7;">
  <a href="/uploads/ulta-at-grand-park-ad.jpg"><img src="/uploads/ulta-at-grand-park.jpg" alt="ulta at grand park " height="500" style="object-position: top; border-radius: 0; height: auto;" /></a>
  <figcaption style="padding-top: 0.375em; font-style: normal; font-family: 'Noto Sans'; color: var(--midnight)"><a href="/uploads/ulta-at-grand-park-ad.jpg">ULTA photo shoot</a> at Grand Park</figcaption>
</figure>

</main>

<main markdown="1" class="sky">

<div></div>

{% comment %}
{% if site.use_illustrations %}
<style>
.business-girl {
  margin-top: 1.5em;
  grid-column: -3/-1;
  grid-row: 1/6;
}
.business-girl + h2 {
  grid-row: 1/2;
}
.business-girl + h2 + nav {
  grid-row: 1/2;
}
.business-girl + h2 + nav + h4 {
  grid-row: 2/3;
}
.business-girl + h2 + nav + h4 + p {
  grid-row: 3/4;
}
.business-girl + h2 + nav + h4 + p + h4 {
  grid-row: 4/5;
}
.business-girl + h2 + nav + h4 + p + h4 + p {
  grid-row: 5/6;
}
.business-girl + h2 + nav,
.business-girl + h2 + nav + h4,
.business-girl + h2 + nav + h4 + p,
.business-girl + h2 + nav + h4 + p + h4,
.business-girl + h2 + nav + h4 + p + h4 + p {
  grid-column-end: -3;
}
.business-girl svg {
  height: 20vmax;
  width: auto;
  color: inherit;
}
.business-girl svg,
.business-girl svg path {
  fill: currentColor;
}
</style>

<div class="business-girl">
{% include backgrounds/business-girl.svg %}
</div>
{% endif %}
{% endcomment %}

## Contact us

<nav markdown="1">
*   [For members of the media](/for-media/)
*   [For vendors](/for-vendors/)
*   [Sponsorship](/sponsorship/)
</nav>

{% capture markdown_text %}{% include contact-us.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

## Media Contact

For information about Grand Park, contact:

Lisa Ducore  
[lducore@musiccenter.org](mailto:lducore@musiccenter.org)  
213-972-3328

Get more information [for members of the media](/for-media/).

<figure>
  <img src="/assets/temporary/optimized/Select_JMC2505.jpg" alt="Photo 1" height="500" />
</figure>

<div></div>

</main>


<main markdown="1" class="lime-light">

## Donate

Grand Park is powered by The Music Center (a non-profit organization) with free events that bring Angelenos from all walks of life together. Help the beloved Grand Park thrive by donating here.

<p class="action" markdown="1">
[Donate](/donate/)
</p>


</main>






<!--
## A gathering place

A city’s urban heart is an expression of its people, its diversity, its interests, and its passions. With its majestic views extending from the Music Center to City Hall, Grand Park provides Angelenos of all walks of life a place where they can come together to celebrate, reflect, and shape the future, in one central gathering place.

Throughout Grand Park, open spaces are available not only for casual sitting and leisurely strolling, but also for civic gatherings.

<figure>
  <img src="/uploads/programs/sunday-sessions-5.jpg" alt="Sunday Sessions" height="500" />
</figure>

Grand Park has four distinct areas featuring amenities ranging from a restored historic Arthur J. Will Memorial Fountain with a new wade-able membrane pool, a small intimate performance lawn, a community terrace planted with drought tolerant specimen plants representing the diverse cultural make-up of Los Angeles itself, and a grand event lawn.

The new Grand Park allows for a strong visual and physical connection from Grand Avenue via a series of stairs, accessible ramps and sloped walks as well as a new elevator to invite more pedestrians into a vibrant garden environment, a place to come together in a welcoming and distinctly urban oasis.


Located in Downtown L.A.’s Bunker Hill neighborhood at the crossroads of Little Tokyo, Historic Core, Union Station, Chinatown and Olvera Street, Grand Park provides all Angelenos a central gathering place to relax, celebrate and connect.

Grand Park spans four city blocks in downtown Los Angeles between The Music Center and City Hall and features distinct amenities, including:

*   Fully restored Arthur J. Will Memorial Fountain with a quarter inch splash pad and jets open for play
*   Expansive lawns that include tables and chairs ideal for picnics, relaxing and gatherings
*   24 gardens featuring plants that grow in the world’s six floristic kingdoms
*   Off-leash dog run
*   On-site Metro and Purple Lines
*   Playground with 12-foot tube slide<br /><small>(recommended for ages 5-12)</small>

All are invited to Grand Park’s free year-round events including live music, exercise sessions, holiday gatherings, lunchtime activities, and much more!
-->