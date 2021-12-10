---

layout: default
title: List of bots
description: All the bots in Botworld Adventure so far

---

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Rarity</th>
      <th>Acquisition</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
    <tr>
      <td><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
      <td>{{bot.botType}}</td>
      <td>{{bot.botRarity}}</td>
      <td>{{bot.botAcquisition}}</td>
      <td>{{bot.botSummary}}</td>
    </tr>
    {% endfor %}

  </tbody>
</table>
