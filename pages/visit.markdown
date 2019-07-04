---
title: Plan your visit
permalink: /visit/
# announcement: "🚧 The fountain, splash pad and playground are [currently closed](/alerts/) for maintenance and park improvements. Thank you for your patience 🙏"
---

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
main h1,
main h1 + p,
main h1 + p + nav {
  grid-column-end: -4;
}
</style>

{% comment %}
<div class="illustration">
{% include backgrounds/fountain.svg %}
</div>
{% endcomment %}
{% endif %}

Plan your visit
=================

<div></div>

<figure>
  <img src="/assets/temporary/misc/2018_7_17_18_LunchalaPark_Javier_Guillen.jpg" alt="Photo 1" height="500" />
</figure>

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

{% comment %}
<main markdown="1">

* * *

## Alerts & closures

{% capture markdown_text %}{% include closed-areas.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>
{% endcomment %}

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





