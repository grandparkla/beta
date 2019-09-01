---
title: Alerts & closures
permalink: /alerts/
---

<nav markdown="1">
* [Plan your visit](/visit/)
</nav>

{% if site.use_illustrations and false %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/4;
}
.illustration svg {
  height: 15vmax;
  width: auto;
}
main h1,
main nav:first-child {
  grid-column-end: -3;
}
main h1 + p,
main h1 + h2 + p,
main h1 + h2 + p + h2 + p,
main nav:first-child {
  grid-column-end: -4;
}
</style>


<div class="illustration">
{% include backgrounds/fountain-edited-2.svg %}
</div>
{% endif %}

<style>.illustration-palm-1 {
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

# Alerts & closures

<main class="lime-light" markdown="1">

<div></div>
<div></div>

{% capture markdown_text %}{% include closed-areas.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

<div></div>

</main>
