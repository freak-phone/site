---
title: ILLUSTRATION
layout: art/illustration/index.njk
permalink: "/art/illustration/index.html"
---

<div id="description">
        {%- for post in collections.illustration -%}
           <a href="{{ post.data.permalink }}">
            <div class="piece" style="background-image: url('/img/gallery/illustration/thumbs/{{ post.data.title }}.png')"></div>
          </a>
          {%- endfor -%}
</div>