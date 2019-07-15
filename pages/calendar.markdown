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
  grid-row: 1/4;
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

*   [July](#july-2019)
*   [August](#august-2019)
*   [September](#september-2019)
</nav>

<main markdown="1" class="lime-light">
  
{% include calendar.markdown %}

</main>
