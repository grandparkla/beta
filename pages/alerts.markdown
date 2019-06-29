---
title: Alerts & closures
permalink: /alerts/
---

<nav markdown="1">
* [Plan your visit](/visit/)
</nav>

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
main nav:first-child {
  grid-column-end: -3;
}
main h1 + h2 + p,
main h1 + h2 + p + h2 + p,
main nav:first-child {
  grid-column-end: -4;
}
</style>

<div class="illustration">
{% include backgrounds/fountain.svg %}
</div>
{% endif %}

# Alerts & closures

## June 28, 2019

The event lawn and restrooms near Spring Street will be closing at 1 p.m. on June 29 for the [Lane 8 event](/events/2019/06/29/lane-8/). They will reopen on June 30. The dog run will remain open 🐶



## June 19, 2019

Heads Up 🚧 Grand Park is prep preppin’ for summer! The <del>fountain, splash pad and</del> playground will be closed for maintenance and park improvements. Including a new shade structure to the playground! Apologies for the inconvenience. Thank you for your patience 🙏



<main markdown="1" class="lime-sky">

{% capture markdown_text %}{% include closed-areas.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

</main>

{% comment %}
## June 19

Heads Up 🚧 Grand Park is prep preppin’ for summer! The fountain, splash pad and playground will be closed for maintenance and park improvements. Including a new shade structure to the playground!

Playground closures start today WED JUN 19 through WED JUL 3. The fountain and splash pad will be closed from MON JUN 24 through FRI JUN 28. Apologies for the inconvenience. Thank you for your patience 🙏

## Closed areas

These areas of the park are currently closed or are closing soon.

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/playground/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Playground</h4>
        <p>
          Closed from June 19 until July 3
        </p>
      </div>
      <img src="/uploads/areas/playground-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/splash-pad/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Splash Pad</h4>
        <p>
          Closed from June 24 until June 28
        </p>
      </div>
      <img src="/uploads/areas/splash-pad-3.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
{% endcomment %}

