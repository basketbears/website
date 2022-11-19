---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: columns
title: Basket Bears Krefeld
---

<div class="column is-6" markdown="1">

#### Trainingszeiten

<div style="max-width: 450px" markdown="1">

|            | Jugend        | 1. Mannschaft |
| ---------- | ------------- | ------------- |
| Montag     | 17:30 - 19:00 | 17:30 - 20:00 |
| Donnerstag |               | 18:30 - 20:00 |

</div>

In den Schulferien und an gesetzlichen Feiertagen in NRW findet kein Training statt.

---

#### Wir sind dein Rollstuhl-Basketball-Verein in Krefeld
Du möchtest lernen, wie du aktiv mit dem Rollstuhl umgehen kannst?

Du möchtest Spiel und Spaß in einem Team, aus behinderten und nichtbehinderten Spielern?

**Dann nimm Kontakt mit uns auf!**
- Per Mail an [info@basketbears.de](mailto:info@basketbears.de)  
- oder nutze unser [Kontaktformular](/kontakt/kontakt)

</div>
<div class="column is-1"></div>
<div class="column is-5" markdown="1">

#### Landesliga west
**Unsere nächsten Spiele**  
<sup>Quelle: [www.basketball-bund.net](www.basketball-bund.net)</sup>
<iframe id="iframe_widget_1661884534647" src="https://www.basketball-bund.net/widget/widgets/index2.html#!/mannschaftswidget/mannschaft/311777/params/%7B%22iframeHeight%22:386,%22showRefreshButton%22:true,%22titleColor%22:%22FFFFFF%22,%22titleBgColor%22:%221d1c78%22,%22tapColor%22:%22FFFFFF%22,%22tapBgColor%22:%22F36E20%22,%22colorMatchGroup%22:%22666666%22,%22bgColorMatchGroup%22:%22F0F0F0%22,%22colorMatchListItem%22:%22000000%22,%22bgColorMatchListItem%22:%22FFFFFF%22,%22showKuerzelInSpiele%22:false,%22mannschaftsId%22:%22311777%22%7D" style="border-width: 0" width="100%" height="386"></iframe>

#### News

<div class="columns is-multiline">
  {% for post in site.posts limit:5 %}
  <div class="column is-12">
    {% include post-card-small.html %}
  </div>
  {% endfor %}
</div>



</div>
