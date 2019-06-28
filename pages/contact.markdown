---
title: Contact us
permalink: /contact/
---

<nav markdown="1">
* [About the park](/about/)
</nav>

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
main h1 + nav,
main h1 + nav + h4,
main h1 + nav + h4 + p {
  grid-column-end: -3;
}
main > nav:first-child {
  grid-row-start: 1;
}
</style>

<div class="girl">
{% include backgrounds/business-girl.svg %}
</div>
{% endif %}

Contact us
==========

{% capture markdown_text %}{% include contact-us.markdown %}{% endcapture %}
{{ markdown_text | markdownify }}

<main markdown="1" class="sky-light">

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

