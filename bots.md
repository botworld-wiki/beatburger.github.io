---

layout: default
title: All the bots
description: The place to learn everything there is to know about the wonderful bots you can encounter and build in Botworld Adventure!

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
