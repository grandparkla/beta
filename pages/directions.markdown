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
@media (min-width: 60em) {
  .illustration-flowers-1 {
    transform: translateY(calc(-50% + 28em))
  }
  .illustration-flowers-2 {
    transform: translateY(calc(-25% + 28em)) scaleX(-1);
  }
}
</style>

Directions to <span class="avoid-break">the park</span>
======================

{% include directions.markdown %}
