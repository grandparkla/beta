---
title: Calendar
permalink: /calendar/
---

<nav markdown="1">
*   [Things to Do](/events/)
</nav>

{% if site.use_illustrations %}
<style>
.girl {
  grid-column: -3/-1;
  grid-row: 2/6;
}
.girl svg {
  height: 20vmax;
  width: auto;
}
main h1 {
  grid-column: 2/-3;
}
main h1 + p {
  grid-column: 2/-3;
}
main h1 + nav {
  grid-column: 3/-3;
}
</style>

<div class="girl">
{% include backgrounds/fiesta.svg %}
</div>
{% endif %}

Calendar
========

<nav markdown="1">
*   [June](#june-2019)
*   [July](#july-2019)
*   [August](#august-2019)
*   [September](#september-2019)
</nav>

<div></div>
  
{% include calendar.markdown %}

