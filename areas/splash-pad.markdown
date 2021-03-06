---
title: Splash pad
permalink: /splash-pad/
# announcement: "The fountain and splash pad will be closed for maintenance and park improvements from Monday, June 24 through Friday, June 28. Thank you for your patience."
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
{% include backgrounds/fountain-edited-2.svg %}
</div>
{% endcomment %}
{% endif %}

# Splash pad

Open daily from 5:30 a.m. to 10 p.m.

<p style="grid-column-start: 2; max-width: 33em;" markdown="1">
The interactive splash pad is open to the public. Visitors of all ages are encouraged to enjoy water play in the splash pad, which features interactive jets.
</p>

<div></div>

## Where

Arthur J. Will Memorial Fountain, between Grand Avenue and Hill Street

<p class="action" markdown="1">
[Get directions on Google Maps](https://www.google.com/maps/place/Arthur+J.+Will+Memorial+Fountain/@34.0562479,-118.2469604,19.24z/data=!4m12!1m6!3m5!1s0x80c2c64e08ee24fd:0xebf5893d7caaf0de!2sGrand+Park!8m2!3d34.0554842!4d-118.2455487!3m4!1s0x80c2c64dfead7539:0xee68108180f076de!8m2!3d34.0565278!4d-118.2471706)
</p>

<figure>
  <img src="/assets/temporary/misc/Select_JMC1743.jpg" alt="Splash Pad" height="500" />
</figure>
