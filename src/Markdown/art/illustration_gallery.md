---
title: ILLUSTRATION
layout: art/illustration/index.njk
permalink: "/art/illustration/index.html"
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
  {%- for post in collections.Illustration -%}
           <a  class="glightbox" href="/{{ post.data.image }}">
            <img src="/{{ post.data.thumb }}" class="piece hvr-grow-rotate ">
          </a>
          
          {%- endfor -%}