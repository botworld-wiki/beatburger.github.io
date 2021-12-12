---

layout: default
permalink: /bots
title: "Robopedia: every bot"
description: The place to learn everything there is to know about the wonderful bots you can encounter and build in Botworld Adventure!

---

# Robopedia: every bot

- [Tanks](#tanks)
- [Splashers](#splashers)
- [Snipers](#snipers)
- [Chasers](#chasers)
- [Evaders](#evaders)
- [Brawlers](#brawlers)
- [Supports](#supports)


## Tanks

Role description, tips etc ?

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

Role description, tips etc ?

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

Role description, tips etc ?

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

Role description, tips etc ?

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

Role description, tips etc ?

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

Role description, tips etc ?

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

Role description, tips etc ?

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

## Upgrades, botframes, "random drops" ?

## XP & AI explanations

farming technique
cost to reset

## ... ?



