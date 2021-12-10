---

layout: default
title: List of all abilities
description: All the abilities in Botworld Adventure so far

---

# Every ability listed

<table>
  <thead>
    <tr>
      <th>Rarity</th>
      <th>Name</th>
      <th>Power</th>
      <th>Description</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for ability in site.abilities %}
    <tr>
      <td>{{ability.abilityRarity}}</td>
      <td><a href="{{ site.baseurl }}{{ ability.url }}"> {{ ability.abilityName }} </a></td>
      <td>{{ability.abilityCost}}</td>
      <td>{{ability.abilityDescription}}</td>
      <td>{{ability.abilityOpinion}}</td>
    </tr>
    {% endfor %}

  </tbody>
</table>
