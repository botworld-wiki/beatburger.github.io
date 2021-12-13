---

layout: default
permalink: /bots
title: "Robopedia"
description: The place to learn everything there is to know about the wonderful bots you can encounter and build in Botworld Adventure!

---



<div markdown="1" class=" ghcms ghcms-title">

# Robopedia: every bot

</div>

- [Tanks](#tanks)
- [Splashers](#splashers)
- [Snipers](#snipers)
- [Chasers](#chasers)
- [Evaders](#evaders)
- [Brawlers](#brawlers)
- [Supports](#supports)


## Tanks


<div markdown="1" class=" ghcms ghcms-tanks">

Role description, tips etc ?

</div>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Tank' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

## Splashers

<div markdown="1" class=" ghcms ghcms-splashers">

Role description, tips etc ?

</div>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Splasher' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

## Snipers

<div markdown="1" class=" ghcms ghcms-snipers">

Role description, tips etc ?

</div>


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Sniper' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

## Chasers

<div markdown="1" class=" ghcms ghcms-chasers">

Role description, tips etc ?

</div>


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Chaser' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

## Evaders

<div markdown="1" class=" ghcms ghcms-evaders">

Role description, tips etc ?

</div>


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Evader' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

## Brawlers

<div markdown="1" class=" ghcms ghcms-brawlers">

Role description, tips etc ?

</div>


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Brawler' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

## Supports

<div markdown="1" class=" ghcms ghcms-supports">

Role description, tips etc ?

</div>


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Acquisition</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Support' %}
		  <tr>
		      <td class="rarity_{{bot.botRarity}}"><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a></td>
		      <td>{{bot.botType}}</td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-more">

## Upgrades, botframes, "random drops" ?

## XP & AI explanations

farming technique
cost to reset

## ... ?

</div>




