---
layout: page
title: People
permalink: /people/
description: I am privileged to work with an outstanding research team! We're rapidly growing in size, with everyone either formally co-advised or integrated through various collaborations.
nav: true
nav_order: 4

# Sections shown on this page, in order. Each team member is one file in
# _people/ whose `category` matches a key below. Sections with nobody in
# them are hidden, so e.g. "alumni" appears once the first alum is added.
#
# To add someone, copy any file in _people/ and edit it:
#   name:     full name
#   img:      photo file in assets/img/people/ (square-ish works best)
#   website:  personal page, LinkedIn or KTH profile (optional)
#   category: phd | postdoc | visitor | alumni
#   order:    position within the section (lower comes first)
#   note:     e.g. "co-advised with ..." (optional)
sections:
  - key: phd
    title: Doctoral candidates
  - key: postdoc
    title: Postdoctoral researchers
  - key: visitor
    title: Long-term visitors
  - key: alumni
    title: Alumni

group_photo: group_bw.JPG
group_photo_caption: KTH campus, Stockholm, June 2025
---

<div class="container">
  {% for section in page.sections %}
    {% assign members = site.people | where: "category", section.key | sort: "order" %}
    {% if members.size > 0 %}
      <h4 class="mt-5">{{ section.title }}</h4>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {% for person in members %}
          {% include person_card.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}

{% if page.group_photo %}
    <figure class="mt-5" style="margin-bottom: 2rem;">
      <img
        src="{{ page.group_photo | prepend: 'assets/img/people/' | relative_url }}"
        alt="{{ page.group_photo_caption }}"
        loading="lazy"
        style="width: 100%; height: auto; object-fit: cover;"
      >
      <figcaption style="text-align: center; font-size: 0.9em; color: #6c757d; margin-top: 0.5rem;">
        {{ page.group_photo_caption }}
      </figcaption>
    </figure>
{% endif %}
</div>
