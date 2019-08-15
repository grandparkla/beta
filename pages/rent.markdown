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
</style>

<div class="illustration">
{% include backgrounds/tent.svg %}
</div>
{% endif %}

<style>
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

Rent the park
==================

<nav markdown="1">
* [Host an event](#event)
* [Filming & photography](#filming-photography)
* [Questions](#questions)
</nav>

<figure>
  <img src="/assets/temporary/misc/NYELA2019-0210.JPG" alt="Photo 1" height="500" />
</figure>

<main markdown="1" class="sky-light">

{% capture markdown_text %}{% include rent.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>
