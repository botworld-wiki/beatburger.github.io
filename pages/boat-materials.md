---

layout: breadcrumbs
permalink: /boat-materials
title: Boat Materials Guide
description: The Materials you need to upgrade your Boat and progress through the Story in Botworld Adventure - List, maps & infos
breadcrumbs:
  Botworld: "/#botworld"
  Exploring: "/exploring"
  
---


# Story & Boat Materials



<div markdown="1" class=" ghcms ghcms-intro">

The Materials you need to upgrade your [Boat & Business](/business) and progress through the [Story](/story) 

</div>


<ul class="page-toc toc-block-list links">
  <li class="toc-block-entry" ><a href="#boat" title="Every Boat Material info">Boat Mats</a></li>
  <li class="toc-block-entry" ><a href="#story" title="Every Story Item info">Story Items</a></li>
  <li class="toc-block-entry" ><a href="#maps" title="Where to find everything">Maps</a></li>
</ul>


<span id="boat"></span>

## Boat Materials


<div markdown="1" class=" ghcms ghcms-boat">

What you need to upgrade your [Boat and its Business](/business).

</div>

<table class="collection-list">
  <thead>
    <tr>
      <th>Material</th>
      <th>Name</th>
      <th>Description</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% assign mats_by_rarity = site.materials | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
        {% if material.matType == 'Boat' %}
          <tr class="collection-list-entry rarity_{{material.matRarity}}">
              <td class="table-pic">
              <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
                <img loading="lazy"   src="/assets/img/materials/{{ material.matName | slugify }}.png" alt="Image of the material {{ material.matName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a>
              </td>
                    <td class="overview">{{material.matDescription}}</td>
              <td class="overview">{{material.matOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
  </tbody>
</table>

## Story Items

<div markdown="1" class=" ghcms ghcms-story">

Anything you need to find at some point to progress through the [Story](/story)

</div>

<table class="collection-list">
  <thead>
    <tr>
      <th>Item</th>
      <th>Name</th>
      <th>Description</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% assign mats_by_rarity = site.materials | sort: "matRaritySortOrder" %}
    {% for material in mats_by_rarity %}
        {% if material.matType == 'Story' %}
          <tr class="collection-list-entry rarity_{{material.matRarity}}">
              <td class="table-pic">
              <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
                <img loading="lazy"   src="/assets/img/materials/{{ material.matName | slugify }}.png" alt="Image of the material {{ material.matName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> {{ material.matName }} </a>
              </td>
                    <td class="overview">{{material.matDescription}}</td>
              <td class="overview">{{material.matOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-maps" id="maps">

### Ancient Ruins

Check out our [Explanation & Maps about Ancient Ruins](/loot#ancient-ruins) 

## Boat Level 1 & 2

![Driftwood, Barrel, Old Mast locations](https://cdn.discordapp.com/attachments/923509490307977227/927052030055424010/20220102_111242.png)

## Blue Tarp

![blue tarp map](<https://media.discordapp.net/attachments/877549224324104212/881613495383253032/blue-tarp-loc.jpg>)

</div>
