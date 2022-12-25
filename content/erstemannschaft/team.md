---
layout: columns
hero_image: /img/team-header.webp
hero_darken: false
---

<div class="column is-12" style="flex: none; width: 100%">
    <p class="title is-3 has-text-centered">Unsere erste Mannschaft stellt sich vor</p>
</div>

{% assign ersteMannschaft = "richard0-0,jana0-0,johannes0-0,jill0-0,anna0-0,philippe0-0,yannik0-0,jakobus0-0,robin0-0,mike0-0,sven1-0" | split: ',' %}
{% for playerId in ersteMannschaft %}
  <div class="column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile">
    {% include player-profile-card.html playerId=playerId %}
  </div>
{% endfor %}
