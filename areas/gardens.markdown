---
title: Gardens
permalink: /gardens/
---

<nav markdown="1">
* [Areas of the park](/areas/)
</nav>

{% if site.use_illustrations %}
<style>
.girl {
  grid-column: -3/-1;
  grid-row: 1/5;
}
.girl svg {
  height: 20vmax;
  width: auto;
}
main h1 {
  grid-column-end: -3;
}
main h1 + p,
main h1 + p + p {
  grid-column-end: -3;
}
main > nav:first-child {
  grid-row-start: 1;
}
main > h1 + nav {
    grid-column: 3/-3;
}
</style>

<div class="girl">
{% include backgrounds/fountain.svg %}
</div>
{% endif %}

# Gardens

Open daily from 5:30 a.m. to 10 p.m.

<p style="grid-column-start: 2" markdown="1">
Grand Park has twenty-four gardens, featuring plants that grow in each of the world’s six [floristic kingdoms](https://en.wikipedia.org/wiki/Phytochorion). You are welcome to have a picnic on the grass, read a book or take a stroll through the gardens any day of the year.
</p>

<figure>
  <img src="/uploads/areas/gardens-2.jpg" alt="Gardens" height="500" />
</figure>
