---
title: Plan your visit
permalink: /visit/
# announcement: "🚧 The fountain, splash pad and playground are [currently closed](/alerts/) for maintenance and park improvements. Thank you for your patience 🙏"
---

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/6;
}
.illustration svg {
  height: 20vmax;
  width: auto;
}
main h1,
main h1 + p,
main h1 + p + nav {
  grid-column-end: -4;
}
</style>

<div class="illustration">
{% include backgrounds/fountain.svg %}
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

<!-- <section class="special-notice" role="status">
  <h2>
    
    Alerts &amp; Closures
  </h2>
  <p>🚧 The fountain, splash pad and playground are <a href="/alerts/">currently closed</a> for maintenance and park improvements. Thank you for your patience 🙏</p>

</section> -->

<main markdown="1">

* * *

## Alerts & closures

## June 28, 2019

The event lawn and restrooms near Spring Street will be closing at 1 p.m. on June 29 for the [Lane 8 event](/events/2019/06/29/lane-8/). They will reopen on June 30. The dog run will remain open 🐶

## June 19, 2019

Heads Up 🚧 Grand Park is prep preppin’ for summer! The <del>fountain, splash pad and</del> playground will be closed for maintenance and park improvements. Including a new shade structure to the playground! Apologies for the inconvenience. Thank you for your patience 🙏

{% capture markdown_text %}{% include closed-areas.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>

* * *

Directions
----

{% include directions.markdown %}


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





