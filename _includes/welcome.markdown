<h1 class="welcome">

<b>
{% for image_index in (1..46) %}
{% unless image_index == 3
       or image_index == 5
       or image_index == 6
       or image_index == 8
       or image_index == 18
       or image_index == 19
       or image_index == 20
       or image_index == 21
       or image_index == 25
       or image_index == 26
       or image_index == 36
       or image_index == 38
       or image_index == 39
       or image_index == 40
       or image_index == 41
       or image_index == 42
       or image_index == 43 %}
  {% capture image_filename %}{{ image_index }}.jpg{% endcapture %}
  <img src="/assets/temporary/welcome/384-wide/{{ image_filename }}" srcset="/assets/temporary/welcome/384-wide/{{ image_filename }} 384w, /assets/temporary/welcome/512-wide/{{ image_filename }} 512w, /assets/temporary/welcome/768-wide/{{ image_filename }} 768w, /assets/temporary/welcome/1024-wide/{{ image_filename }} 1024w, /assets/temporary/welcome/1536-wide/{{ image_filename }} 1536w, /assets/temporary/welcome/2048-wide/{{ image_filename }} 2048w" sizes="100vw" alt="Photo {{ image_index }}" style="display: none; opacity: 0; object-position: {% if forloop.index == 1 or forloop.index == 7 or forloop.index == 10 or forloop.index == 15 or forloop.index == 17 or forloop.index == 32 %}top{% else %}center{% endif %}" />
{% endunless %}
{% endfor %}
{% comment %}
  <img src="/assets/temporary/welcome/2048-wide/1.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/2.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/3.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/4.jpg" alt="" style="opacity: 0;" />
  <!-- <img src="/assets/temporary/welcome/2048-wide/5.jpg" alt="" style="opacity: 0;" /> -->
  <!-- <img src="/assets/temporary/welcome/2048-wide/6.jpg" alt="" style="opacity: 0;" /> -->
  <img src="/assets/temporary/welcome/2048-wide/7.jpg" alt="" style="opacity: 0;" />
  <!-- <img src="/assets/temporary/welcome/2048-wide/8.jpg" alt="" style="opacity: 0;" /> -->
  <img src="/assets/temporary/welcome/2048-wide/9.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/10.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/11.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/12.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/13.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/14.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/15.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/16.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/17.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/18.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/19.jpg" alt="" style="opacity: 0;" />
  <!-- <img src="/assets/temporary/welcome/2048-wide/20.jpg" alt="" style="opacity: 0;" /> -->
  <img src="/assets/temporary/welcome/2048-wide/21.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/22.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/23.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/24.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/25.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/26.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/27.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/28.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/29.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/30.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/31.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/32.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/33.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/34.jpg" alt="" style="opacity: 0;" />
  <img src="/assets/temporary/welcome/2048-wide/35.jpg" alt="" style="opacity: 0;" />
{% endcomment %}
</b>

<span style="opacity: 0;">

{% for message in page.welcome %}
  <em data-message="{{ message }}">{{ message }}</em>
{% endfor %}

  <svg class="sun" width="29" height="37" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 285 356.25" xmlns="http://www.w3.org/2000/svg"><path d="m143 74c37 0 68 31 68 69 0 37-31 68-68 68-38 0-69-31-69-68 0-38 31-69 69-69zm0 8c33 0 60 27 60 61 0 33-27 60-60 60-34 0-61-27-61-60 0-34 27-61 61-61z"/><path d="m136 66c10-33-19-17 4-66-9 44 23 42 12 66-6 0-11 0-16 0z"/><path d="m84 94c-16-32-26 1-44-50 25 37 46 13 55 38-4 4-8 7-11 12z"/><path d="m66 149c-33-10-17 19-66-4 44 9 42-23 66-12z"/><path d="m94 201c-32 17 1 26-50 44 37-25 13-46 38-55 4 4 7 8 12 11z"/><path d="m149 219c-10 33 19 17-4 66 9-44-23-42-12-66z"/><path d="m201 192c17 31 26-2 44 50-25-38-46-14-55-39 4-3 8-7 11-11z"/><path d="m219 136c33 10 17-19 66 4-44-9-42 23-66 12 0-6 0-11 0-16z"/><path d="m192 84c31-16-2-26 50-44-38 25-14 46-39 55-3-4-7-8-11-11z"/></svg>
  <svg class="leaf" width="26" height="23" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 262 226.25" xmlns="http://www.w3.org/2000/svg"><path d="m38 127c100 52 126-64 224-98-35-2-55-14-102 7 35-19 62-14 97-10-105-47-184-35-219 80-22 24-25 41-37 61-1 2-5 17 10 13 8-26 17-52 27-66 18-16 37-43 68-55-40 19-58 56-68 68z"/></svg>
  <svg class="waves" width="10" height="13"  viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg"><path d="m84.627264 992.40056c-1.664553-.01-3.263974.4712-4.656854 1.2403-.008 0-.0161.01-.024.013-5.36588 3.0714-6.85401 9.38604-8.22262 11.48844-2.20476 3.3087-6.11752 3.9262-9.6267 3.4568-1.31795-.2078-2.54677-.5937-3.53507-1.2199-.97414-.6171-1.73964-1.5194-2.04808-2.4661-.15393-.4723-.20244-.9722-.14043-1.4242.0615-.4481.23966-.8795.49118-1.2048.24857-.3216.6009-.5739.94818-.6892.34134-.1133.74057-.1091 1.04204 0 .26484.094.52549.2927.68774.5223.16217.2296.26139.5413.26182.8226.004 2.03 2.83651 2.5111 3.51108.5966.85295-2.4253.5346-5.13614-.85677-7.29804-1.39147-2.1614-3.72743-3.5737-6.28819-3.8019-1.92029-.1709-3.78202.3272-5.37387 1.2062-.008.01-.0163.01-.0244.014-5.36488 3.0709-6.85312 9.38314-8.22155 11.48674-1.77603 2.6665-4.66092 3.5832-7.5504 3.5943h-.14609c-.64933 0-1.29801-.052-1.93339-.1375-1.31727-.208-2.54514-.5937-3.53259-1.2196-.97425-.6171-1.73968-1.5189-2.04808-2.4656-.15399-.4726-.20279-.9723-.1408-1.4242.0615-.4482.23988-.8799.49121-1.2047.24858-.3216.60058-.5718.94815-.6873.34093-.1131.74018-.1089 1.04204 0 .26548.095.52599.2918.6881.5213.16219.2296.26176.5416.26219.8227.003 2.0304 2.83633 2.5126 3.51108.5975.85294-2.4253.53465-5.13794-.85678-7.29914-1.39145-2.1615-3.72768-3.5736-6.28818-3.8018-.48002-.043-.95659-.044-1.42596-.01l.005-.021c-1.40845.1093-2.75385.555-3.94758 1.2139-.008.01-.0163.01-.0243.014-5.36651 3.072-6.85418 9.38754-8.22296 11.48924-2.18498 3.4637-8.2595 3.191-8.38143 7.201h4.05627 82.211404 3.732326c-1.245488-5.3932-7.736543-2.8443-9.313001-7.418-.153967-.4726-.202766-.972-.140796-1.4238.06148-.4483.239858-.8803.491189-1.2051.248584-.3216.600566-.5729.948176-.6889.341088-.1133.740478-.1082 1.042378 0 .264845.095.52548.2916.687758.5212.162278.2298.261737.5424.262171.8241.0049 2.0296 2.836616 2.5104 3.511077.596.852945-2.4253.534622-5.13634-.856775-7.29824-1.391506-2.1617-3.727575-3.5745-6.28818-3.8029-.240003-.021-.479229-.032-.717027-.033z" fill-rule="evenodd" transform="translate(0 -952.36216)"/></svg>
  <svg style="transform: rotate(90deg); margin-left: -0.5em;" class="leaf" width="26" height="23" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 262 226.25" xmlns="http://www.w3.org/2000/svg"><path d="m38 127c100 52 126-64 224-98-35-2-55-14-102 7 35-19 62-14 97-10-105-47-184-35-219 80-22 24-25 41-37 61-1 2-5 17 10 13 8-26 17-52 27-66 18-16 37-43 68-55-40 19-58 56-68 68z"/></svg>

</span>



</h1>


