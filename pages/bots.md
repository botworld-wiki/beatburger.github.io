---

layout: breadcrumbs
permalink: /bots
title: "All the Bots"
description: The place to learn everything there is to know about the wonderful bots you can encounter and build in Botworld Adventure!
breadcrumbs:
  "Botmasters": "/#botmasters"

---




# Robopedia: Every Bot in Botworld



<ul class="bots page-toc toc-block-list links">
  <li class="toc-block-entry" ><a href="#tanks" title="See every Tank">Tanks <img loading="lazy"   src="/assets/img/icons/tanks.png" alt="Tank bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#splashers" title="See every Splasher">Splashers <img loading="lazy"   src="/assets/img/icons/splashers.png" alt="Splasher bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#snipers" title="See every Sniper">Snipers <img loading="lazy"   src="/assets/img/icons/snipers.png" alt="Sniper bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#chasers" title="See every Chaser">Chasers <img loading="lazy"   src="/assets/img/icons/chasers.png" alt="Chaser bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#evaders" title="See every Evader">Evaders <img loading="lazy"   src="/assets/img/icons/evaders.png" alt="Evader bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#brawlers" title="See every Brawler">Brawlers <img loading="lazy"   src="/assets/img/icons/brawlers.png" alt="Brawler bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#supports" title="See every Support">Supports <img loading="lazy"   src="/assets/img/icons/supports.png" alt="Support bots logo"></a></li>
  <li class="toc-block-entry" ><a href="#ai" title="Everything about AI trees & xp">AI Training <img loading="lazy"   src="/assets/img/icons/AI-Training.png"></a></li>
</ul>


<div markdown="1" class=" ghcms ghcms-main">

</div>


- **Strategy Guide:** See [Comps & Combos](/comps)
- **Bots Upgrades:** See [Crafting Table](/materials#crafting) and [Upgrade Costs](/materials#costs), on the [Materials](/materials) page. 

## Tanks


<div markdown="1" class=" ghcms ghcms-tanks">

![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935633924104202/badge-tank.png>) **Tanks soak up damage and protect weaker bots — they are best placed up front.**

</div>

<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% assign bots_by_rarity = site.bots | sort: "botRaritySortOrder" %}
    {% for bot in bots_by_rarity %}
        {% if bot.botType == 'Tank' %}
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
              <td class="overview">{{bot.botOpinion}}</td>
            </tr>
        {% endif %}
    {% endfor %}
  </tbody>
</table>


## Splashers

<div markdown="1" class=" ghcms ghcms-splashers">

![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935633211076711/badge-splasher.png>) **Splashers damage multiple bots that are close together — best placed in the back or behind Tanks.**

</div>

<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
      {% if bot.botType == 'Splasher' %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Snipers

<div markdown="1" class=" ghcms ghcms-snipers">
![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935632871333918/badge-sniper.png>) **Snipers do a lot of damage from a distance — protect these bots as much as possible.**
</div>


<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
      {% if bot.botType == 'Sniper' %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Chasers

<div markdown="1" class=" ghcms ghcms-chasers">

![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935632036671588/badge-chaser.png>) **Chasers are fast melee bots that are good at getting close to ranged enemies — let these bots get close to ranged damage dealers.**

</div>


<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
      {% if bot.botType == 'Chaser' %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Evaders

<div markdown="1" class=" ghcms ghcms-evaders">

![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935632460288001/badge-evader.png>) **Evaders are fast bots that are good at staying away from melee enemies — distract Chasers with these bots!**
  
</div>


<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
      {% if bot.botType == 'Evader' %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Brawlers

<div markdown="1" class=" ghcms ghcms-brawlers">

![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935631692734525/badge-brawler.png>) **Brawlers are good at fighting other melee bots — 1v1 is their specialty!**

</div>


<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
      {% if bot.botType == 'Brawler' %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>

## Supports

<div markdown="1" class=" ghcms ghcms-supports">

![inline block](<https://cdn.discordapp.com/attachments/923510071026155550/1037935633575972874/badge-support.png>) **Supports make your other bots more effective — best placed beside Tanks.**

</div>


<table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Acquisition</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
      {% if bot.botType == 'Support' %}
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
          <td class="overview">{{bot.botOpinion}}</td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>




<div markdown="1" class=" ghcms ghcms-more">

</div>



<span id="ai"></span>

<div markdown="1" class=" ghcms ghcms-ai">
## AI

**Getting your bot to AI5 (the highest rank) will make much more powerful. AI trees (sometimes called AI tracks) are very important to maximizing your bots' potential. For some bots and combos ([Chainer](</chainer>)) AI5 is an absolute game-changer!**

### Reset

- It costs 100 gold per bot AI level.
- You can only reset them all at once.


### EXP Costs

| AI Level     | Level 1      | Level 2      | Level 3      | Level 4      | Level 5      |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Exp Required | 500          | 2000         | 5000         | 14000        | 30000        |

<br>

### Training

First of all, it's important to note that **Recruits don't gain AI Exp**, so you must be using the bots you wish to develop yourself.<br>

- **Having the right [business perk](</business>):** \+15% (LV3 AI Research) will help a lot!
- **Regular exploring tricks:** [Exploring & Danger Zones Tips](</exploring#tips-and-tricks>).<br>



<br>

**Fight higher level enemies**

- AI Exp isn't directly proportional to the enemy's level, but you'll gain more AI Exp for facing enemies that are at a **higher level than you** (and less from under-leveled enemies). Try to look for enemies that are **at least 2 levels above your own**.
- Choose the highest level area that you can accept [Contracts](</contracts>) for as your AI training ground.<br>



<br>

**Focus on Wild Bot Packs**

- You'll get AI Exp *per bot defeated*, therefore **Wild Bot fights tend to be more efficient** than Bandit fights, since there are usually *more bots per fight* in the former. They're also usually faster to clear.
- You can reroll your [Contracts](</contracts>) until you get the “Salvage the Caravan” mission in a high-level area, that will make extra Wild Bot Packs spawn close to the Caravan in that specific location (but **do not** salvage the Caravan after clearing the Wild Bots near it). Prioritize areas that are already naturally packed with Wild Bots for max efficiency, more packs equals more AI Exp.<br>



<br>

![300px Pluggie Packs near a Caravan](<https://cdn.discordapp.com/attachments/923510071026155550/996136135560540301/unknown.png>)<br>

**Use your [Gadgets](</gadgets>)**

- Damaged enemies still give the same AI Exp as enemies at full health, so using [Bombardment](</gadgets#bombardment>) and [Mines](</gadgets#mine>) can considerably increase the efficiency of your runs.
- Using [Bombardment](</gadgets#bombardment>) 3 times will leave normal enemies at death's door (especially effective if used near the Caravan of the “Salvage the Caravan” [Contract](</contract>)).


<br>

**Aim for clean and fast clears**

- You're looking for efficiency, so go for fast clearing combos like [Grouper Comps](</comps>).
- Using [Chainer](</chainer>) \+ [Splashers](</bots#splashers>) against enemies damaged with [Gadgets](</gadgets>) will result in an almost instant win.
- Engaging in [Multi-fights](</exploring#multiple-enemies>) will save time by lowering the amount of loading screens you'll see.


<br>

[Farming AI Exp using Bombardment 320p (1,18MB)](<https://cdn.discordapp.com/attachments/923510071026155550/997654844804452432/AI_Farming_EPT_320p.mp4>)<br>

[Farming AI Exp using 3x Bombardment + Chainer 640p (4,56MB)](<https://cdn.discordapp.com/attachments/923510071026155550/997654845295173693/AI_Farming_EPT_640p.mp4>)<br>

<br>

**Avoid wasting AI Exp**

- Bots that are already at AI5 still share Exp gained from battles, meaning that the AI Exp they gain after a fight simply goes to waste.
- Avoid using more than 3 bots per fight, since all bots placed will share AI Exp, resulting in less individual Exp for the bot you're trying to develop.<br>



<br>

**Credit \| cloud9, Echio, TsengFayt**

</div>
