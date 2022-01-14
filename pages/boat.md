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

![half-left Boat upgraded to lvl 1](/assets/img/boat/boat-1.png)

### Unlocks
- **Business**: Earn income and get [Business Upgrades](/business)
- **Bot Builder lvl 1:** [Bots](/bots) can be [upgraded](/materials) to lvl 5

### Requirements

- Defeat [Arena Master Brad](/arena#brad)



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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl1', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl1}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl1">

</div>




## Level 2

![half-left Boat upgraded to lvl 2](/assets/img/boat/boat-2.png)

### Unlocks
- **The Arena:** Take on [Arena Masters](/arena) for fame and fortune

### Requirements
, ...



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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl2', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl2}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl2">

</div>
- [Drift Wood](/drift-wood): Found washed up on beaches
- [Barrel](/barrel): Found scattered all around the Scrapper Coast
- [Old Mast](/old-mast) One was spotted in somewhere in Southbank

![boat lvl2 map](https://cdn.discordapp.com/attachments/923509490307977227/927052030055424010/20220102_111242.png)


## Level 3

![half-left Boat upgraded to lvl 3](/assets/img/boat/boat-3.png)

### Unlocks
- **Multiplayer Arena:** Multiplayer battles unlocked in the [Arena](/arena) *Needs a linked Google Play account*
- **Bot Builder lvl2:** [Bots](/bots) can be [upgraded](/materials) to lvl 10

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl3', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl3}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl3">

</div>

## Level 4

![half-left Boat upgraded to lvl 4](/assets/img/boat/boat-4.png)

### Unlocks
- **Recruits:** Add [Recruits](/recruits) to your squad
- **Gread Desert:** Travel to the [Great Desert](/maps#great-desert) to discover new [bots](/bots)

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl4', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl4}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl4">

</div>

## Level 5

![half-left Boat upgraded to lvl 5](/assets/img/boat/boat-5.png)

### Unlocks
- **Danger Zones:** Unlocks daily [Danger Zones runs](/danger-zones)
- **Gadget Lab:** Allows for research of [Gadgets](/botpack#gadgets) to be used out in the field.

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl5', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl5}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl5">

</div>

## Level 6

![half-left Boat upgraded to lvl 6](/assets/img/boat/boat-6.png)

### Unlocks
- **Gadget Lab lvl2:** New [Gadgets](/botpack#gadgets) available to be researched

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl6', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl6}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl6">

</div>

## Level 7

![half-left](https://cdn.discordapp.com/attachments/923510071026155550/931487194122702858/boat-lvl.png)

### Unlocks
- **Arena Squad Battles:** Squad battles unlocked in the Arena
- **Recruits lvl 2:** [Recruit loadouts can be edited](/recruits#managment). Add an extra [Recruit](/recruits) to your squad
- **Fall Grove:** Travel to the [Fall Grove](/maps#fall-grove)


### Requirements
- Defeat [Arena Master Kelvin](/arena#kelvin)
- Build 14 [Bots](/bots)
- [upgrade](/materials) 110 bots levels.



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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl7', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl7}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl7">

</div>

## Level 8

![half-left Boat upgraded to lvl 8](/assets/img/boat/boat-8.png)

### Unlocks
- **Danger Zone 2:** Unlocks a new [Danger Zone](/danger-zones) to explore: [Molten Rock](/danger-zones#molten-rock)
- **Gadget Lab lvl 3:** New [Gadgets](/botpack#gadgets) available to be researched


### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl8', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl8}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl8">

</div>




## Level 9

![half-left Boat upgraded to lvl 9](/assets/img/boat/boat-9.png)

### Unlocks
- **Bot Builder lvl 4:** [Bots](/bots) can be [upgraded](/materials) to lvl 20
- **Gadget Lab lvl 4:** New [Gadgets](/botpack#gadgets) available to be researched
- **Saltwater Swamp:** Travel to the [Saltwater Swamp](/maps#saltwater-swamp)


### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl9', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl9}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl9">

</div>




## Level 10

![half-left Boat upgraded to lvl 10](/assets/img/boat/boat-10.png)

### Unlocks
- **Danger Zone 3:** Unlocks a new [Danger Zone](/danger-zones) to explore: [Vivid Valley](/danger-zones#vivid-valley)
- **Gadget Lab lvl 5:** New [gadgets](/botpack#gadgets) available to be researched

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl10', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl10}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl10">

</div>




## Level 11

![half-left Boat upgraded to lvl 11](/assets/img/boat/boat-11.png)

### Unlocks
- **Recruits lvl 3:** Adds an extra [Recruit](/recruits) to your squad
- **Bot Builder lvl 5:** [Bots](/bots) can be [upgraded](/materials) to lvl 25

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl11', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl11}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl11">

</div>




## Level 12

![half-left Boat upgraded to lvl 12](/assets/img/boat/boat-12.png)

### Unlocks
- **Danger Zone 4:** Unlocks a new [Danger Zone](/danger-zones) to explore: [Scrapyard](/danger-zones#scrapyard)
- **Gadget Lab lvl 6:** New [Gadgets](/botpack#gadgets) available to be researched
- **Parched Sea:** Travel to the [Parched Sea](/maps#parched-sea)

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl12', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl12}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl12">

</div>




## Level 13

![half-left Boat upgraded to lvl 13](/assets/img/boat/boat-13.png)

### Unlocks
- **Gadget Lab lvl 7:** New [Gadgets](/botpack#gadgets) available to be researched
- **Spore Woods:** Travel to the [Spore Woods](/maps#spore-woods)

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl13', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl13}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl13">

</div>




## Level 14

![half-left Boat upgraded to lvl 14](/assets/img/boat/boat-14.png)

### Unlocks
- **Gadget Lab lvl 8:** New [Gadgets](/botpack#gadgets) available to be researched
- **Ashen Shore:** Travel to the [Ashen Shore](/maps#ashen-shore)

### Requirements





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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl14', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl14}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl14">

</div>




## Level 15

![half-left Boat upgraded to lvl 15](/assets/img/boat/boat-15.png)

### Unlocks
- **Exterminator Squads:** New tier of [bosses added to Danger Zones](/danger-zones#exterminator-squads)

### Requirements



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
    {% assign mats_by_rarity = site.boat | where:'matReqBoatLvl15', "1" | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
      <tr class="collection-list-entry rarity_{{material.matRarity}}">
        <td class="table-pic">
          <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
            <img loading="lazy"   src="{{ material.matImageUrl }}" alt="Image of the material {{ material.matName }}"> 
          </a>
        </td>
        <td><a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a></td>   
        <td>{{material.matReqBoatLvl15}}</td>
        <td class="overview">{{material.matDescription}}</td>
        <td class="overview">{{material.matOverview}}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-lvl15">

</div>
