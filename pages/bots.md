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
- [Upgrade Costs](#costs)


## Tanks


<div markdown="1" class=" ghcms ghcms-tanks">

Tanks soak up damage and protect weaker bots --- Best placed up front

</div>

<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
	    {% if bot.botType == 'Tank' %}
		  <tr class="collection-list-entry rarity_{{bot.botRarity}}">
		      <td class="table-pic">
			 <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
				<img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
			 </a>
		      </td>
		      <td>
			      <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
		      </td>
		      <td>{{bot.botAcquisition}}</td>
		      <td>{{bot.botOpinion}}</td>
		    </tr>
		{% endif %}
    {% endfor %}
  </tbody>
</table>


## Splashers

<div markdown="1" class=" ghcms ghcms-splashers">

Splashers damage multiple bots that are close together --- best placed at the back

</div>

<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
      {% if bot.botType == 'Splasher' %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
          <td>{{bot.botAcquisition}}</td>
          <td>{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Snipers

<div markdown="1" class=" ghcms ghcms-snipers">

Snipers do a lot of damage from a distance --- protect this bot as much as possible

</div>


<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
      {% if bot.botType == 'Sniper' %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
          <td>{{bot.botAcquisition}}</td>
          <td>{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Chasers

<div markdown="1" class=" ghcms ghcms-chasers">

Chasers are fast melee bots that are good at getting close to ranged enemies --- Let this bot get close to ranged damage dealers

</div>


<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
      {% if bot.botType == 'Chaser' %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
          <td>{{bot.botAcquisition}}</td>
          <td>{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Evaders

<div markdown="1" class=" ghcms ghcms-evaders">

Evaders are fast bots that are good at staying away from melee enemies --- distract chasers with these bots!

</div>


<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
      {% if bot.botType == 'Evader' %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
          <td>{{bot.botAcquisition}}</td>
          <td>{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Brawlers

<div markdown="1" class=" ghcms ghcms-brawlers">

Brawlers are good at fighting other melee bots --- 1v1 is their specialty

</div>


<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
      {% if bot.botType == 'Brawler' %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
          <td>{{bot.botAcquisition}}</td>
          <td>{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Supports

<div markdown="1" class=" ghcms ghcms-supports">

Supports make your other bots more effective --- best placed beside tanks

</div>


<table class="collection-list">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in site.bots %}
      {% if bot.botType == 'Support' %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
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

<span id="costs"></span>

## Upgrade Costs

| Level  |  Gold | Common 1 | Common 2 | Common 3 | Special | Rare | Epic |
| ------ | ----- | -------- | -------- | -------- | ------- | ---- | ---- |
| Build  | 50    | 10       | 10       | 10       |  4	    | 1    |      |
| 2      | 5     | 1        | 1        | 1        |  	    |      |      |
| 3      | 8     | 2        | 2        | 2        |  	    |      |      |
| 4      | 12    | 2        | 2        | 2        |  	    |      |      |
| 5      | 16    | 3        | 3        | 3        |  	    |      |      |
| 6      | 20    | 4        | 4        | 4        |  1	    |      |      |
| 7      | 25    | 4        | 4        | 4        |  2	    |      |      |
| 8      | 30    | 5        | 5        | 5        |  2	    |      |      |
| 9      | 40    | 6        | 6        | 6        |  2	    |      |      |
| 10     | 50    | 8        | 8        | 8        |  3	    |      |      |
| 11     | 60    | 10       | 10       | 10       |  3	    | 1    |      |
| 12     | 70    | 10       | 10       | 10       |  4	    | 1    |      |
| 13     | 85    | 15       | 15       | 15       |  4	    | 1    |      |
| 14     | 105   | 15       | 15       | 15       |  5	    | 1    |      |
| 15     | 125   | 15       | 15       | 15       |  6	    | 1    |      |
| 16     | 155   | 20       | 20       | 20       |  6	    | 1    |      |
| 17     | 190   | 20       | 20       | 20       |  8	    | 1    |      |
| 18     | 235   | 25       | 25       | 25       |  8	    | 1    |      |
| 19     | 290   | 25       | 25       | 25       |  10	    | 1    |      |
| 20     | 355   | 30       | 30       | 30       |  15	    | 1    |      |
| 21     | 885   | 65       | 65       | 65       |  35	    | 2    | 1    |
| 22     | 1645  | 130      | 130      | 130      |  60	    | 3    | 1    |
| 23     | 2730  | 210      | 210      | 210      |  75	    | 5    | 1    |
| 24     | 4255  | 300      | 300      | 300      |  110    | 8    | 2    |
| 25     | 6380  | 410      | 410      | 410      |  160    | 10   | 3    |
| -      | -     | -        | -        | -        | -       | -    | -    |
| Total  | 17771 | 2648     | 1345     | 1345     |  519    | 38   | 8    |

Credits: Kartoffel & Huggy



