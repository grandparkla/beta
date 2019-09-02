---
title: Calendar
permalink: /calendar/
---

<nav markdown="1">
*   [Things to Do](/events/)
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
main > nav:first-of-type,
main h1,
main h1 + p,
main h1 + nav {
  grid-column-end: -4;
}
main h1 + nav + main {
  margin-top: 0;
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


.illustration-palm-1 {
  margin-left: 0;
  width: 100%;
  margin-right: 0;
  left: 0;
  color: hsla(0, 0%, 0%, 0.5);
  color: hsla(338, 59%, 28%, 0.625);
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

{% comment %}
<div class="illustration">
{% include backgrounds/fiesta.svg %}
</div>
{% endcomment %}
{% endif %}

Calendar
========

<nav markdown="1">

<!--
*   [June](#june-2019)
-->

*   [August](#august-2019)
*   [September](#september-2019)
*   [October](#october-2019)
</nav>

<figure>
  <img src="/assets/temporary/misc/3_11_17_Downtown_Bookfest_cr_Javier_Guillen-139.jpg" alt="Photo 1" height="500" />
</figure>

<div></div>
  
{% include calendar.markdown %}

