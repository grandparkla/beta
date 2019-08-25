---
title: Contact us
permalink: /contact/
---

<nav markdown="1">
* [About the park](/about/)
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
main h1,
main h1 + p,
main > h1 + nav {
  grid-column-end: -4;
}
main > nav:first-child {
  grid-row-start: 1;
}

body > main > figure {
  width: calc(100vw - 3em);
  height: calc(100vw - 3em);
  border-radius: 50%;
}
body > main > figure img {
  display: block;
  width: calc(100vw - 3.75em);
  height: calc(100vw - 3.75em);
  object-fit: cover;
  border-radius: 50%;
  max-width: none;
}
@media (min-width: 60em) {
  body > main > figure {
    width: auto;
    height: auto;
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
  }
  body > main > figure + figure {
    grid-column: -4/-2;
    grid-row: 3/6;
    left: -10vw;
  }
  body > main > figure + figure + figure {
    grid-column: -3/-1;
    grid-row: 4/7;
    left: unset;
  }
  body > main > figure img {
    width: 25vw;
    height: 25vw;
  }
  body > main > main:first-of-type {
    margin-top: -10vw;
  }
}
@media (min-width: 80em) {
  body > main > figure {
    margin-right: 5vw;
    grid-row: 1/4;
  }
  body > main > figure img {
    width: calc(2/8 * 100vw - 3em);
    height: calc(2/8 * 100vw - 3em);
  }
}
</style>

<div class="illustration">
{% include backgrounds/enchanted-forest.svg %}
</div>
{% endif %}

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    margin-top: 0;
    grid-column: 1/-1;
    margin-left: -1.5em;
    margin-right: -1.5em;
  }
  body > main > figure:first-of-type img {
    height: 50vw;
    object-fit: cover;
  }
</style>

<style media="false">
@media (min-width: 60em) {
  body > main > figure:first-of-type {
    grid-column: 1/-1;
    grid-row: 1/3;
    margin-left: -1.5em;
    margin-right: -1.5em;
    margin-top: -15em;
    position: relative;
    z-index: -1;
  }
  body > main > nav:first-of-type {
    grid-row: 1/2;
    position: relative;
    z-index: 2;
    color: var(--snow);
    align-self: end;
  }
  body > main > h1:first-of-type {
    grid-row: 2/3;
    position: relative;
    z-index: 1;
    color: var(--snow) !important;
    align-self: start;
  }
  body > .sun {
    display: none;
  }
  body > main > h1:first-of-type + figure {
    position: relative;
  }
  body > main > h1:first-of-type + figure::after {
    content: "";
    background-image: linear-gradient(to top, hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

Contact us
==========

<nav markdown="1">
*   [For members of the media](/for-media/)
*   [For vendors](/for-vendors/)
*   [Sponsorship](/sponsorship/)
</nav>

<figure>
  <img src="/assets/temporary/optimized/3_11_17_Downtown_Bookfest_cr_Javier_Guillen.jpg" alt="Photo 1" height="500" />
</figure>

<figure>
  <img src="/assets/temporary/optimized/2018_7_4_18_4thofJulyBlockParty_Javier_Guillen-84.jpg" alt="Photo 1" height="500" />
</figure>

<figure>
  <img src="/assets/temporary/optimized/Select_JMC3943.jpg" alt="Photo 1" height="500" />
</figure>

<main markdown="1" class="sky-light">

{% capture markdown_text %}{% include contact-us.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

## Media Contact

For information about Grand Park, contact:

Lisa Ducore  
[lducore@musiccenter.org](mailto:lducore@musiccenter.org)  
213-972-3328

Get more information [for members of the media](/for-media/).

</main>


<!-- <main markdown="1" class="lime">

## For Vendors

### Grand Park is currently working with local vendors to enhance events.

All needs are met at the moment, _but_ if you’d like to let us know who you are and what you sell, please fill out and submit the [vendor inquiry form](https://docs.google.com/forms/d/1nETieVIcp_6Ijb_waW-UNpZO08NzK0wS7KmAkdJ98TE/viewform).

<small>We will contact you only if the opportunity arises and there is a need for what you’re selling.</small>

<p class="action" markdown="1">
[Vendor inquiry form](https://docs.google.com/forms/d/1nETieVIcp_6Ijb_waW-UNpZO08NzK0wS7KmAkdJ98TE/viewform)
</p>

</main> -->


<main markdown="1" class="lime-light">

## Sponsorship

### Is your company interested in supporting the park?

Please send an email to [sponsorship@musiccenter.org](sponsorship@musiccenter.org)

<div></div>

</main>

