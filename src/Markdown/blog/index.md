---
title: BLOGZONE
layout: blog/index.njk
permalink: /blog/index.html
templateEngineOverride: njk,md
---

  {%- for post in collections.Blog | reverse -%}
  <div class="entry">
  <div class="entryheader">
  <img src="{{ post.data.cover }}" class="cover">
  <div class="info">
   <h1>{{ post.data.title }}</h1>
   <span class="date">posted on {{post.data.date | postDate}} - {% for category in post.data.categories %}# {{category}} {% endfor %}</span>
  </div>
  </div>

  <div class="preview">
    <p> {{ post.data.preview }} </p>

  <a href="{{ post.data.permalink }}" class="readme">CONTINUE READING</a>

  </div>
  </div>
     
  {%- endfor -%}