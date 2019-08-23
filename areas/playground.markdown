---
title: Playground
permalink: /playground/

# announcement: "The playground will be closed for maintenance and park improvements, (including a new shade structure) from Wednesday, June 19 through Wednesday, July 3. Thank you for your patience."

---

<nav markdown="1">
* [Areas of the park](/areas/)
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
main h1 + p + h2 + p,
main h1 + p + h2 + p + p {
  grid-column-end: -4;
}
main h1 + nav + main {
  margin-top: 0;
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
{% include backgrounds/fiesta.svg %}
</div>
{% endcomment %}
{% endif %}

# Playground

Open daily from 8 a.m. to 8 p.m.

## Where

Grand Park, between Broadway and Spring Street

<p class="action" markdown="1">
[Get directions on Google Maps](https://www.google.com/maps/place/Grand+Park+Playground/@34.0542376,-118.2442947,19.47z/data=!4m5!3m4!1s0x80c2c64efa935b59:0x77b7e277c784395f!8m2!3d34.0542522!4d-118.2443347)
</p>

<figure>
  <img src="/uploads/areas/playground-2.jpg" alt="Playground" height="500" />
</figure>

<main class="lime-light" markdown="1">

## About

Grand Park’s playground features a 12-foot tube slide!

Climber & slides
: recommended for ages 5-12

Play area
: recommended for ages 2-12

</main>
