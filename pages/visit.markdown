---
title: Plan your visit
permalink: /visit/
announcement: "🚧 The fountain, splash pad and playground are [currently closed](/alerts/) for maintenance and park improvements. Thank you for your patience 🙏"
---

{% if site.use_illustrations %}
<style>
.girl {
  grid-column: -3/-1;
  grid-row: 1/6;
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
{% include backgrounds/flower-hat-girl-2.svg %}
</div>
{% endif %}

Plan your visit
=================

Grand Park is open every day from <time datetime="05:30">5:30 a.m.</time> to <time datetime="22:00">10 p.m.</time> 
_<span class="avoid-break"><small>The playground is open from <time datetime="08:00">8 a.m.</time> to <time datetime="20:00">8 p.m.</time></small></span>_

<nav markdown="1">
*   [Directions to the park](/directions/)
*   [Map & park areas](/areas/)
*   [Park rules](/rules/)
*   [FAQs](/faqs/)
*   [Alerts & closures](/alerts/)
</nav>

<main markdown="1" class="lime-light">

## Closed areas

These areas of the park are currently closed or are closing soon.

[Splash Pad](/splash-pad/)
: June 24 – 28

[Playground](/playground/)
: June 19 – July 3

<!-- <figure>
  <img src="/uploads/programs/sunday-sessions-9.jpg" alt="Sunday sessions" height="500" />
</figure> -->

</main>

<div></div>

<main markdown="1" class="lime">

{% if site.use_illustrations %}
  <style>
  .camera {
    grid-column: -3/-1;
    grid-row: 1/6;
  }
  .camera + h2 + p,
  .camera + h2 + p + p {
    grid-column-end: -3;
  }
  .camera svg {
    height: 20vmax;
    width: auto;
    color: inherit;
  }
  .camera svg,
  .camera svg path {
    fill: currentColor;
  }
  </style>

  <div class="camera">
  {% include backgrounds/park-signs.svg %}
  </div>
{% endif %}

Directions
----

{% include directions.markdown %}

</main>

<!--
*   [Map of the Park](#map)
*   [Plants & Gardens](#plants)
*   [What’s Nearby](#nearby)
*   [History](#history)
-->

<!--
Map of the Park <a id="map"></a>
---------------

<figure>
  <a href="/assets/temporary/map.jpg"><img src="/assets/temporary/map.jpg" height="500" alt="Map of Grand Park" /></a>
</figure>


Plants & Gardens <a id="plants"></a>
----------------

What’s Nearby
-------------

History
-------
-->





