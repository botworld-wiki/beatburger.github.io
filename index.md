---

layout: default
permalink: /
title: Botworld Community Wiki
description: All the best the Botworld Adventure community has to offer to help you progress through this awesome game ! Robopedia, Guides, Maps, and more...

---

<img src="https://cdn.discordapp.com/attachments/918419557792776202/920439171171094588/welcome.png" style="width:100%" />


<div id="site_toc">

    <div class="toc-block" id="home_Tanks">
        <a class="toc-block-title" href="/bots#tanks" title="All the Tanks bots in our Robopedia"><img src="/assets/img/logos/tanks.png" title="Tank bots logo"><h2 id="Tanks">Tanks</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Tank' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Brawlers">
        <a class="toc-block-title" href="/bots#brawlers" title="All the Brawlers bots in our Robopedia"><img src="/assets/img/logos/brawlers.png" title="Brawler bots logo"><h2 id="Brawlers">Brawlers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Brawler' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Chasers">
        <a class="toc-block-title" href="/bots#chasers" title="All the Chasers bots in our Robopedia"><img src="/assets/img/logos/chasers.png" title="Chaser bots logo"><h2 id="Chasers">Chasers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Chaser' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Splashers">
        <a class="toc-block-title" href="/bots#splashers" title="All the Splashers bots in our Robopedia"><img src="/assets/img/logos/splashers.png" title="Splasher bots logo"><h2 id="Splashers">Splashers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Splasher' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Snipers">
        <a class="toc-block-title" href="/bots#snipers" title="All the Snipers bots in our Robopedia"><img src="/assets/img/logos/snipers.png" title="Sniper bots logo"><h2 id="Snipers">Snipers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Sniper' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Evaders">
        <a class="toc-block-title" href="/bots#evaders" title="All the Evaders bots in our Robopedia"><img src="/assets/img/logos/evaders.png" title="Evader bots logo"><h2 id="Evaders">Evaders</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Evader' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Supports">
        <a class="toc-block-title" href="/bots#supports" title="All the Supports bots in our Robopedia"><img src="/assets/img/logos/supports.png" title="Support bots logo"><h2 id="Supports">Supports</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Support' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Botmaster">
        <a class="toc-block-title" href="#botmasters" title="Everything about becoming a great Botmaster">
            <img src="/assets/img/logos/botpack.png" alt="Botmaster articles logo">
            <h2 id="Botmasters">Botmasters</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="/bots">
                <span>Bots</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/botpack">
                <span>Botpack</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/abilities">
                <span>Abilities</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/boosters">
                <span>Boosters</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Recruits</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/#botmasters">
                <span>More...</span></a>
            </li>
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Botworld">
        <a class="toc-block-title" href="#botworld" title="Everything about the Botworld universe">
            <img src="/assets/img/logos/boat.png" alt="Botworld articles logo">
            <h2 id="Botworld">Botworld</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Exploration & DZ Tips</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/maps">
                <span>Maps</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Business Boat upgrades</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/arena-masters">
                <span>Arena Masters</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Boat Materials</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/#botworld">
                <span>More...</span></a>
            </li>
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Guide">
        <a class="toc-block-title" href="#guides" title="Every guide we have here">
            <img src="/assets/img/logos/list.png" alt="Guides articles logo">
            <h2 id="Guides">Guides</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="/getting-started">
                <span>Getting Started</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Grouper Comp</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Farming Guide &amp; Routes</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Arena Crown</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/#guides">
                <span>More...</span></a>
            </li>
        </ul>
    </div>
</div>


<div markdown="1" class=" ghcms ghcms-main">

## New player ?


Let's make one thing clear: **this game won’t punish you for any choice you make**. Even when mutually exclusive options are presented, you will get other occasions to try and pick the ones you haven’t yet, or get the same rewards by other means.

Check out [Starter Bots](</starter-bots>) if you want, for example, but rest assured **you’ll get all 3 of them** eventually !

Botworld is well worth exploring at your own pace, and won’t punish you for trying stuff or fooling around, so really you can stop reading and go straight in !

Alternatively, have a look at [all the new bots you’ll encounter soon](/bots) or go and read [Getting Started](/guides/getting-started). 

</div>
<span class="menu-link-target" id="all"></span>


<div class="grid">
    
<div markdown="1" class="grid-box ghcms ghcms-botmasters">

## Botmasters

- [Bots](/bots): bots detailed list & types/roles presentation
    - [Starter Bots](/starter-bots)
- [Botpack](/botpack): botpack presentation (& concise module lists for easy access from the menu) 
    - [Abilities]/abilities): abilities detailed list
    - [Boosters](/boosters): booster detailed list
    - [Gadgets](/gadgets): gadget list
- [Recruits](/contribute#tbw): why you need to show them some love in general
    - [Jobs](/contribute#tbw): advice, mechanics, listing
- ...

</div>



<div markdown="1" class="grid-box tall ghcms ghcms-botworld">

## Botworld

- [Exploration & Danger Zones](/contribute#tbw): Tips, Critters, Mega, Bosses, Random Encounters, reset trick...
    - [Maps](/maps): full pics, annotations, unlocks
    - [Boat Materials](/contribute#tbw):
    - [Upgrade materials](/contribute#tbw): 
    - [Contracts](/contribute#tbw):
    - [Exterminator squads](/contribute#tbw):
- [Scavenger Landing](/contribute#tbw): shop, hair draisser, aunty... mentions arena etc
    - [Business Boat upgrades](/contribute#tbw): boat pictures & unlocks per level...
    - [Arena](/arena):
    - [Arena Masters](/arena-masters): List, descriptions, rewards, tips
    - [Seasons](/seasons): Starter Season vs Global Season, most notable rewards etc.
    - [Notable characters](/contribute#tbw): the cool npcs
- [Mechanics](/contribute#tbw): lvl scaling, IA, recruits simulations...
    - [Loot](/loot): botframes, materials, loot piles, zoning, drop rates...
- ...

</div>

<div markdown="1" class="grid-box ghcms ghcms-guides">

## Guides

- [Getting Started](/guides/getting-started): 
- [Grouper Comp](/contribute#tbw):
- [Farming Guide &amp; Routes](/contribute#tbw):
- [Arena Crown](/contribute#tbw):
- ...

</div>
    
<div markdown="1" class="grid-box ghcms ghcms-wiki">

## Wiki

- [Contribute](/contribute)): **We need help**, there's so much still to write about !
- [Changelog](/changelog): What's new on the wiki ?
- [Credits](/credits): A big thank you to everyone!
- [Roadmap](/roadmap): What's planned? Ideas for later go there.

</div>

</div>
