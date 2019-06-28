---
title: About the park
permalink: /about/
---

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
main h1,
main h1 + p,
main h1 + p + nav {
  grid-column-end: -3;
}
</style>

<div class="girl">
{% include backgrounds/magic-forest.svg %}
</div>
{% endif %}

About the park
==============

Located in Downtown L.A.’s Bunker Hill neighborhood at the crossroads of Little Tokyo, Historic Core, Union Station, Chinatown and Olvera Street, Grand Park provides all Angelenos a central gathering place to relax, celebrate and connect.

<nav markdown="1">
*   [Rent the park](/rent/)
*   [Meet the staff](/staff/)
*   [Sign up for news](/news-sign-up/)
*   [Donate](/donate/)
*   [Contact us](/contact/)

<!--
*   [Filming & photography](/film-photography/)
*   [Job opportunities](/job-opportunities/)
-->
</nav>

<main markdown="1" class="sky">

* * *

## Rent the park

{% capture markdown_text %}{% include rent.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>

<main markdown="1" class="sky">

<div></div>

## Contact us

{% capture markdown_text %}{% include contact-us.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

<div></div>

</main>


<main markdown="1" class="lime-light">

## Donate

Grand Park is powered by The Music Center (a non-profit organization) with free events that bring Angelenos from all walks of life together. Help the beloved Grand Park thrive by donating here.

<p class="action" markdown="1">
[Donate](/donate/)
</p>

</main>





<!--
## A gathering place

A city’s urban heart is an expression of its people, its diversity, its interests, and its passions. With its majestic views extending from the Music Center to City Hall, Grand Park provides Angelenos of all walks of life a place where they can come together to celebrate, reflect, and shape the future, in one central gathering place.

Throughout Grand Park, open spaces are available not only for casual sitting and leisurely strolling, but also for civic gatherings.

<figure>
  <img src="/uploads/programs/sunday-sessions-5.jpg" alt="Sunday Sessions" height="500" />
</figure>

Grand Park has four distinct areas featuring amenities ranging from a restored historic Arthur J. Will Memorial Fountain with a new wade-able membrane pool, a small intimate performance lawn, a community terrace planted with drought tolerant specimen plants representing the diverse cultural make-up of Los Angeles itself, and a grand event lawn.

The new Grand Park allows for a strong visual and physical connection from Grand Avenue via a series of stairs, accessible ramps and sloped walks as well as a new elevator to invite more pedestrians into a vibrant garden environment, a place to come together in a welcoming and distinctly urban oasis.


Located in Downtown L.A.’s Bunker Hill neighborhood at the crossroads of Little Tokyo, Historic Core, Union Station, Chinatown and Olvera Street, Grand Park provides all Angelenos a central gathering place to relax, celebrate and connect.

Grand Park spans four city blocks in downtown Los Angeles between The Music Center and City Hall and features distinct amenities, including:

*   Fully restored Arthur J. Will Memorial Fountain with a quarter inch splash pad and jets open for play
*   Expansive lawns that include tables and chairs ideal for picnics, relaxing and gatherings
*   24 gardens featuring plants that grow in the world’s six floristic kingdoms
*   Off-leash dog run
*   On-site Metro and Purple Lines
*   Playground with 12-foot tube slide<br /><small>(recommended for ages 5-12)</small>

All are invited to Grand Park’s free year-round events including live music, exercise sessions, holiday gatherings, lunchtime activities, and much more!
-->