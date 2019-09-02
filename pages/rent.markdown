---
title: Rent the park
permalink: /rent/
---

<nav markdown="1">
* [About the park](/about/)
</nav>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 3/4;
}
.illustration svg {
  height: 20vmax;
  width: auto;
}
main nav:first-child,
main h1,
main h1 + nav {
  grid-column-end: -3;
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
    margin-top: -3em;
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

<div class="illustration">
{% include backgrounds/tent.svg %}
</div>
{% endif %}

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: 0;
    margin-bottom: 0;
  }
  body > main > figure:first-of-type img {
    height: 50vw;
    object-fit: cover;
  }
</style>

<style media="false">
@media (min-width: 60em) {
  body > main {
    grid-template-rows: auto 7vw 13.5em auto;
  }
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/4;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15.5em;
    margin-bottom: 0;
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
  body > main > nav:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 2;
    color: var(--snow);
    align-self: end;
  }
  body > main > h1:first-of-type {
    grid-row: 2/3;
    position: relative;
    z-index: 1;
    color: var(--snow) !important;
    align-self: start;
  }
  body > main > h1:first-of-type + nav {
    grid-row: 3/4;
    position: relative;
    z-index: 2;
    color: var(--snow) !important;
    align-self: start;
  }
  body > .sun {
    display: none;
  }
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
  margin-left: 0;
  width: 100%;
  margin-right: 0;
  left: 0;
  color: hsla(0, 0%, 0%, 0.5);
  color: hsla(244, 59%, 28%, 0.625);
}
@media (min-width: 60em) {
  .illustration-palm-1 {
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
</style>

Rent the park
==================

<nav markdown="1">
* [Host an event](#event)
* [Filming & photography](#filming-photography)
* [Questions](#questions)
</nav>

<figure style="border-radius: 0; height: auto;">
  <a href="/uploads/ulta-at-grand-park-ad.jpg"><img src="/uploads/ulta-at-grand-park.jpg" alt="ulta at grand park " height="500" style="object-position: top; border-radius: 0; height: auto;" /></a>
  <figcaption style="padding-top: 0.375em; font-style: normal; font-family: 'Noto Sans'; color: var(--midnight)"><a href="/uploads/ulta-at-grand-park-ad.jpg">ULTA photo shoot</a> at Grand Park</figcaption>
</figure>

<main markdown="1" class="sky-light">

{% capture markdown_text %}{% include rent.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>
