---

layout: breadcrumbs
permalink: /materials
title: Materials
description: The Materials you need to upgrade your Boat and Bots in Botworld Adventure - Everything there is to know about it on the Botworld Community Wiki!
breadcrumbs:
  
---


# Materials


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
    {% for material in site.materials %}
	    {% if material.matType == 'Bot' %}
		  <tr class="collection-list-entry rarity_{{material.matRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
				<img src="/assets/img/materials/{{ material.imageUrl }}.png" alt="Image of the material {{ material.matName }}"> 
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



## Boat Materials


<div markdown="1" class=" ghcms ghcms-boat">

What you need to upgrade your boat.

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
    {% for material in site.materials %}
	    {% if material.matType == 'Boat' %}
		  <tr class="collection-list-entry rarity_{{material.matRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ material.url }}" title="Everything about the material {{ material.matName }}"> 
				<img src="/assets/img/materials/{{ material.imageUrl }}.png" alt="Image of the material {{ material.matName }}"> 
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


