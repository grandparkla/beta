---
title: Rent the park for an event
permalink: /rent/
---

<nav markdown="1">
* [About the park](/about/)
</nav>

{% if site.use_illustrations and false %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/4;
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
{% include backgrounds/magic-forest.svg %}
</div>
{% endif %}

<style>
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/3;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15em;
    position: relative;
    z-index: -1;
  }
  body > main > nav:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 1;
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
