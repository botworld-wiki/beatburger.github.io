---

layout: breadcrumbs
permalink: /boosters
title: All the Boosters
description: The place to learn everything there is to know about the powerful Boosters you can find and use in Botworld Adventure!
breadcrumbs:
  Botpack: /botpack
  
---

<!-- Count the number of boosters of each type to display -->
{% assign commonBoosterCount = 0 %}
{% assign specialBoosterCount = 0 %}
{% assign rareBoosterCount = 0 %}
{% assign epicBoosterCount = 0 %}
{% assign legendaryBoosterCount = 0 %}

{% for booster in site.boosters %}
    {% if booster.boosterRarity == 'Common' %}
      {% assign commonBoosterCount = commonBoosterCount | plus: 1 %}
    {% elsif booster.boosterRarity == 'Special' %}
      {% assign specialBoosterCount = specialBoosterCount | plus: 1 %}
    {% elsif booster.boosterRarity == 'Rare' %}
      {% assign rareBoosterCount = rareBoosterCount | plus: 1 %}
    {% elsif booster.boosterRarity == 'Epic' %}
      {% assign epicBoosterCount = epicBoosterCount | plus: 1 %}
    {% elsif booster.boosterRarity == 'Legendary' %}
      {% assign legendaryBoosterCount = legendaryBoosterCount | plus: 1 %}
    {% endif %}
{% endfor %}

# Botpack Boosters ({{ site.boosters.size }})

## Index
**Booster Rarity** 🔹**|** [Common ({{ commonBoosterCount }})](#common-boosters) **|** [Special ({{ specialBoosterCount }})](#special-boosters) **|** [Rare ({{ rareBoosterCount }})](#rare-boosters) **|** [Epic ({{ epicBoosterCount }})](#epic-boosters) **|** [Legendary ({{ legendaryBoosterCount }})](#legendary-boosters) **|**

<table class="collection-list no-inline">
<!--  Commenting out thead since its not needed. If required again, just remove the comment tags before and after <thead></thead>  -->
<!--   <thead>
    <tr>
      <th>Booster</th>
      <th>Name</th>
      <th>Description</th>
      <th>Overview</th>
    </tr>
  </thead> -->
  <tbody>
    <tr><td colspan="4" id="common-boosters"><h2>Common Boosters ({{ commonBoosterCount }})</h2></td></tr>
    {% for booster in site.boosters %}
        {% if booster.boosterRarity == 'Common' %}
          <tr class="collection-list-entry rarity_{{booster.boosterRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> 
                <img loading="lazy"   src="{{ booster.imageUrl }}" alt="Image of the Booster {{ booster.boosterName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> {{ booster.boosterName }} </a>
              </td>
                    <td class="overview">{{booster.boosterDescription}}</td>
              <td class="overview">{{booster.boosterOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="4" id="special-boosters"><h2>Special Boosters ({{ specialBoosterCount }})</h2></td></tr>
    {% for booster in site.boosters %}
        {% if booster.boosterRarity == 'Special' %}
          <tr class="collection-list-entry rarity_{{booster.boosterRarity}}">
              <td class="table-pic">
                     <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> 
                        <img loading="lazy"   src="{{ booster.imageUrl }}" alt="Image of the Booster {{ booster.boosterName }}"> 
                     </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> {{ booster.boosterName }} </a>
              </td>
                    <td class="overview">{{booster.boosterDescription}}</td>
              <td class="overview">{{booster.boosterOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="4" id="rare-boosters"><h2>Rare Boosters ({{ rareBoosterCount }})</h2></td></tr>
    {% for booster in site.boosters %}
        {% if booster.boosterRarity == 'Rare' %}
          <tr class="collection-list-entry rarity_{{booster.boosterRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> 
                <img loading="lazy"   src="{{ booster.imageUrl }}" alt="Image of the Booster {{ booster.boosterName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> {{ booster.boosterName }} </a>
              </td>
                    <td class="overview">{{booster.boosterDescription}}</td>
              <td class="overview">{{booster.boosterOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="4" id="epic-boosters"><h2>Epic Boosters ({{ epicBoosterCount) }})</h2></td></tr>
    {% for booster in site.boosters %}
        {% if booster.boosterRarity == 'Epic' %}
          <tr class="collection-list-entry rarity_{{booster.boosterRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> 
                <img loading="lazy"   src="{{ booster.imageUrl }}" alt="Image of the Booster {{ booster.boosterName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> {{ booster.boosterName }} </a>
              </td>
                    <td class="overview">{{booster.boosterDescription}}</td>
              <td class="overview">{{booster.boosterOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="4" id="legendary-boosters"><h2>Legendary Boosters ({{ legendaryBoosterCount) }})</h2></td></tr>
    {% for booster in site.boosters %}
        {% if booster.boosterRarity == 'Legendary' %}
          <tr class="collection-list-entry rarity_{{booster.boosterRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> 
                <img loading="lazy"   src="{{ booster.imageUrl }}" alt="Image of the Booster {{ booster.boosterName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ booster.url }}" title="Everything about the Booster {{ booster.boosterName }}"> {{ booster.boosterName }} </a>
              </td>
                    <td class="overview">{{booster.boosterDescription}}</td>
              <td class="overview">{{booster.boosterOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
  </tbody>
</table>


<div markdown="1" class=" ghcms ghcms-main">


</div>
