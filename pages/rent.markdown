---
title: Rent the park for an event
permalink: /rent/
---

<nav markdown="1">
* [About the park](/about/)
</nav>

{% if site.use_illustrations %}
<style>
.girl {
  grid-column: -3/-1;
  grid-row: 1/4;
}
.girl svg {
  height: 20vmax;
  width: auto;
}
main nav:first-child,
main h1,
main h1 + nav {
  grid-column-end: -3;
}
</style>

<div class="girl">
{% include backgrounds/fountain.svg %}
</div>
{% endif %}

Rent the park
==================

<nav markdown="1">
* [Host an event](#event)
* [Filming & photography](#filming-photography)
* [Questions](#questions)
</nav>

<main markdown="1" class="sky-light">

{% capture markdown_text %}{% include rent.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>
