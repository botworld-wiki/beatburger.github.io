---

layout: default
permalink: /abilities
title: Botpack Abilities
description: The place to learn everything there is to know about the powerful abilities you can find and use in Botworld Adventure!

---

<img src="https://cdn.discordapp.com/attachments/918419557792776202/920671904157794354/IMG_20211215_213954.png" style="width:100%" />

# Botpack Abilities

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

<div markdown="1" class=" ghcms ghcms-main">

## Abilities are cool idk

</div>
