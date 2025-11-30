---
layout: medialog_index.njk
title: MEDIALOG
permalink: /medialog/index.html
---
  {%- for post in collections.medialog -%}
              <article class="{{ post.data.type }}">
              <h3 class="mediatitle">{{ post.data.title }}</h3>
              <img src="/assets/graphics/medialog/covers/{{ post.data.cover }}{{ post.data.extension }}" class="cover">
              <div class="summary">
              <ul class="infotable">
                <li><b>logged on:</b><span class="date">{{page.date | postDate}}</span></li>
                <li><b>ratings:</b><span class="rating">
                {% for emoji in post.data.ratings %}<img src="/assets/graphics/medialog/ratings/{{ emoji }}.png">{% endfor %}
                 </span></li>
              </ul>
              {{- post.content -}}
              </div>
              (<a href="{{ post.data.permalink }}" class="postlink"> ✱ read more?</a>)
              </article>

  {%- endfor -%}