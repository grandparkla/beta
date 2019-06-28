{% if site.events_today or site.events_tomorrow %}

{% if site.events_today %}
## Today at <span class="avoid-break">Grand Park</span> <a id="today"></a>
{% else %}
## Tomorrow at <span class="avoid-break">Grand Park</span> <a id="tomorrow"></a>
{% endif %}

<ol class="event-list" style="grid-template-columns: 1fr;">
  <!-- <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>{% if site.events_today %}Today{% else %}Tomorrow{% endif %} at <time datetime="11:00">11 a.m.</time></p>
      </div>
      <img src="/uploads/programs/food-trucks-3.jpg" height="300" alt="" />
    </a>
  </li> -->
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>{% if site.events_today %}Today{% else %}Tomorrow{% endif %} at <time datetime="12:15">12:15 p.m.</time></p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>

{% endif %}
