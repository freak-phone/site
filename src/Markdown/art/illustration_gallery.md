---
title: ILLUSTRATION
layout: art/illustration/index.njk
permalink: "/art/illustration/index.html"
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
  {%- for post in collections.illustration -%}
           <a  class="glightbox" href="/img/gallery/illustration/{{ post.data.title }}.{{ post.data.fileExtension }}">
            <img src="/img/gallery/illustration/thumbs/{{ post.data.title }}.png" class="piece hvr-grow-rotate ">
          </a>
          
          {%- endfor -%}