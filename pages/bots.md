---

layout: breadcrumbs
permalink: /bots
title: "Robopedia"
description: The place to learn everything there is to know about the wonderful bots you can encounter and build in Botworld Adventure!
breadcrumbs:

---




# Robopedia: Every Bot in Botworld



<ul class="bots page-toc toc-block-list links">
  <li class="toc-block-entry" ><a href="#tanks" title="See every Tank">Tanks <img src="/assets/img/icons/tanks.png" alt="Tank bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#splashers" title="See every Splasher">Splashers <img src="/assets/img/icons/splashers.png" alt="Splasher bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#snipers" title="See every Sniper">Snipers <img src="/assets/img/icons/snipers.png" alt="Sniper bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#chasers" title="See every Chaser">Chasers <img src="/assets/img/icons/chasers.png" alt="Chaser bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#evaders" title="See every Evader">Evaders <img src="/assets/img/icons/evaders.png" alt="Evader bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#brawlers" title="See every Brawler">Brawlers <img src="/assets/img/icons/brawlers.png" alt="Brawler bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#supports" title="See every Support">Supports <img src="/assets/img/icons/supports.png" alt="Support bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#ai" title="Everything about AI trees & xp">AI trees & XP</a></li>
</ul>


<div markdown="1" class=" ghcms ghcms-main">

</div>

**Bots Upgrades**: see [Crafting Table](/materials#crafting) and [Upgrade Costs](/materials#costs), on the [Materials](/materials) page. 

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
			{% if bot.botAcquisition == "drop" %}
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
		      <td class="overview">{{bot.botOpinion}}</td>
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
			{% if bot.botAcquisition == "drop" %}
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
          <td class="overview">{{bot.botOpinion}}</td>
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
			{% if bot.botAcquisition == "drop" %}
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
          <td class="overview">{{bot.botOpinion}}</td>
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
			{% if bot.botAcquisition == "drop" %}
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
          <td class="overview">{{bot.botOpinion}}</td>
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
			{% if bot.botAcquisition == "drop" %}
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
          <td class="overview">{{bot.botOpinion}}</td>
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
			{% if bot.botAcquisition == "drop" %}
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
          <td class="overview">{{bot.botOpinion}}</td>
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
			{% if bot.botAcquisition == "drop" %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>




<span id="ai"></span>

<div markdown="1" class=" ghcms ghcms-more">

## XP & AI explanations

farming technique
cost to reset

## ... ?

</div>
