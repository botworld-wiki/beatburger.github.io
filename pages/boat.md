---

layout: breadcrumbs
permalink: /boat
title: Boat Upgrades
description: "Locations of everything you need to upgrade your Boat, unlocks & requirements"
breadcrumbs:
  Botworld: "/#botworld"
  
---


# Boat Upgrades


Upgrading your Boat will be required to advance the main story, unlock new [Maps](/maps) and many cool perks

- **Business Upgrade:** [Business Upgrades page](/business)


## Level 1

![half-left](https://cdn.discordapp.com/attachments/923510071026155550/931487194122702858/boat-lvl.png)

- **Unlocks:** 
- **Requirements:** Defeat [Arena Master Brad](/arena#brad), ...

### Materials

- [Drift Wood](/drift-wood): Found washed up on beaches



## Level 2

![half-left](https://cdn.discordapp.com/attachments/923510071026155550/931487194122702858/boat-lvl.png)

- **Unlocks:** 
- **Requirements:** Defeat [Arena Master Brad](/arena#brad), ...

### Materials

- [Drift Wood](/drift-wood): Found washed up on beaches
- [Barrel](/barrel): Found scattered all around the Scrapper Coast
- [Old Mast](/old-mast) One was spotted in somewhere in Southbank

[boat lvl2 map](https://cdn.discordapp.com/attachments/923509490307977227/927052030055424010/20220102_111242.png)


## Level 7

![half-left](https://cdn.discordapp.com/attachments/923510071026155550/931487194122702858/boat-lvl.png)

- **Unlocks:** [Squad Cup](/arena), 2nd [Recruit](/recruits) & [Recruits Management](/recruits#managment)
- **Requirements:** Defeat [Arena Master Kelvin](/arena#kelvin), build 14 [Bots](/bots), [upgrade](/materials) 110 bots levels.

### Materials
<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Material</th>
      <th>Name</th>
      <th>Qty</th>
      <th>Description</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% assign mats_by_rarity = site.boat | find_exp:"mat",
"mat.matReqBoatLvl7 != ''" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td class="overview">{{material.matReqBoatLvl7}}</td>
        <td>
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a>
        </td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>


