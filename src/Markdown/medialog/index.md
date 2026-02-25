---
layout: medialog_index.njk
title: MEDIALOG
permalink: /medialog/index.html
templateEngineOverride: njk
---
  {% for post in collections.medialog | reverse %}
              <article class="{{ post.data.type }}">
              <h3 class="mediatitle">{{ post.data.title }}</h3>
              <img src="{{ post.data.cover }}" class="cover">
              <div class="summary">
              <ul class="infotable">
                <li><b>logged on:</b><span class="date">{{post.data.date | postDate}}</span></li>
                <li><b>ratings:</b><span class="rating">
                {% for emoji in post.data.ratings %}<img src="/assets/graphics/medialog/ratings/{{ emoji }}.png">{% endfor %}
                 </span></li>
              </ul>
              {{- post.content -}}
              </div>
              </article>

  {%- endfor -%}