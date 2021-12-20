---

layout: default
permalink: /
title: Botworld Community Wiki
description: All the best the Botworld Adventure Community has to offer to help you progress through this awesome game ! Robopedia, Guides, Maps, and more...

---

<picture>
  <source type="image/webp" srcset="/assets/img/banners/welcome.webp" style="width:100%">
  <source type="image/jpeg" srcset="/assets/img/banners/welcome.png" style="width:100%">
  <img src="/assets/img/banners/welcome.png" alt="Welcome to the Wiki banner" style="width:100%">
</picture>

<div id="site_toc">

    <div class="toc-block" id="home_Tanks">
        <a class="toc-block-title" href="/bots#tanks" title="All the Tanks bots in our Robopedia"><img src="/assets/img/icons/tanks.png" alt="Tank bots logo" title="Tank bots logo"><h2 id="Tanks">Tanks</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Tank' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Brawlers">
        <a class="toc-block-title" href="/bots#brawlers" title="All the Brawlers bots in our Robopedia"><img src="/assets/img/icons/brawlers.png" alt="Brawler bots logo" title="Brawler bots logo"><h2 id="Brawlers">Brawlers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Brawler' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Chasers">
        <a class="toc-block-title" href="/bots#chasers" title="All the Chasers bots in our Robopedia"><img src="/assets/img/icons/chasers.png" alt="Chaser bots logo" title="Chaser bots logo"><h2 id="Chasers">Chasers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Chaser' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Splashers">
        <a class="toc-block-title" href="/bots#splashers" title="All the Splashers bots in our Robopedia"><img src="/assets/img/icons/splashers.png" alt="Splasher bots logo" title="Splasher bots logo"><h2 id="Splashers">Splashers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Splasher' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Snipers">
        <a class="toc-block-title" href="/bots#snipers" title="All the Snipers bots in our Robopedia"><img src="/assets/img/icons/snipers.png" alt="Sniper bots logo" title="Sniper bots logo"><h2 id="Snipers">Snipers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Sniper' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Evaders">
        <a class="toc-block-title" href="/bots#evaders" title="All the Evaders bots in our Robopedia"><img src="/assets/img/icons/evaders.png" alt="Evader bots logo" title="Evader bots logo"><h2 id="Evaders">Evaders</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Evader' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Supports">
        <a class="toc-block-title" href="/bots#supports" title="All the Supports bots in our Robopedia"><img src="/assets/img/icons/supports.png" alt="Support bots logo" title="Support bots logo"><h2 id="Supports">Supports</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Support' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Botmaster">
        <a class="toc-block-title" href="#botmasters" title="Everything about becoming a great Botmaster">
            <img src="/assets/img/icons/botpack.png" alt="Botmaster articles logo">
            <h2 id="Botmasters">Botmasters</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="/bots">
                <span>Robopedia</span></a>
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
            <img src="/assets/img/icons/boat.png" alt="Botworld articles logo">
            <h2 id="Botworld">Botworld</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="/contribute#tbw">
                <span>Explo & Danger Zones Tips</span></a>
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
                <a href="/materials">
                <span>Bots & Boat Materials</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/#botworld">
                <span>More...</span></a>
            </li>
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Guide">
        <a class="toc-block-title" href="#guides" title="Every guide we have here">
            <img src="/assets/img/icons/list.png" alt="Guides articles logo">
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



<div markdown="1" class=" ghcms ghcms-news">

## Botworld Adventures News

- **Community Wiki Launch**: We’re excited to have you check it out!
- **New Bot Coming soon**: there's also a gems giveaway on the official socials.

</div>

[News & Updates Archive](/news)

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
    - [Abilities](/abilities): abilities detailed list
    - [Boosters](/boosters): booster detailed list
    - [Gadgets](/botpack#gadgets): gadgets list
- [Recruits](/contribute#tbw): why you need to show them some love in general
    - [Jobs](/contribute#tbw): advice, mechanics, listing
- ...

</div>



<div markdown="1" class="grid-box tall ghcms ghcms-botworld">

## Botworld

- [Exploration & Danger Zones](/contribute#tbw): Tips, Critters, Mega, Bosses, Random Encounters, reset trick...
    - [Maps](/maps): full pics, annotations, unlocks
    - [Materials](/materials): [Bots](/materials#bots) & [Boat](/materials#boat)
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
- [Botworld Adventure News](/news): New bots, updates, anything that's happening.
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

## Community Wiki

- [Contribute](/contribute): **We need help**, there's so much still to write about !
- [Changelog](/changelog): What's new on the wiki ?
- [Credits](/credits): A big thank you to everyone!
- [Roadmap](/roadmap): What's planned? Ideas for later go there.

</div>

</div>
