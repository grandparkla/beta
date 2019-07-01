---
title: Alerts & closures
permalink: /alerts/
---

<nav markdown="1">
* [Plan your visit](/visit/)
</nav>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/4;
}
.illustration svg {
  height: 20vmax;
  width: auto;
}
main h1,
main nav:first-child {
  grid-column-end: -3;
}
main h1 + h2 + p,
main h1 + h2 + p + h2 + p,
main nav:first-child {
  grid-column-end: -4;
}
</style>

<div class="illustration">
{% include backgrounds/fountain.svg %}
</div>
{% endif %}

# Alerts & closures

<main markdown="1" class="lime-sky">

{% capture markdown_text %}{% include closed-areas.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>

