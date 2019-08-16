---
title: Plan your visit
permalink: /visit/
# announcement: "🚧 The fountain, splash pad and playground are [currently closed](/alerts/) for maintenance and park improvements. Thank you for your patience 🙏"
---

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 2/4;
}
.illustration svg {
  height: 15vmax;
  width: auto;
}
main h1,
main h1 + p,
main h1 + p + nav,
main h1 + figure + p,
main h1 + figure + p + nav {
  grid-column-end: -4;
}
</style>

<div class="illustration">
{% include backgrounds/fountain-edited-2.svg %}
</div>
{% endif %}

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/2;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15.5em;
    position: relative;
    z-index: -1;
  }
  body > main > figure:first-of-type::after {
    content: "";
    background-image: linear-gradient(to top, hsla(0, 0%, 0%, 0.25) 25%, hsla(0, 0%, 0%, 0.25) 25%, hsla(0, 0%, 0%, 0));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  body > main > figure:first-of-type img {
    width: 100%;
    height: calc(100vh + 1.5rem);
    min-height: 50vw;
    object-fit: cover;
  }
  .illustration {
    grid-row: 3/4;
  }
  /*
  body > main > nav:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 1;
    color: var(--snow);
    align-self: end;
  }
  */
  body > main > h1:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 1;
    color: var(--snow) !important;
    margin-bottom: 2.25em;
    align-self: end;
  }
  body > .sun {
    display: none;
  }
}
</style>

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    /*
    grid-column: 1/-1;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-bottom: 0;
    */
  }
  body > main > figure:first-of-type img {
    height: 50vw;
    object-fit: cover;
  }
</style>

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

<figure>
  <img src="/assets/temporary/misc/2017_11_4_17_GrandAveArts2017_Javier_Guillen-17.jpg" alt="Photo 1" height="500" />
</figure>

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





