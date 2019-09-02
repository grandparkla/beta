---
title: Park rules
permalink: /rules/
---

<nav markdown="1">
* [Plan your visit](/visit/)
</nav>

{% if site.use_illustrations %}
<style>
.illustration {
  grid-column: -3/-1;
  grid-row: 3/6;
}
.illustration svg {
  height: 20vmax;
  width: auto;
  color: inherit;
}
.illustration svg,
.illustration svg path {
  fill: currentColor;
}
.illustration svg * {
  color: inherit !important;
}
main h1 {
  grid-column-end: -4;
}
main > nav:first-child {
  grid-row-start: 1;
}
body > main > h3,
body > main > ul,
body > main > main > h3,
body > main > main > ul,
body > main > main > p {
  grid-column-start: 3;
  grid-column-end: 8;
}
body > main > main > h3,
body > main > main > ul,
body > main > main > p {
  grid-column-start: 3;
  grid-column-end: 8;
}

body > main > figure {
  width: calc(100vw - 3em);
  height: calc(100vw - 3em);
  max-width: calc(20em - 3em);
  max-height: calc(20em - 3em);
  border-radius: 50%;
}
body > main > figure img {
  display: block;
  width: calc(100vw - 3.75em);
  height: calc(100vw - 3.75em);
  max-width: calc(20em - 3.75em);
  max-height: calc(20em - 3.75em);
  object-fit: cover;
  border-radius: 50%;
}
@media (min-width: 60em) {
  body > main > figure {
    width: auto;
    height: auto;
    max-width: unset;
    max-height: unset;
    grid-column: -3/-1;
    grid-row: 2/4;
    justify-self: end;
    align-self: start;
    margin-bottom: 0;
    margin-top: 0;
  }
  body > main > figure img {
    width: 25vw;
    height: 25vw;
    max-width: unset;
    max-height: unset;
  }
  body > main > figure + figure {
    grid-column: -4/-2;
    grid-row: 4/7;
    left: -10vw;
    top: -3.5vw;
  }
  body > main > figure + figure + figure {
    grid-column: -3/-1;
    grid-row: 5/8;
    left: unset;
    top: unset;
  }
  body > main > figure img {
    width: 25vw;
    height: 25vw;
    max-width: unset;
    max-height: unset;
  }
  /*
  body > main > main:first-of-type {
    margin-top: -20vw;
  }
  */
    body > main > figure {
      grid-row: 1/5;
    }
}
@media (min-width: 80em) {
  body > main > figure {
    margin-right: 5vw;
  }
  body > main > figure img {
    width: calc(2.5/8 * 100vw - 3em);
    height: calc(2.5/8 * 100vw - 3em);
  }
}
@media (min-width: 60em) {
  body > main > figure:nth-of-type(2) {
    left: -10vw;
    top: 5vw;
  }
  body > main > figure:nth-of-type(2) img {
    width: calc(1.5/8 * 100vw - 3em);
    height: calc(1.5/8 * 100vw - 3em);
  }
  body > main > figure:nth-of-type(3) img {
    width: calc(2/8 * 100vw - 3em);
    height: calc(2/8 * 100vw - 3em);
  }
}

@media (min-width: 60em) {
  main > nav:first-child {
    grid-row: 1/2;
    position: relative;
    z-index: 2;
  }
  body > main > h1 {
    grid-column: 2/-1;
    grid-row: 1/2;
    z-index: 1;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    /*
    text-shadow: 0 0 1em var(--sky);
    */
  }
  body > main > h1 + p {
    grid-row: 3/4;
    grid-column: 5/-2;
    font-size: inherit;
    position: relative;
    left: 2vw;
    padding-top: 0.125em;
  }
  body > main > nav:not(:first-child) {
    grid-row: 1/2;
    grid-column: 2/5;
    justify-self: end;
    text-align: right;
    padding: 0.5em 1.9em 4.5em 0;
    position: relative;
    left: 2vw;
  }
  body > main > nav:not(:first-child) li a::before {
    left: unset;
    right: -1.5em;
  }
  body > main > figure:nth-of-type(1) {
    grid-row: 2/3;
    grid-column: 2/-2;
    align-self: start;
    justify-self: start;
    left: unset;
    top: unset;
    margin: unset;
  }
  body > main > figure:nth-of-type(2) {
    grid-row: 2/3;
    grid-column: 2/-2;
    align-self: start;
    justify-self: center;
    left: unset;
    top: unset;
    margin: unset;
  }
  body > main > figure:nth-of-type(3) {
    grid-row: 2/3;
    grid-column: 2/-2;
    align-self: start;
    justify-self: end;
    left: unset;
    top: unset;
    margin: unset;
  }
  body > main > main:first-of-type {
    margin-top: 4.5em;
  }
  body > main > figure:nth-of-type(1) img,
  body > main > figure:nth-of-type(2) img,
  body > main > figure:nth-of-type(3) img {
    width: calc(2/8 * 100vw - 3em);
    height: calc(2/8 * 100vw - 3em);
  }
}

/*
.illustration-palm-1 {
  margin-left: -1.5em;
  width: 100vw;
  margin-right: -1.5em;
  left: unset;
  color: hsla(0, 0%, 0%, 0.5);
}
@media (min-width: 60em) {
  .illustration-palm-1 {
  }
}
.illustration-palm-1 svg {
  width: 100vw;
  max-width: unset;
  margin-left: unset;
}
.illustration-palm-2 {
  display: none;
}
*/
</style>

<style>
@media (min-width: 60em) and false {
  .illustration-flowers-1 {
    transform: translateY(calc(-50% + 38em));
    left: 0;
  }
  .illustration-flowers-2 {
    transform: translateY(calc(-25% + 36em)) scaleX(-1);
  }
}
.illustration-palm-1 {
  margin-left: -1.5em;
  width: 100vw;
  margin-right: -1.5em;
  left: unset;
  color: hsla(0, 0%, 0%, 0.5);
  color: hsla(244, 59%, 28%, 0.625);
  color: hsla(202, 59%, 28%, 0.625);
  color: hsla(180, 100%, 30%, 0.625);
  color: hsla(180, 59%, 28%, 0.625);
  /*
  opacity: 1;
  -webkit-mask-image: unset;
  mask-image: unset;
  */
}
@media (min-width: 60em) {
  .illustration-palm-1 {
  }
}
.illustration-palm-1 svg {
  width: 100vw;
  max-width: unset;
  margin-left: unset;
}
.illustration-palm-2 {
color: hsl(180, 100%, 30%);
display: none;
}
</style>

{% comment %}
<div class="illustration">
{% include backgrounds/picnic.svg %}
</div>
{% endcomment %}
{% endif %}

Park rules
==========
<figure>
  <img src="/assets/temporary/misc/NYELA2019-0579.JPG" alt="Photo" height="500" />
</figure>

<figure>
  <img src="/uploads/areas/performance-lawn-4.jpg" alt="Photo" height="500" />
</figure>

<figure>
  <img src="/assets/temporary/optimized/Select_JMC1641.jpg" alt="Photo" height="500" />
</figure>
<!--
-->


<main class="lime-light" markdown="1">


### You are welcome to...

*   enjoy the park
*   spread blankets on the grass and have a picnic
*   play in the splash pad
*   walk your dog on a leash


### These things are prohibited in the park…

*   Alcohol. Grand Park may have events that include alcohol, and only alcohol within the bar area is authorized.
*   Narcotics or illegal drugs
*   Drones
*   Drone operation 
*   Bathing in pools or fountain
*   Camping
*   Cooking
*   Damage to plants or property
*   Entering upper fountain pools
*   Feeding animals
*   Explosives
*   Firecrackers
*   Firearms
*   Fires
*   Lawn umbrellas
*   Littering (including pet waste)
*   Overnight lodging
*   Professional-grade photo and video equipment, including but not limited to: tripods, drones, microphones, cameras, lights, reflectors, etc.
*   Public intoxication
*   Rideshare scooters
*   Rollerblading
*   Skateboarding
*   Smoking (including vapes)
*   Staking
*   Tents
*   Tripods
*   Unauthorized driving or parking
*   Unauthorized photo or video shoots
*   Unauthorized solicitation
*   Unauthorized vending
*   Unleashed animals
*   Weapons

<small><i>This list is subject to change, and subject to the discretion of Grand Park and/or The Music Center security. Special events may have additional prohibited items.</i></small>

### Special events

These additional things are prohibited in the park during the [4th of July Block Party](/4thofjuly/) and [N.Y.E.L.A.](/nyela/) events…

* Aerosol cans 
* Amplified noise
* Bags and backpacks measuring larger than standard backpack size (16.75 inches x 13 inches x 8.5 inches)
* Bicycles ([valet parking for bicycles will be available](/4thofjuly/#bicycles))
* Chairs
* Coolers
* Confetti cannons
* Fire matches 
* Flag Poles
* Generators
* Glass
* Identity-covering costumes
* Lighters
* Narcotics
* Sealed or open beverage bottles with liquid including water (fountains and water for purchase will be available)
* Outside solicitation 
* Projection devices 
* Printed signage (larger than 8.5 inches x 11 inches)
* Props
* Public intoxication
* Ride share scooters
* Rollerblading
* Selfie sticks
* Skateboarding
* Smartboards & smartboarding
* Smoking paraphernalia
* Sparklers
* Staking objects to ground
* Sticks
* Umbrellas

<small><i>This list is subject to change, and subject to the discretion of Grand Park and/or The Music Center security. Special events may have additional prohibited items.</i></small>

</main>
