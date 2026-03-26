---
title: SKETCHLOG
layout: art/sketchlog.njk
permalink: "/art/log/index.html"
templateEngineOverride: njk,md
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>

{%- for post in collections.Sketchlog | reverse -%}

<article>
{% for art in post.data.images %}
<a  class="glightbox" href="{{ art }}">
          <img src="{{ art }}" alt="" class="art" />
      </a>    

{% endfor %}
    <div class="content">
    {{ post.data.description }}
</div>
<hr />
  <ul class="tags">
  {% for tag in post.data.PostTags %}
    <a href="{{tag}}"><li>{{tag}}</li></a>
  {% endfor %}
  </ul>
</article>
{% endfor %}