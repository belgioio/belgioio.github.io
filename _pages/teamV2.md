---
layout: page
title: My Team
permalink: /teamV2/
description: I am privileged to work with an outstanding research team! We're rapidly growing in size, with everyone either formally co-advised or integrated through various collaborations.
nav: true
nav_order: 3
---

<div class="container">
  <!-- PhD Students -->
  <h2 class="mt-5">PhD Students</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100 text-center border-0">
        <img src="/assets/img/prof_pic.jpg" class="card-img-top" alt="Daniel Tihanyi" style="object-fit: cover; height: 300px;">
        <div class="card-body">
          <h5 class="card-title"><a href="https://www.kth.se/profile/tihanyi?l=en" target="_blank">Daniel Tihanyi</a></h5>
        </div>
      </div>
    </div>
    {% for i in (1..4) %}
    <div class="col">
      <div class="card h-100 text-center border-0">
        <img src="/assets/img/prof_pic.jpg" class="card-img-top" alt="PhD Student {{ i }}" style="object-fit: cover; height: 300px;">
        <div class="card-body">
          <h5 class="card-title"><a href="#" target="_blank">PhD Student {{ i }}</a></h5>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <!-- Postdocs -->
  <h2 class="mt-5">Postdoctoral Researchers</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {% for j in (1..3) %}
    <div class="col">
      <div class="card h-100 text-center border-0">
        <img src="/assets/img/prof_pic.jpg" class="card-img-top" alt="Postdoc {{ j }}" style="object-fit: cover; height: 300px;">
        <div class="card-body">
          <h5 class="card-title"><a href="#" target="_blank">Postdoc {{ j }}</a></h5>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <!-- Research Assistants -->
  <h2 class="mt-5">Research Assistants</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <!-- Add cards here -->
  </div>
</div>

