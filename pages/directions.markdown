---
title: Directions to the park
permalink: /directions/
---

<nav markdown="1">
* [Plan your visit](/visit/)
</nav>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 3/6;
}
.illustration svg {
  height: 20vmax;
  width: auto;
}
main h1 + p,
main h1 + p + p {
  grid-column-end: -4;
}
main > nav:first-child {
  grid-row-start: 1;
}
</style>

<div class="illustration">
{% include backgrounds/park-signs.svg %}
</div>
{% endif %}

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
</style>

<style>.illustration-palm-1 {
  margin-left: 0;
  width: 100%;
  margin-right: 0;
  left: 0;
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
  width: 100%;
  max-width: unset;
  margin-left: unset;
}
.illustration-palm-2 {
color: hsl(180, 100%, 30%);
display: none;
}
</style>


Directions to <span class="avoid-break">the park</span>
======================

<main class="lime-light" markdown="1">

<div></div>
<div></div>

{% include directions.markdown %}

</main>
