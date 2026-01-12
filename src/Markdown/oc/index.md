---
permalink: /oc/index.html
layout: oc/index.njk
---

{%- for post in collections.oc -%}
<a href="/oc/{{ post.data.title }}">
        <div class="character">
          <img src="/img/oc/icons/{{ post.data.title }}-thumbnail.png" class="profile">
          <span class="name">{{ post.data.title }}</span>
        </div>
      </a>

{%- endfor -%}