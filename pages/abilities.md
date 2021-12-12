---

layout: default
permalink: /abilities
title: All the abilities
description: The place to learn everything there is to know about the powerful abilities you can find and use in Botworld Adventure!

---

# Every ability listed

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Power</th>
      <th>Description</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for ability in site.abilities %}
    <tr>
      <td class="rarity_{{ability.abilityRarity}}"><a href="{{ site.baseurl }}{{ ability.url }}"> {{ ability.abilityName }} </a></td>
      <td>{{ability.abilityCost}}</td>
      <td>{{ability.abilityDescription}}</td>
      <td>{{ability.abilityOpinion}}</td>
    </tr>
    {% endfor %}

  </tbody>
</table>
