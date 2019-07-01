
{% assign data_list = site.events %}
{% assign data_list = data_list | sort: "date" %}

{% comment %}
## June 2019

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <!-- <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>Every Tuesday, Wednesday &amp; Thursday</p>
      </div>
      <img src="/uploads/programs/food-trucks-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>Every Wednesday &amp; Friday</p>
      </div>
      <img src="/uploads/programs/yoga-3.jpg" height="300" alt="" />
    </a>
  </li> -->
  {% for event in data_list %}
    {% capture month_year %}{{ event.date | date: "%Y-%m" }}{% endcapture %}
    {% if month_year == "2019-06" %}
    {% unless event.featured == false %}
    <li data-type="{{ event.type }}" style="grid-column: span 2;">
      <a href="{{ event.url }}">
        <div>
          <h3>{{ event.type }}</h3>
          <h4>{{ event.title }}</h4>
          <p>
            {{ event.date | date: "%A, %B %e" }}
          </p>
        </div>
        <img src="{{ event.image }}" height="300" alt="" />
        {% comment %}
        {% if site.use_illustrations %}
          {% capture icon_number %}{% cycle '1', '2' %}{% endcapture %}
          {% if icon_number == '1' %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/enchanted-woods.svg %}
          {% else %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/tent.svg %}
          {% endif %}
        {% else %}
          <img src="{{ event.image }}" height="300" alt="" />
        {% endif %}
        {% endcomment %}
      </a>
    </li>
    {% endunless %}
    {% endif %}
  {% endfor %}
</ol>
<!-- <ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
        <p>
          Sunday, June 23
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-2.jpg" height="300" alt="" />
    </a>
  </li>
</ol> -->

{% endcomment %}

    
## July 2019

<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  {% for event in data_list %}
    {% capture month_year %}{{ event.date | date: "%Y-%m" }}{% endcapture %}
    {% if month_year == "2019-07" %}
    <li data-type="{{ event.type }}">
      <a href="{{ event.url }}">
        <div>
          <h3>{{ event.type }}</h3>
          <h4>{{ event.title }}</h4>
          <p>
            {{ event.date | date: "%A, %B %e" }}
          </p>
        </div>
        {% if site.use_illustrations %}
          {% capture icon_number %}{% cycle '1', '2' %}{% endcapture %}
          {% if icon_number == '1' %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/enchanted-woods.svg %}
          {% else %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/tent.svg %}
          {% endif %}
        {% else %}
          <img src="{{ event.image }}" height="300" alt="" />
        {% endif %}
      </a>
    </li>
    {% endif %}
  {% endfor %}
  <li>
    <a href="/4thofjuly/">
      <div>
        <h3>4th of July</h3>
        <h4>4th of July Block Party</h4>
        <p>
          Thursday, July 4
        </p>
      </div>
      <img src="/uploads/programs/4thofjuly.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
        <p>
          Sunday, July 21
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-8.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>Every Tuesday, Wednesday &amp; Thursday</p>
      </div>
      <img src="/uploads/programs/food-trucks.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>Every Wednesday &amp; Friday</p>
      </div>
      <img src="/uploads/programs/yoga-2.jpg" height="300" alt="" />
    </a>
  </li>
</ol>


  
## August 2019

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
        <p>
          Sunday, August 18
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-3.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>Every Tuesday, Wednesday &amp; Thursday</p>
      </div>
      <img src="/uploads/programs/food-trucks-2.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>Every Wednesday &amp; Friday</p>
      </div>
      <img src="/uploads/programs/yoga-3.jpg" height="300" alt="" />
    </a>
  </li>
  {% for event in data_list %}
    {% capture month_year %}{{ event.date | date: "%Y-%m" }}{% endcapture %}
    {% if month_year == "2019-08" %}
    <li data-type="{{ event.type }}">
      <a href="{{ event.url }}">
        <div>
          <h3>{{ event.type }}</h3>
          <h4>{{ event.title }}</h4>
          <p>
            {{ event.date | date: "%A, %B %e" }}
          </p>
        </div>
        {% if site.use_illustrations %}
          {% capture icon_number %}{% cycle '1', '2' %}{% endcapture %}
          {% if icon_number == '1' %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/enchanted-woods.svg %}
          {% else %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/tent.svg %}
          {% endif %}
        {% else %}
          <img src="{{ event.image }}" height="300" alt="" />
        {% endif %}
      </a>
    </li>
    {% endif %}
  {% endfor %}
</ol>



## September 2019

<ol class="event-list" style="grid-template-columns: 1fr;">
  <li>
    <a href="/yoga/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Yoga reTREAT</h4>
        <p>Every Wednesday &amp; Friday</p>
      </div>
      <img src="/uploads/programs/yoga-4.jpg" height="300" alt="" />
    </a>
  </li>
</ol>
<ol class="event-list" style="grid-template-columns: 1fr 1fr;">
  <li>
    <a href="/sunday-sessions/">
      <div>
        <h3>Sunday Sessions</h3>
        <h4>Day Dance Party</h4>
        <p>
          Sunday, September 22
        </p>
      </div>
      <img src="/uploads/programs/sunday-sessions-4.jpg" height="300" alt="" />
    </a>
  </li>
  <li>
    <a href="/food-trucks/">
      <div>
        <h3>Lunch à la Park</h3>
        <h4>Food Trucks</h4>
        <p>Every Tuesday, Wednesday &amp; Thursday</p>
      </div>
      <img src="/uploads/programs/food-trucks-2.jpg" height="300" alt="" />
    </a>
  </li>
  {% for event in data_list %}
    {% capture month_year %}{{ event.date | date: "%Y-%m" }}{% endcapture %}
    {% if month_year == "2019-09" %}
    <li data-type="{{ event.type }}">
      <a href="{{ event.url }}">
        <div>
          <h3>{{ event.type }}</h3>
          <h4>{{ event.title }}</h4>
          <p>
            {{ event.date | date: "%A, %B %e" }}
          </p>
        </div>
        {% if site.use_illustrations %}
          {% capture icon_number %}{% cycle '1', '2' %}{% endcapture %}
          {% if icon_number == '1' %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/enchanted-woods.svg %}
          {% else %}
            <img src="/assets/images/events/strawberry.svg" height="300" alt="" />
            {% include backgrounds/tent.svg %}
          {% endif %}
        {% else %}
          <img src="{{ event.image }}" height="300" alt="" />
        {% endif %}
      </a>
    </li>
    {% endif %}
  {% endfor %}
</ol>

