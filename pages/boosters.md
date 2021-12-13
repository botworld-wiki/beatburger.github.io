---

layout: default
permalink: /boosters
title: All the boosters
description: The place to learn everything there is to know about the powerful boosters you can find and use in Botworld Adventure!

---

# Every booster listed

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for booster in site.boosters %}
    <tr>
      <td class="rarity_{{booster.boosterRarity}}"><a href="{{ site.baseurl }}{{ booster.url }}"> {{ booster.boosterName }} </a></td>
      <td>{{booster.boosterDescription}}</td>
      <td>{{booster.boosterOpinion}}</td>
    </tr>
    {% endfor %}

  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-main">

Quick'n Dirty copy-paste from reddit:

## Commons

- **Ult Cooldowns**: 10% reduced ult cooldowns
- **Power Start**: +2 power at the start
- **Physical Resistance**: reduced phys. dmg 6%
- **Movement Speed**: increased mov. speed 8%
- **Brawler Lifesteal**: brawlers lifesteal 8%
- **Bot Stun**: stun attacks duration +12%
- **Bot Health**: bot health +4%
- **Sniper Range**: +20%

## Specials

- **Ult Charge**: bot ult cd start 20% charged
- **Splasher Effect Area**: splashers aoe +25%
- **Power Generation**: power regen +15%
- **Energy Resistance**: energy dmg taken -9%
- **Chaser Stun Resistance**: chasers stun duration -55%
- **Botpack Damage**: abilities dmg +18%
- **Bot Dodge**: dodge 12% melee attacks
- **Bot Crit**: 6% crit chance for double dmg
- **Lifesteal**: lifesteal 6%
- **Power Recycling**: 25% chance to get back 1 power after each ability

## Rares

- **Ult Cooldowns**: ult cd timer -20%
- **Stun Resistance**: stun duration -40%
- **Power Start**: starting +3 power
- **Chaser Speed**: chasers mov. speed +30%
- **Botpack Stun**: abilities stun +25%
- **Botpack Effect Area**: abilities aoe +25%
- **Bot Stun**: stun attacks +25%
- **Bot Health**: hp +8%
- **Bot Effect Area**: bot aoe attacks +20%
- **Bot Damage**: bot dmg +8%
- **Bot Dodge**: dodge melee attacks 16%
- **Evader dodge**: evaders dodge melee attacks 25%

## Epics

- **Physical Resistance**: phys dmg -15%
- **Movement Speed**: bots mov. speed +20%
- **Botpack Damage**: abilities dmg +30%
- **Bot Damage**: bot dmg +10%
- **Bot Crit**: 10% crit chance for double dmg
- **Bot Dodge**: dodge melee atacks 20%
- **Stun Resistance**: stun duration -50%
- **Power Recycling**: 40% chance to get back 1 power after each ability
- **Power Start**: +4 power at start
- **Power Generation**: power regen +25%
- **Botpack Effect Area**: abilities AOE +33%
- **Botpack Stun**: abilities stun +33%
- **Bot Health**: +10%
- **Energy Resistance**: energy dmg -15%
- **Bot Stun**: +30% duration


</div>
