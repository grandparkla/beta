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
</style>

<div class="illustration">
{% include backgrounds/fiesta.svg %}
</div>
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
  
{% include calendar.markdown %}

