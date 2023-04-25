---

layout: breadcrumbs
permalink: /abilities
title: Abilities
description: The place to learn everything there is to know about the powerful abilities you can find and use in Botworld Adventure!
breadcrumbs:
  Botpack: /botpack
  
---

<img loading="lazy"   src="/assets/img/banners/abilities.png" style="width:100%" />

# Botpack Abilities

## Index
**Ability Rarity** 🔹**|** [Common](#common-abilities) **|** [Special](#special-abilities) **|** [Rare](#rare-abilities) **|** [Epic](#epic-abilities) **|** [Legendary](#legendary-abilities) **|**

<table class="collection-list no-inline">
<!--  Commenting out thead since its not needed. If required again, just remove the comment tags before and after <thead></thead>  -->
<!--   <thead>
    <tr>
      <th>Ability</th>
      <th>Name</th>
      <th>Power</th>
      <th>Description</th>
      <th>Overview</th>
    </tr>
  </thead> -->
  <tbody>
    <tr><td colspan="5" id="common-abilities"><h2>Common Abilities</h2></td></tr>
    {% for ability in site.abilities %}
        {% if ability.abilityRarity == 'Common' %}
          <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
                <img loading="lazy"   src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
              </td>
                    <td>{{ability.abilityCost}}</td>
                    <td class="overview">{{ability.abilityDescription}}</td>
              <td class="overview">{{ability.abilityOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="5" id="special-abilities"><h2>Special Abilities</h2></td></tr>
    {% for ability in site.abilities %}
        {% if ability.abilityRarity == 'Special' %}
          <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
                <img loading="lazy"   src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
              </td>
                    <td>{{ability.abilityCost}}</td>
                    <td class="overview">{{ability.abilityDescription}}</td>
              <td class="overview">{{ability.abilityOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="5" id="rare-abilities"><h2>Rare Abilities</h2></td></tr>
    {% for ability in site.abilities %}
        {% if ability.abilityRarity == 'Rare' %}
          <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
                <img loading="lazy"   src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
              </td>
                    <td>{{ability.abilityCost}}</td>
                    <td class="overview">{{ability.abilityDescription}}</td>
              <td class="overview">{{ability.abilityOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="5" id="epic-abilities"><h2>Epic Abilities</h2></td></tr>
    {% for ability in site.abilities %}
        {% if ability.abilityRarity == 'Epic' %}
          <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
              <td class="table-pic">
             <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
                <img loading="lazy"   src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
             </a>
              </td>
              <td>
                  <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
              </td>
                    <td>{{ability.abilityCost}}</td>
                    <td class="overview">{{ability.abilityDescription}}</td>
              <td class="overview">{{ability.abilityOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
    <tr><td colspan="5" id="legendary-abilities"><h2>Legendary Abilities</h2></td></tr>
<!--  Remove below line when legendary abilities added and copy the for loop from above with appropriate changes    -->
    <tr class="collection-list-entry rarity_Legendary"><td colspan="5">No Legendary Abilities Yet!</td></tr>
  </tbody>
</table>


<div markdown="1" class=" ghcms ghcms-main">


</div>
