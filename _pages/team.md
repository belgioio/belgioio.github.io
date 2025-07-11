---
layout: page
title: My Team
permalink: /team/
description: I am privileged to work with an outstanding research team! We're a rapidly growing in size, with everyone being either formally co-advised or being integrated through various collaborations.
nav: true
nav_order: 3
display_categories: [Doctoral candidates, Postodoctoral researchers, Research assistants, Long-term visitors]
horizontal: false
---

<!-- pages/My Team.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized team members -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_people = site.team | where: "category", category %}
  {% assign sorted_people = categorized_people | sort: "importance" %}

  <!-- Generate cards for each person -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for person in sorted_people %}
        {% include person_card.liquid person=person %}
      {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for person in sorted_people %}
      {% include person_card.liquid person=person %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display people without categories -->
{% assign sorted_people = site.team | sort: "importance" %}

<!-- Generate cards for each person -->
{% if page.horizontal %}
<div class="container">
  <div class="row row-cols-1 row-cols-md-2">
    {% for person in sorted_people %}
      {% include person_card.liquid person=person %}
    {% endfor %}
  </div>
</div>
{% else %}
<div class="row row-cols-1 row-cols-md-3">
  {% for person in sorted_people %}
    {% include person_card.liquid person=person %}
  {% endfor %}
</div>
{% endif %}

{% endif %}
</div>
