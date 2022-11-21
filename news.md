---
title: News
---

<div class="columns is-multiline">
  {% for post in site.posts %}
  <div class="column is-6">
    {% include post-card.html %}
  </div>
  {% endfor %}
</div>
