---

layout: breadcrumbs
permalink: /boosters
title: All the Boosters
description: The place to learn everything there is to know about the powerful Boosters you can find and use in Botworld Adventure!
breadcrumbs:
  Botpack: /botpack
  
---


# Botpack Boosters

## Index
**Booster Rarity** 🔹**|** [Common](#common-boosters) **|** [Special](#special-boosters) **|** [Rare](#rare-boosters) **|** [Epic](#epic-boosters) **|** [Legendary](#legendary-boosters) **|**

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
    <tr><td colspan="4" id="common-boosters"><b>Common Boosters</b></td></tr>
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
    <tr><td colspan="4" id="special-boosters"><b>Special Boosters</b></td></tr>
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
    <tr><td colspan="4" id="rare-boosters"><b>Rare Boosters</b></td></tr>
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
    <tr><td colspan="4" id="epic-boosters"><b>Epic Boosters</b></td></tr>
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
    <tr><td colspan="4" id="legendary-boosters"><b>Legendary Boosters</b></td></tr>
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
