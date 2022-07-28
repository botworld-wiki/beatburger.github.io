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
  <li class="toc-block-entry" ><a href="#ai" title="Everything about AI trees & xp">AI Training</a></li>
</ul>


<div markdown="1" class=" ghcms ghcms-main">

</div>


- **Strategy Guide:** See [Comps & Combos](/comps)
- **Bots Upgrades:** See [Crafting Table](/materials#crafting) and [Upgrade Costs](/materials#costs), on the [Materials](/materials) page. 

## Tanks


<div markdown="1" class=" ghcms ghcms-tanks">

Tanks soak up damage and protect weaker bots --- Best placed up front

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

Splashers damage multiple bots that are close together --- best placed at the back

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

Snipers do a lot of damage from a distance — protect these bots as much as possible
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

Chasers are fast melee bots that are good at getting close to ranged enemies --- Let this bot get close to ranged damage dealers

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

Evaders are fast bots that are good at staying away from melee enemies --- distract chasers with these bots!

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

Brawlers are good at fighting other melee bots --- 1v1 is their specialty

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

Supports make your other bots more effective --- best placed beside tanks

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

Getting your bot to AI5 will make it so much better, AI trees are very powerful. For some bots and some combos ([Chainer](</chainer>)!) AI5 is an absolute game-changer

### Reset

- It costs 100 gold per bot AI level.
- You can only reset them all at once.


### XP Costs

| AI level | 1        | 2        | 3        | 4        | 5        |
| -------- | -------- | -------- | -------- | -------- | -------- |
| xp req   | 500      | 2000     | 5000     | 14000    | 30000    |

### Training

First of all, it's important to note that **Recruits don't get AI Exp**, so you must be using the Bots you wish to develop yourself<br>

- **Have the right [business perk](</business>):** \+15% (Lv3 AI Research) will help a lot!
- **Regular exploring tricks:** check out [Exploring & Danger Zones Tips](</exploring#tips-and-tricks>)<br>

<br>

**Fight Higher level enemies**
- AI Exp isn't directly proportional to the enemy's level itself, but you'll gain more AI Exp for facing enemies that are **higher level than you** (and less from underleved enemies). So try to go for enemies that are **at least 2 levels above your own**
- Choose the highest level area that you still get [Contracts](</contracts>) for as your AI training ground<br>

<br>

**Focus on Wild Bot Packs**
- You'll get AI Exp *per bot defeated*, therefore **Wild Bot fights tend to be more efficient** than Bandit fights, since there are usually *more bots per fight* in the former. They're also usually faster to clear
- You can reroll your [Contracts](</contracts>) until you get the "Salvage the Caravan" mission in a high level area, that will make extra Wild Bot Packs spawn close to the Caravan in that specific location (but **do not** salvage the Caravan after clearing the Wild Bots near it). Prioritize areas that are already naturally packed with Wild Bots for max efficiency, more packs equals more Exp<br>

![300px Pluggie Packs near a Caravan](<https://cdn.discordapp.com/attachments/923510071026155550/996136135560540301/unknown.png>)
- *Multiple [Pluggie](</pluggie>) packs near a Caravan in Disused Quarry, [Parched Sea](</maps#parched-sea>), while I was at Botpack Lv22*<br>

<br>

**Use your [Gadgets](</gadgets>)**
- Damaged enemies still give the same AI Exp they'd give if they were at full health, so using [Bombardment](</gadgets#bombardment>) and [Mines](</gadgets#mine>) can **considerably speed up your grinding**
- Using [Bombardment](</gadgets#bombardment>) 3 times will leave normal enemies at death's door (it's specially effective if used near the Caravan of the "Salvage the Caravan" [Contract](</contract>))<br>

<br>

**Aim for clean and fast clears**
- You're looking for efficiency, so go for fast clearing combos like [Grouper Comp](</comps>) ones
- Using [Chainer](</chainer>) \+ AoE against an enemy on death's door will result in an almost instant win
- Doing [Multi-fights](</exploring#multiple-enemies>) will save some time by lowering the amount of loading screens you'll see<br>

[video Farming AI Exp using Bombardment 320p (1,18MB)](<https://cdn.discordapp.com/attachments/923510071026155550/997654844804452432/AI_Farming_EPT_320p.mp4>)
- *Getting enemies to death's door with 3x [Bombardment](</gadgets#bombardment>) near a Caravan and fast clearing them with [Chainer](</chainer>) \+ [EPT](</explosive-proximity-translocator>) to level [Hornet](</hornet>) up in Entranceway, [Spore Woods](</maps#spore-woods>), at Botpack lv 24 (Boosters used: 2x [Ult Charge](</ult-charge-special>), 1x [Epic Power Generation](</power-generation-Epic>), 1x [Epic Power Start](</power-start-epic>))*<br>

[Farming AI Exp using 3x Bombardment + Chainer 640p (4,56MB)](<https://cdn.discordapp.com/attachments/923510071026155550/997654845295173693/AI_Farming_EPT_640p.mp4>)<br>

<br>

**Avoid wasting AI Exp**
- Bots that are already at AI Lv5 still share Exp, meaning that the Ai Exp they get after a fight simply goes to waste
- Avoid using more than 3 bots per fight, since all bots placed will share AI Exp, resulting in less individual Exp for the bot you're trying to develop<br>

<br>

*Credit: cloud9, Echio*

</div>
