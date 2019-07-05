---
title: Things to do
permalink: /events/
---

{% comment %}
{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 1/4;
}
.illustration svg {
  height: 17vmax;
  width: 12vmax;
  margin-top: 1em;
  margin-left: 1em;
}
main h1,
main h1 + p,
main h1 + p + nav {
  grid-column-end: -3;
}
</style>

<div class="illustration">
{% include backgrounds/picnic.svg %}
</div>
{% endif %}
{% endcomment %}

<style>
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/2;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15em;
    position: relative;
    z-index: -1;
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

Things to do
=============================================

<figure>
  <img src="/assets/temporary/misc/3_11_17_Downtown_Bookfest_cr_Javier_Guillen-139.jpg" alt="Photo 1" height="500" />
</figure>

{% comment %}
<figure>
  <img src="/assets/temporary/welcome/384-wide/32.jpg" srcset="/assets/temporary/welcome/384-wide/32.jpg 384w, /assets/temporary/welcome/512-wide/32.jpg 512w, /assets/temporary/welcome/768-wide/32.jpg 768w, /assets/temporary/welcome/1024-wide/32.jpg 1024w, /assets/temporary/welcome/1536-wide/32.jpg 1536w, /assets/temporary/welcome/2048-wide/32.jpg 2048w" sizes="100vw" alt="Photo 1" height="500" />
</figure>
{% endcomment %}

<!--
Relax, have a picnic, play in the splash pad, and enjoy our free events & activities.
-->
Lunchtime yoga, summer dance sessions, free admission holiday celebrations, <span class="avoid-break">and more!</span>
<!-- All are invited to have a picnic on the lawn, stroll through the gardens, play in the splash pad, and attend Grand Park’s free year-round <span class="avoid-break">events & activities!</span> -->

<nav markdown="1">
{% if site.events_today -%}
*   [Today](/events/#today)
{% elsif site.events_tomorrow -%}
*   [Tomorrow](/events/#tomorrow)
{% endif -%}
*   [Every day](/events/#daily)
*   [Lunchtime](/events/#weekly)
*   [Calendar](/calendar/)
*   [Programs](/programs/)
</nav>

<main markdown="1" class="lime-light">

{% capture today_tomorrow %}{% include today-tomorrow.markdown %}{% endcapture %}
{{ today_tomorrow | markdownify }}

## <a id="daily"></a> Every day

These [areas of the park](/areas/) are open daily. Just drop by!

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/splash-pad/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Splash Pad</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/assets/temporary/misc/Select_JMC1743.jpg" alt="Splash Pad" height="500" />
    </a>
  </li>
  <li>
    <a href="/gardens/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Gardens</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/gardens-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/dog-run/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Dog Run</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/dog-run.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/performance-lawn/">
      <div>
        <h3>Areas of the Park</h3>
        <h4>Performance Lawn</h4>
        <p>
          Open daily
        </p>
      </div>
      <img src="/uploads/areas/performance-lawn-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


## Lunch à la Park <a id="weekly"></a>

### Every week at lunchtime

Come into the sunshine and enjoy everyone’s favorite time of the workday – the mighty lunch.

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <!--
        <p>Today from <time datetime="11:00">11 a.m.</time> to <time datetime="14:00">2 p.m.</time></p>
        -->
        <p>
          Tuesday, Wednesday &amp; Thursday
          <!--<br />June 11–13<br /><time datetime="11:00">11 a.m.</time> to <time datetime="14:00">2 p.m.</time>-->
        </p>
      </div>
      <img src="/assets/temporary/misc/2018_LunchalaPark_Javier_Guillen.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <!--
        <p>Today from <time datetime="12:15">12:15 p.m.</time> to <time datetime="13:00">1:00 p.m.</time></p>
        -->
        <p>
          Wednesday &amp; Friday
          <!--
          <br />June 12 &amp; 14<br /><time datetime="12:15">12:15 p.m.</time> to <time datetime="13:00">1:00 p.m.</time>
          -->
        </p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

</main>

<main markdown="1" class="lime-light">

* * *

## Calendar

{% include calendar.markdown %}

</main>

