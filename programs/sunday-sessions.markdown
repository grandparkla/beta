---
title: Sunday Sessions
permalink: /sunday-sessions/
---

<nav markdown="1">
* [Things to do](/events/)
* [Programs](/programs/)
</nav>


<!-- Jim’s TypeKit account -->
<link rel="stylesheet" href="https://use.typekit.net/pfy0mzp.css" />


<style>

@font-face{
  font-family:"Chicago FLF";
  src: url("/assets/fonts/chicago-flf/ChicagoFLF.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

main {
  font-family: cooper-black-std, "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.375;
}
main {
  font-size: 1.25em;
}

main h2 {
  font-family: "Chicago FLF", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  border-width: 0.125em 0;
  border-style: solid;
  padding: 0.125em 0;
  align-self: start;
  justify-self: end;
  display: inline-block;
}

main hr {
  border-width: 0;
}
main hr + h2 {
  margin-top: 0;
  display: block;
  justify-self: stretch;
  background-color: var(--text-color);
  color: var(--strawberry);
  grid-column: 1/-1;
  margin-left: -0.75em;
  margin-right: -0.75em;
  text-align: center;
  max-width: none;
  border-width: 0;
  padding: 0.25em 1.5em;
  font-size: 2em;
}
main hr + h2 + dl {
  grid-column: 1/-1;
  max-width: none;
}
main hr + h2 + dl + p {
  max-width: none;
  grid-column: 1/-1;
  align-self: stretch;
  text-align: center;
}

:root {
  --strawberry: hsl(331, 81%, 61%);
  --text-color: hsl(300, 2%, 22%);
  --headline-color: var(--text-color);
  --link-color: var(--text-color);
}
body {
  background: var(--strawberry);
}
body a {
  color: inherit !important;
}
body h1 {
  color: inherit !important;
}
body strong {
  color: inherit !important;
  font-weight: bold;
}

dl {
  text-align: center;
  border-width: 0 2vmax;
  border-style: solid;
  border-color: var(--text-color);
  margin-left: -1.2em !important;
  margin-right: -1.2em !important;
  max-width: none;
  box-sizing: border-box;
  width: 100vw;
  margin-top: -1.5em !important;
  padding-top: 3em;
  margin-bottom: 0 !imporant;
  position: relative;
}
dl::before,
dl::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 2em;
  background-image: url(/uploads/programs/sunday-sessions/lines.svg);
  background-repeat: repeat-y;
  top: 0;
}
dl::before {
  left: 0;
}
dl::after {
  right: 0;
  transform: rotate(180deg);
}
dt {
  display: inline-block;
  padding: 0em 0.375em 0.1em;
  background: var(--text-color);
  color: var(--strawberry);
  font-style: normal;
  font-size: 1.25em;
}
dt,
dd {
  text-transform: uppercase;
}
dd strong {
  font-size: 1.5em;
  display: block;
}
dd img {
  height: 5em;
  width: auto;
}

dl {
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 6em !important;
  justify-self: start;
  font-size: 1.25em;
  padding-left: 1.5em;
  padding-right: 1.5em;
}

dt,
dd {
  margin: 0 !important;
}
dt {
  justify-self: center;
}

dt:nth-of-type(1) + dd + dd {
  grid-row: 1;
}
dt:nth-of-type(2) + dd + dd {
  grid-row: 4;
}
dt:nth-of-type(3) + dd + dd {
  grid-row: 7;
}
dt:nth-of-type(4) + dd + dd {
  grid-row: 10;
}
dd + dt + dd + dd {
  margin-top: 3em !important;
}
dt {
  margin-top: 0.375em !important;
}
dt + dd {
  margin-top: 0.375em !important;
}

@media (min-width: 60em) {
  dl {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-bottom: 7.5em !important;
  }
  dt:nth-of-type(n) + dd + dd {
    grid-row: 1/2;
  }
  dt {
    grid-row: 2/3;
  }
  dt + dd {
    grid-row: 3/4;
  }
  dd + dt + dd + dd {
    margin-top: 0 !important;
  }
  dt:nth-of-type(2),
  dt:nth-of-type(2) + dd,
  dt:nth-of-type(2) + dd + dd,
  dt:nth-of-type(4),
  dt:nth-of-type(4) + dd,
  dt:nth-of-type(4) + dd + dd {
    transform: translateY(7.5rem);
  }
}

.action a {
  background: var(--text-color) !important;
  color: var(--strawberry) !important;
}
main figure {
  border-width: 4vmax 2vmax;
  border-style: solid;
  border-color: var(--text-color);
  grid-column: 1/-1;
  margin-left: -1.5em;
  margin-right: -1.5em;
  max-width: none;
}
main hr + h2 + figure {
  margin-top: -1.5em;
  border-top-width: 0;
}
main figure img {
  display: block;
  filter: grayscale(100%) sepia(50%) hue-rotate(280deg);
}
.social-links {
  filter: grayscale(100%) sepia(50%) hue-rotate(280deg);
}
.smiley img {
  position: absolute;
  width: auto;
  height: 1.5em;
}

h1 .smiley img:nth-child(1) {
  margin-top: -4vw;
  right: 4.5vw;
  font-size: 9vw;
}
h1 .smiley img:nth-child(2) {
  margin-top: 50vw;
  left: 4.5vw;
  font-size: 7vw;
  transform: rotate(45deg);
}
h1 .smiley img:nth-child(3) {
  margin-top: 60vw;
  right: 6vw;
  font-size: 5vw;
  transform: rotate(10deg);
}

main .logos {
  margin-top: -1.5em;
  background-color: var(--text-color);
  margin-left: -1.5em;
  margin-right: -1.5em;
}




</style>

<!--
# <small>Grand Park presents</small> Sunday Sessions <small>2019</small>
-->



<h1>
  <span class="smiley">
    <img src="/uploads/programs/sunday-sessions/smiley.svg" alt="" height="500" />
    <img src="/uploads/programs/sunday-sessions/smiley.svg" alt="" height="500" />
    <img src="/uploads/programs/sunday-sessions/smiley.svg" alt="" height="500" />
  </span>
  <img src="/uploads/programs/sunday-sessions/headline-3.svg" alt="Grand Park presents: Sunday Sessions // #SundaySessionsDTLA // @grandpark_la" height="500" />
</h1>

<div></div>

## When

Sunday from <time datetime="14:00">2 p.m.</time> to <time datetime="20:00">8 p.m.</time><br />
_<small>June 23, July 21, August 18, and September 22</small>_<br />

<!-- <figure style="filter: unset;">
  <img src="/uploads/programs/sunday-sessions-poster-top.png" alt="Sunday Sessions" height="500" />
</figure> -->

## Where

Grand Park’s [Performance Lawn](/performance-lawn/) between Grand Avenue and Hill Street

<p class="action" markdown="1">
[Directions to the Park](/directions/)
</p>

## Free /<br />Gratis

This is a _free_ event. There’s no cost to attend.

* * *

## Flashback video to Sunday <span class="avoid-break">Sessions 2018!</span>

<figure class="feature">
<div data-aspect-ratio="1280/720">
<a href="https://vimeo.com/289365164" class="has-icon">
<img src="/uploads/programs/sunday-sessions-2.jpg" width="1000" alt="" />
<span class="icon play">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.2 33.7" width="29" height="34">
<title>Video of Sunday Sessions</title>
<switch>
<polygon fill="black" points="29.2,16.9 0,0 0,33.7 29.2,16.9 0,0 0,33.7 "></polygon>
<foreignobject>Video of Sunday Sessions</foreignobject>
</switch>
</svg>
</span>
</a>
</div>
</figure>
<!-- 
<figure>
  <img src="/uploads/programs/sunday-sessions-1.jpg" alt="Sunday Sessions August 2018 crowd shot" height="500" />
</figure> -->

## DJ<span style="text-transform: none;">s</span><br />Dancing

Dance and music are the centerpiece for every hot summer party. For its seventh summer, _Grand Park’s Sunday Sessions_ hosts L.A.’s finest House music curators and DJs on select Sundays from June through September.

This popular series of free outdoor dance parties will celebrate the contribution of Los Angeles artists to the American-originated, globally embraced art form of House music.

Guests can picnic or purchase food from food trucks and cocktails from the bar (21+ only) and enjoy the sounds of summer in a beautiful setting right in the heart of Downtown L.A.

<!-- <figure style="filter: unset; border-width: 0;">
  <img src="/uploads/programs/sunday-sessions-poster-bottom.png" alt="Sunday Sessions" height="500" />
</figure> -->

* * *

<p markdown="1" style="grid-column: 1/-1; text-align: center; max-width: none;">
_Stay tuned as we announce DJs in the coming weeks!_
</p>

* * *

## Summer Schedule

6/23
: **Qvolé** Collective
: ![](/uploads/programs/sunday-sessions/artists/qvolé.svg)

7/21
: **Low** by Forward Rhythm
: ![](/uploads/programs/sunday-sessions/artists/low.png)

8/18
: **6AM** Group
: ![](/uploads/programs/sunday-sessions/artists/6am.svg)

9/22
: **Dublab** 20th Anniversary
: ![](/uploads/programs/sunday-sessions/artists/dublab.svg)


<ul class="logos">
  <li><img src="/uploads/programs/sunday-sessions/sponsors/fusicology.svg" alt="Fusicology" /></li>
  <li><img src="/uploads/programs/sunday-sessions/sponsors/funktion.svg" alt="Funktion-One Sound by Higher 9" /></li>
</ul>



