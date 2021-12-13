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

<div markdown="1" class=" ghcms ghcms-main">

Copied from my reddit post  

**Commons**

- Vortex
- Super Charge
- Shield
- Missile
- Immobilize
- Hasty Ground
- Frost Missile
- Energy Bolt

**Specials**

- Speed Boost
- Poison Bolt
- Knockback Bolt
- Gust
- Goop
- Freeze
- Firewall
- Chilling Ground
- Charge Field
- Chaos Translocator

**Rares**

- Unstable Plasma
- Proximity Translocator
- Snowball
- Poison Trail
- Lightning Rod
- Knockback
- Immobilize Field
- Icewall
- Hypercharge
- Hack
- Frost Tower
- Corrode
- Charge Bolt
- Barrier Wall
- Ball Lightning

**Epics**

- Zap Tower
- Team Translocator
- Supercharged Chaos Translocator
- Poison Tower
- Poison Missile
- Hyperdrain
- Hack Missile
- Explosive Proximity Translocator
- Gale
- Tornado?
- (Scare Tower - temporarily suspended until reworked)

</div>
