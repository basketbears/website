---
layout: columns
hero_image: /img/team-header.webp
hero_darken: true
title: 1. Mannschaft
---

{% assign trainer-columns="column is-6-widescreen is-8-desktop is-12-tablet is-4-mobile" %}
{% assign player-columns="column is-3-widescreen is-4-desktop is-6-tablet is-6-mobile" %}


<div class="column is-4" markdown="0">
  <div class="columns is-multiline is-flex centered-on-desktop">
    <div class="column is-12" style="flex: none; width: 100%">
      <p class="title is-3 has-text-centered" style="white-space: nowrap">Spieler-Trainer</p>
    </div>
    <div class="{{trainer-columns}}">
      {% include player-profile-card.html playerId="linda0-0" background=site.theme_color %}
    </div>
    <div class="{{trainer-columns}}">
      {% include player-profile-card.html playerId="jill0-0" background=site.theme_color %}
    </div>
    <div class="{{trainer-columns}}">
      {% include player-profile-card.html playerId="sven0-0" background=site.theme_color %}
    </div>
  </div>
</div>
<div class="column is-8">
  <div class="columns is-multiline is-flex">
    <div class="column is-12" style="flex: none; width: 100%">
      <p class="title is-3 has-text-centered">Spieler</p>
    </div>
    {% assign ersteMannschaft = "richard0-0,jana0-0,johannes0-0,anna0-0,philippe0-0,yannik0-0,patrick0-0,jakobus0-0,sascha0-0,robin0-0,heiko0-0,mike0-0,sven1-0,patrick1-0" | split: ',' %}
    {% for playerId in ersteMannschaft %}
      <div class="{{player-columns}}">
        {% include player-profile-card.html playerId=playerId %}
      </div>
    {% endfor %}
  </div>
</div>


