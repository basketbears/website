---
layout: columns
title: Partner
---

<div class="columns is-multiline" style="display: flex">
{% for image in site.data.partner %}
<div class="column is-2-widescreen is-2-desktop is-3-tablet is-4-mobile">
  <div class="card">
    <a href="{{image.link}}" target="_blank">
      <img src="{{image.url}}" />
    </a>
  </div>
</div>
{% endfor %}
</div>
