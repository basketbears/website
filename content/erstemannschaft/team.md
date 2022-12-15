---
layout: columns
hero_image: /img/team-header.webp
hero_darken: false
---

<div class="column is-12" style="flex: none; width: 100%">
    <p class="title is-3 has-text-centered">Unsere erste Mannschaft stellt sich vor</p>
</div>

{{ site.data.players[3] }}
{% assign ersteMannschaft = "3,4,6,8,10,11,12,15,19,25,26" | split: ',' %}
{% for playerNumber in ersteMannschaft %}
  <div class="column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile">
    {% include player-profile-card.html player=playerNumber %}
  </div>
{% endfor %}
