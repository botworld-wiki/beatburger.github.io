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

<div markdown="1" class="ghcms ghcms-lvl1infos">

![half-right Boat upgraded to lvl 1](/assets/img/boat/boat-1.png)

### Unlocks
- **Business**: Earn income and get [Business Upgrades](/business)
- **Bot Builder lvl 1:** [Bots](/bots) can be [upgraded](/materials) to lvl 5

### Requirements

- Defeat [Arena Master Brad](/arena#brad)

</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl1.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl1extra">

</div>




## Level 2

<div markdown="1" class="ghcms ghcms-lvl2infos">

![half-right Boat upgraded to lvl 2](/assets/img/boat/boat-2.png)

### Unlocks
- **The Arena:** Take on [Arena Masters](/arena) for fame and fortune
- **Guilds:** Create or join a [guild](/guilds) with other players

### Requirements
, ...

</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl2.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl2extra">

![boat lvl2 map](https://cdn.discordapp.com/attachments/923509490307977227/927052030055424010/20220102_111242.png)

</div>



## Level 3

<div markdown="1" class="ghcms ghcms-lvl3infos">

![half-right Boat upgraded to lvl 3](/assets/img/boat/boat-3.png)

### Unlocks
- **Multiplayer Arena:** Multiplayer battles unlocked in the [Arena](/arena) *Needs a linked Google Play account*
- **Bot Builder lvl2:** [Bots](/bots) can be [upgraded](/materials) to lvl 10

### Requirements



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl3.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl3extra">

[Blue tarp](</blue-tarp>) location:

![300px](<https://media.discordapp.net/attachments/877549224324104212/881613495383253032/blue-tarp-loc.jpg>)

</div>

## Level 4

<div markdown="1" class="ghcms ghcms-lvl4infos">

![half-right Boat upgraded to lvl 4](/assets/img/boat/boat-4.png)

### Unlocks
- **Recruits:** Add [Recruits](/recruits) to your squad
- **Gread Desert:** Travel to the [Great Desert](/maps#great-desert) to discover new [bots](/bots)

### Requirements



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl4.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl4extra">

</div>

## Level 5

<div markdown="1" class="ghcms ghcms-lvl5infos">

![half-right Boat upgraded to lvl 5](/assets/img/boat/boat-5.png)

### Unlocks
- **Danger Zones:** Unlocks daily [Danger Zones runs](/danger-zones)
- **Gadget Lab:** Allows for research of [Gadgets](/botpack#gadgets) to be used out in the field.

### Requirements



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl5.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl5extra">

</div>

## Level 6

<div markdown="1" class="ghcms ghcms-lvl6infos">

![half-right Boat upgraded to lvl 6](/assets/img/boat/boat-6.png)

### Unlocks
- **Gadget Lab lvl2:** New [Gadgets](/botpack#gadgets) available to be researched
- **Bot builder level 3:** [Bots](/bots) can be [upgraded](/materials) to level 15

### Requirements
- Complete 5 [Contracts](/contracts)
- [upgrade](/materials) 90 bots levels.


</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl6.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl6extra">

</div>

## Level 7

<div markdown="1" class="ghcms ghcms-lvl7infos">

![half-right Boat upgraded to lvl 7](/assets/img/boat/boat-7.png)

### Unlocks
- **Arena Squad Battles:** Squad battles unlocked in the [Arena](/arena)
- **Recruits lvl 2:** [Recruit loadouts can be edited](/recruits#managment). Add an extra [Recruit](/recruits) to your squad
- **Fall Grove:** Travel to the [Fall Grove](/maps#fall-grove)


### Requirements
- Defeat [Arena Master Kelvin](/arena#kelvin)
- Build 14 [Bots](/bots)
- [upgrade](/materials) 110 bots levels.

</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl7.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl7extra">

</div>

## Level 8

<div markdown="1" class="ghcms ghcms-lvl8infos">

![half-right Boat upgraded to lvl 8](/assets/img/boat/boat-8.png)

### Unlocks
- **Danger Zone 2:** Unlocks a new [Danger Zone](/danger-zones) to explore: [Molten Rock](/danger-zones#molten-rock)
- **Gadget Lab lvl 3:** New [Gadgets](/botpack#gadgets) available to be researched


### Requirements



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl8.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl8extra">

</div>




## Level 9

<div markdown="1" class="ghcms ghcms-lvl9infos">

![half-right Boat upgraded to lvl 9](/assets/img/boat/boat-9.png)

### Unlocks
- **Bot Builder lvl 4:** [Bots](/bots) can be [upgraded](/materials) to lvl 20
- **Gadget Lab lvl 4:** New [Gadgets](/botpack#gadgets) available to be researched
- **Saltwater Swamp:** Travel to the [Saltwater Swamp](/maps#saltwater-swamp)


### Requirements



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl9.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl9extra">

</div>




## Level 10

<div markdown="1" class="ghcms ghcms-lvl10infos">

![half-right Boat upgraded to lvl 10](/assets/img/boat/boat-10.png)

### Unlocks
- **Danger Zone 3:** Unlocks a new [Danger Zone](/danger-zones) to explore: [Vivid Valley](/danger-zones#vivid-valley)
- **Gadget Lab lvl 5:** New [gadgets](/botpack#gadgets) available to be researched

### Requirements
- Complete 10 [Contracts](/contracts)
- [Upgrade](/materials) 170 bots levels.

</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl10.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl10extra">

</div>




## Level 11

<div markdown="1" class="ghcms ghcms-lvl11infos">

![half-right Boat upgraded to lvl 11](/assets/img/boat/boat-11.png)

### Unlocks
- **Recruits lvl 3:** Adds an extra [Recruit](/recruits) to your squad
- **Bot Builder lvl 5:** [Bots](/bots) can be [upgraded](/materials) to lvl 25
- **Parched Sea:** Travel to the [Parched Sea](/maps#parched-sea)

### Requirements
- Defeat [Arena Master Jack](/arena#jack)
- Build 20 [Bots](/bots)
- [upgrade](/materials) 200 bots levels.


</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl11.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl11extra">

</div>




## Level 12

<div markdown="1" class="ghcms ghcms-lvl12infos">

![half-right Boat upgraded to lvl 12](/assets/img/boat/boat-12.png)

### Unlocks
- **Danger Zone 4:** Unlocks a new [Danger Zone](/danger-zones) to explore: [Scrapyard](/danger-zones#scrapyard)
- **Gadget Lab lvl 6:** New [Gadgets](/botpack#gadgets) available to be researched

### Requirements
- Defeat the Pirate Captain
- Complete 12 [contracts](/contracts)
- [Upgrade](/materials) 240 [bots](/bots)



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl12.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl12extra">

</div>




## Level 13

<div markdown="1" class="ghcms ghcms-lvl13infos">

![half-right Boat upgraded to lvl 13](/assets/img/boat/boat-13.png)

### Unlocks
- **Gadget Lab lvl 7:** New [Gadgets](/botpack#gadgets) available to be researched
- **Spore Woods:** Travel to the [Spore Woods](/maps#spore-woods)

### Requirements
- Investigate the [Scrapyard Danger Zone](/danger-zones#scrapyard)
- Defeat [Arena Master Nicola](/arena#nicola)
- [Upgrade](/materials) 290 [bots](/bots)


</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl13.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl13extra">

</div>




## Level 14

<div markdown="1" class="ghcms ghcms-lvl14infos">

![half-right Boat upgraded to lvl 14](/assets/img/boat/boat-14.png)

### Unlocks
- **Gadget Lab lvl 8:** New [Gadgets](/botpack#gadgets) available to be researched
- **Ashen Shore:** Travel to the [Ashen Shore](/maps#ashen-shore)
- **Bot builder level 6:** [Bots](/bots) can be upgraded to level 30

### Requirements



</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl14.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl14extra">

</div>




## Level 15

<div markdown="1" class="ghcms ghcms-lvl15infos">

![half-right Boat upgraded to lvl 15](</assets/img/boat/boat-15.png>)

### Unlocks

- **Exterminator Squads:** All Danger Zones become max level with a [new tier of boses](</danger-zones#exterminator-squads>)
- **Canister Production:** [Danger Zone](</danger-zones>) Canisters recharge 3x faster


### Requirements

- Restore power to [Coggy](</contribute#tbw>)
- [Upgrade](</materials>) 500 [bots](</bots>)

</div>

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
    {% assign mats_by_rarity = site.boat | where_exp:"mat",
"mat.matReqBoatLvl15.size > 0" | sort: "matRaritySortOrder" %}
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

<div markdown="1" class=" ghcms ghcms-lvl15extra">

</div>
