---
title: DESIGN
layout: art/design.njk
permalink: "/art/design/index.html"
templateEngineOverride: njk,md
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>

{%- for post in collections.Design | reverse -%}
  <a class="glightbox" href="{{ post.data.image }}" data-glightbox="description: {{ post.data.description }}">
  <img src="{{ post.data.image }}">
        </a>      
  {%- endfor -%}
