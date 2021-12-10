---

layout: default
title: List of bots
description: All the bots in Botworld Adventure so far

---

# Every bot listed

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
    <tr>
      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
      <td>{{bot.botType}}</td>
      <td>{{bot.botAcquisition}}</td>
      <td>{{bot.botOpinion}}</td>
    </tr>
    {% endfor %}

  </tbody>
</table>
