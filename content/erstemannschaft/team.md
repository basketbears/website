---
layout: columns
is_centered: true
hero_image: /img/team-header.webp
hero_darken: true
title: Die 1. Mannschaft
---

{% assign card-columns="column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile" %}

<div class="column is-12" style="flex: none; width: 100%">
    <p class="title is-3 has-text-centered">Spieler-Trainer</p>
</div>

<div class="{{card-columns}}">
  {% include player-profile-card.html playerId="linda0-0"%}
</div>
<div class="{{card-columns}}">
  {% include player-profile-card.html playerId="jill0-0"%}
</div>
<div class="{{card-columns}}">
  {% include player-profile-card.html playerId="sven0-0"%}
</div>

<div class="column is-12" style="flex: none; width: 100%">
    <p class="title is-3 has-text-centered">Spieler</p>
</div>

{% assign ersteMannschaft = "richard0-0,jana0-0,johannes0-0,anna0-0,philippe0-0,yannik0-0,jakobus0-0,robin0-0,mike0-0" | split: ',' %}
{% for playerId in ersteMannschaft %}
  <div class="{{card-columns}}">
    {% include player-profile-card.html playerId=playerId %}
  </div>
{% endfor %}
