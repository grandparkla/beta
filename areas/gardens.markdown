---
title: Gardens
permalink: /gardens/
---

<nav markdown="1">
* [Areas of the park](/areas/)
</nav>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/6;
}
.illustration svg {
  height: 15vmax;
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

main figure:last-of-type {
  width: calc(100vw - 3em);
  height: calc(100vw - 3em);
  border-radius: 50%;
}
main figure:last-of-type img {
  display: block;
  width: calc(100vw - 3.75em);
  height: calc(100vw - 3.75em);
  object-fit: cover;
  border-radius: 50%;
  max-width: none;
}
@media (min-width: 60em) {
  main figure:last-of-type {
    width: auto;
    height: auto;
    grid-column: -3/-1;
    grid-row: 3/6;
    justify-self: end;
    align-self: start;
    margin-bottom: 0;
    margin-top: -1.5em;
  }
  main figure:last-of-type img {
    width: 25vw;
    height: 25vw;
  }
}
@media (min-width: 80em) {
  main figure:last-of-type {
    margin-right: 5vw;
    grid-row: 2/6;
  }
  main figure:last-of-type img {
    width: calc(2.5/8 * 100vw - 3em);
    height: calc(2.5/8 * 100vw - 3em);
  }
}
</style>

{% comment %}
<div class="illustration">
{% include backgrounds/picnic.svg %}
</div>
{% endcomment %}
{% endif %}

# Gardens

Open daily from 5:30 a.m. to 10 p.m.

<p style="grid-column-start: 2; max-width: 33em" markdown="1">
Grand Park has twenty-four gardens, featuring plants that grow in each of the world’s six [floristic kingdoms](https://en.wikipedia.org/wiki/Phytochorion). All are invited to have a picnic on the grass, read a book or take a stroll through the gardens any day of the year.
</p>

<figure>
  <img src="/uploads/areas/gardens-2.jpg" alt="Gardens" height="500" />
</figure>
