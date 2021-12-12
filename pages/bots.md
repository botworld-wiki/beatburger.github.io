---

layout: default
permalink: /bots
title: Robopedia
description: The place to learn everything there is to know about the wonderful bots you can encounter and build in Botworld Adventure!

---

# Robopedia


(Table of content)

(list to be splitted in so many bot types ?)
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

## Tanks

Role description, tips etc ?

[[ Listing ]]

## Splashers

Role description, tips etc ?

[[ Listing ]]

## Snipers

Role description, tips etc ?

[[ Listing ]]

## Chasers

Role description, tips etc ?

[[ Listing ]]

## Evaders

Role description, tips etc ?

[[ Listing ]]

## Brawlers

Role description, tips etc ?

[[ Listing ]]

## Supports

Role description, tips etc ?

[[ Listing ]]

## Upgrades, botframes, "random drops" ?

## XP & AI explanations

farming technique
cost to reset

## ... ?



