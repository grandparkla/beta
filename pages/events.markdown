---
title: Things to do
permalink: /events/
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
{% include backgrounds/star-hat-girl.svg %}
</div>
{% endif %}

Things to do
=============================================

<!--
Relax, have a picnic, play in the splash pad, and enjoy our free events & activities.
-->
Lunchtime yoga, summer dance sessions, free admission holiday celebrations, <span class="avoid-break">and more!</span>

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

<!--
*   [Eat & Drink](/eat-drink/)
-->
</nav>

<!-- 
Lunchtime yoga, summer dance sessions, free admission holiday celebrations, and more!

<nav markdown="1">
*   [Lunch à la Park](/lunch/)
*   [Summer season](/)
</nav>
-->


{% if site.events_today %}

## <a id="today"></a> Today at <span class="avoid-break">Grand Park</span>

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>Today at <time datetime="11:00">11 a.m.</time></p>
      </div>
      <img src="/uploads/programs/food-trucks-4.jpg" height="300" alt="" />
    </a>
  </li>
  <!-- <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>Today at <time datetime="12:15">12:15 p.m.</time></p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li> -->
</ol>

{% elsif site.events_tomorrow %}
## <a id="tomorrow"></a> Tomorrow at <span class="avoid-break">Grand Park</span>

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>Tomorrow at <time datetime="11:00">11 a.m.</time></p>
      </div>
      <img src="/uploads/programs/food-trucks-4.jpg" height="300" alt="" />
    </a>
  </li>
  <!-- <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>Tomorrow at <time datetime="12:15">12:15 p.m.</time></p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li> -->
</ol>
{% endif %}

<!--
* * *

## Today

There is one event scheduled for today.

<ol class="event-list" style="grid-template-columns:  1fr;">
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Music & Dance Sessions</h4>
        <p>
          Sunday, June 23
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-2.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

-->

<div></div>

## <a id="daily"></a> Every day

These [areas of the park](/areas/) are open daily. Just drop by!

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
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
<ol class="event-list" style="grid-template-columns: 1fr">
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
      <img src="/uploads/programs/food-trucks-4.jpg" height="300" alt="" />
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

* * *

<main markdown="1">

* * *

## Calendar

{% include calendar.markdown %}

</main>

