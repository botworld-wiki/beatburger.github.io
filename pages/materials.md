---

layout: breadcrumbs
permalink: /materials
title: Bots Materials
description: The Materials you need to upgrade your Bots in Botworld Adventure - Everything there is to know about it on the Botworld Community Wiki!
breadcrumbs:
  Botworld: "/#botworld"
  Exploring: "/exploring"
  
---


# Bots Materials



<div markdown="1" class=" ghcms ghcms-intro">
</div>


<ul class="page-toc toc-block-list links">
  <li class="toc-block-entry" ><a href="#bots" title="Every Bots Material info">Bots Mats</a></li>
  <li class="toc-block-entry" ><a href="#crafting" title="Required Mats for every Bot ">Crafting Table</a></li>
  <li class="toc-block-entry" ><a href="#costs" title="Upgrade Costs by level">Upgrade Costs</a></li>
</ul>


- **The most efficient ways to get mats**: [Farming](/farming)
- **Ancient Ruins**: Check out our [explanation & maps about Ancient Ruins](/loot#ancient-ruins) 


<span id="bots"></span>

## Bots Materials


<div markdown="1" class=" ghcms ghcms-bots">

What you need to upgrade your bots.

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
        {% if material.matType == 'Bot' %}
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
              <td class="overview">{{material.matOverview}}</td>
            </tr>
        {% endif %}
    {% endfor %}
  </tbody>
</table>



<span id="crafting"></span>

## Crafting Table

<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Common 1</th>
      <th>Common 2</th>
      <th>Common 3</th>
      <th>Special</th>
      <th>Rare</th>
      <th>Essence</th>
    </tr>
  </thead>
  <tbody>
    {% assign bots_by_rarity = site.bots | sort: "botRaritySortOrder" %}
    {% for bot in bots_by_rarity %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img loading="lazy"   src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
            {% if bot.botAcquisition == "Random Drop" or bot.botAcquisition == "drop" %}
                <td><a href="/loot#botframes" title="How to find random Botframes">Random Drop</a></td>
            {% elsif bot.botAcquisition contains "arena" or bot.botAcquisition contains "Arena" %}
                <td><a href="/arena#rewards" title="See the rewards you can get from the arena">{{bot.botAcquisition}}</a></td>
            {% elsif bot.botAcquisition contains "season" or bot.botAcquisition contains "Season" %}
                <td><a href="/seasons" title="Read everything about season rewards">Season</a> then <a href="/loot#botframes" title="How to find random Botframes">Drop</a></td>
            {% elsif bot.botAcquisition contains "starter" or bot.botAcquisition contains "Starter" %}
                <td><a href="/starter-bots" title="The 3 starter bots in Botworld Adventure">Starter Bot</a> then <a href="/loot#botframes" title="How to find random Botframes">Drop</a></td>
            {% else %}
                <td>{{bot.botAcquisition}}</td>
            {% endif %}
            <td class="rarity_Common">
              <a href="/{{bot.commonMat1 | slugify}}" title="{{bot.commonMat1}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.commonMat1 | slugify}}.png" alt="{{bot.commonMat1}}" >
              </a>
            </td>
            <td class="rarity_Common">
              <a href="/{{bot.commonMat2 | slugify}}" title="{{bot.commonMat2}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.commonMat2 | slugify}}.png" alt="{{bot.commonMat2}}" >
              </a>
            </td>
            <td class="rarity_Common">
              <a href="/{{bot.commonMat3 | slugify}}" title="{{bot.commonMat3}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.commonMat3 | slugify}}.png" alt="{{bot.commonMat3}}" >
              </a>
            </td>
            <td class="rarity_Special">
              <a href="/{{bot.specialMat | slugify}}" title="{{bot.specialMat}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.specialMat | slugify}}.png" alt="{{bot.specialMat}}" >
              </a>
            </td>
            <td class="rarity_Rare">
              <a href="/{{bot.rareMat | slugify}}" title="{{bot.rareMat}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.rareMat | slugify}}.png" alt="{{bot.rareMat}}" >
              </a>
            </td>
            <td class="rarity_Epic">
              <a href="/essence" title="Default Essence page">
                <img loading="lazy"   src="/assets/img/materials/essence.png" alt="Default Essence pic" >
              </a>
            </td>
        </tr>
    {% endfor %}
  </tbody>
</table>

Credits: debb !


<span id="costs"></span>

## Upgrade Costs

| Level  |  Gold | Common 1 | Common 2 | Common 3 | Special | Rare | Epic |
| ------ | ----- | -------- | -------- | -------- | ------- | ---- | ---- |
| Build  | 50    | 10       | 10       | 10       |  4      | 1    |      |
| 2      | 5     | 1        | 1        | 1        |         |      |      |
| 3      | 8     | 2        | 2        | 2        |         |      |      |
| 4      | 12    | 2        | 2        | 2        |         |      |      |
| 5      | 16    | 3        | 3        | 3        |         |      |      |
| 6      | 20    | 4        | 4        | 4        |  1      |      |      |
| 7      | 25    | 4        | 4        | 4        |  2      |      |      |
| 8      | 30    | 5        | 5        | 5        |  2      |      |      |
| 9      | 40    | 6        | 6        | 6        |  2      |      |      |
| 10     | 50    | 8        | 8        | 8        |  3      |      |      |
| 11     | 60    | 10       | 10       | 10       |  3      | 1    |      |
| 12     | 70    | 10       | 10       | 10       |  4      | 1    |      |
| 13     | 85    | 15       | 15       | 15       |  4      | 1    |      |
| 14     | 105   | 15       | 15       | 15       |  5      | 1    |      |
| 15     | 125   | 15       | 15       | 15       |  6      | 1    |      |
| 16     | 155   | 20       | 20       | 20       |  6      | 1    |      |
| 17     | 190   | 20       | 20       | 20       |  8      | 1    |      |
| 18     | 235   | 25       | 25       | 25       |  8      | 1    |      |
| 19     | 290   | 25       | 25       | 25       |  10     | 1    |      |
| 20     | 355   | 30       | 30       | 30       |  15     | 1    |      |
| 21     | 885   | 65       | 65       | 65       |  35     | 2    | 1    |
| 22     | 1645  | 130      | 130      | 130      |  60     | 3    | 1    |
| 23     | 2730  | 210      | 210      | 210      |  75     | 5    | 1    |
| 24     | 4255  | 300      | 300      | 300      |  110    | 8    | 2    |
| 25     | 6380  | 410      | 410      | 410      |  160    | 10   | 3    |
| -      | -     | -        | -        | -        | -       | -    | -    |
| Total  | 17771 | 2648     | 1345     | 1345     |  519    | 38   | 8    |

Credits: Kartoffel & Huggy




