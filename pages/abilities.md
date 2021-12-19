---

layout: breadcrumbs
permalink: /abilities
title: Botpack Abilities
description: The place to learn everything there is to know about the powerful abilities you can find and use in Botworld Adventure!
breadcrumbs:
  Botpack: /botpack
  
---

<img src="/assets/img/banners/abilities.png" style="width:100%" />

# Botpack Abilities

<table class="collection-list">
  <thead>
    <tr>
      <th>Ability</th>
      <th>Name</th>
      <th>Power</th>
      <th>Description</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for ability in site.abilities %}
	    {% if ability.abilityRarity == 'Common' %}
		  <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
				<img src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
			 </a>
		      </td>
		      <td>
			      <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
		      </td>
					<td>{{ability.abilityCost}}</td>
					<td>{{ability.abilityDescription}}</td>
		      <td class="overview">{{ability.abilityOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
    {% for ability in site.abilities %}
	    {% if ability.abilityRarity == 'Special' %}
		  <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
				<img src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
			 </a>
		      </td>
		      <td>
			      <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
		      </td>
					<td>{{ability.abilityCost}}</td>
					<td>{{ability.abilityDescription}}</td>
		      <td class="overview">{{ability.abilityOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
    {% for ability in site.abilities %}
	    {% if ability.abilityRarity == 'Rare' %}
		  <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
				<img src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
			 </a>
		      </td>
		      <td>
			      <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
		      </td>
					<td>{{ability.abilityCost}}</td>
					<td>{{ability.abilityDescription}}</td>
		      <td class="overview">{{ability.abilityOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
    {% for ability in site.abilities %}
	    {% if ability.abilityRarity == 'Epic' %}
		  <tr class="collection-list-entry rarity_{{ability.abilityRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> 
				<img src="{{ ability.imageUrl }}" alt="Image of the ability {{ ability.abilityName }}"> 
			 </a>
		      </td>
		      <td>
			      <a href="{{ site.baseurl }}{{ ability.url }}" title="Everything about the ability {{ ability.abilityName }}"> {{ ability.abilityName }} </a>
		      </td>
					<td>{{ability.abilityCost}}</td>
					<td>{{ability.abilityDescription}}</td>
		      <td class="overview">{{ability.abilityOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>


<div markdown="1" class=" ghcms ghcms-main">


</div>
