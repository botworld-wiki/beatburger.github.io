---

layout: default
permalink: /
title: Botworld Community Wiki
description: All the best the Botworld Adventure community has to offer to help you progress through this awesome game ! Robopedia, Guides, Maps, and more...

---

# Botworld Community Wiki

<img src="https://cdn.discordapp.com/attachments/918419557792776202/920343108758171718/cursed-welcome.png" style="width:100%" />

<div id="site_toc">
    <div class="home_botType_list" id="home_Tanks">
        <h2 id="Tanks"><a href="/bots#tanks" title="All the Tanks bots in our Robopedia">Tanks</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Tank' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="home_botType_list" id="home_Splashers">
        <h2 id="Splashers"><a href="/bots#splashers" title="All the Splashers bots in our Robopedia">Splashers</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Splasher' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="home_botType_list" id="home_Snipers">
        <h2 id="Snipers"><a href="/bots#snipers" title="All the Snipers bots in our Robopedia">Snipers</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Sniper' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="home_botType_list" id="home_Chasers">
        <h2 id="Chasers"><a href="/bots#chasers" title="All the Chasers bots in our Robopedia">Chasers</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Chaser' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="home_botType_list" id="home_Evaders">
        <h2 id="Evaders"><a href="/bots#evaders" title="All the Evaders bots in our Robopedia">Evaders</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Evader' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="home_botType_list" id="home_Brawlers">
        <h2 id="Brawlers"><a href="/bots#brawlers" title="All the Brawlers bots in our Robopedia">Brawlers</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Brawler' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="home_botType_list" id="home_Supports">
        <h2 id="Supports"><a href="/bots#supports" title="All the Supports bots in our Robopedia">Supports</a></h2>
        <ul>
            {% for bot in site.bots %}
                {% if bot.botType == 'Support' %}
                    <li><a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">{{ bot.botName }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>

    <div class="home_guides_list" id="home_Botpack">
        <h2><a href="#botmaster">Botmasters</a></h2>
        <ul>
            <li><a href="https://www.botworld.wiki/bots">Bots</a></li>
            <li><a href="https://www.botworld.wiki/botpack">Botpack</a></li>
            <li><a href="https://www.botworld.wiki/abilities">Abilities</a></li>
            <li><a href="https://www.botworld.wiki/boosters">Boosters</a></li>
            <li>Recruits</li>
            <li><a href="#botmaster">More...</a></li>
        </ul>
    </div>
    <div class="home_guides_list" id="home_Botpack">
        <h2><a href="#botworld">Botworld</a></h2>
        <ul>
            <li>Exploration Tips</li>
            <li><a href="https://www.botworld.wiki/maps">Maps</a></li>
            <li>Business Boat upgrades</li>
            <li><a href="https://www.botworld.wiki/arena-masters">Arena Masters</a></li>
            <li>Boat Materials</li>
            <li><a href="#botworld">More...</a></li>
        </ul>
    </div>
    <div class="home_guides_list" id="home_Guides">
        <h2><a href="#guides">Guides</a></h2>
        <ul>
            <li><a href="https://www.botworld.wiki/guides/getting-started">Getting Started</a></li>
            <li>Grouper Comp</li>
            <li>Farming Guide &amp; Routes</li>
            <li>Arena Crown</li>
            <li><a href="#guides">More...</a></li>
        </ul>
    </div>
</div>

<div markdown="1" class=" ghcms ghcms-main">

## New player ?

Let’s make one thing clear: **this game won’t punish you for any choice you make**. Even when mutually exclusive options are presented, you will get other occasions to try and pick the ones you haven’t yet, or get the same rewards by other means. Check out [Starter Bots](/starter-bots) for example, but rest assured **you'll get all 3 of them** eeventually !

Botworld is well worth exploring at your own pace, and won’t punish you for trying stuff or fooling around, so really you can stop reading and go straight in !

Alternatively, have a look at [all the new bots you'll encounter soon](https://www.botworld.wiki/bots) or go and read [Getting Started](https://www.botworld.wiki/guides/getting-started).
<span class="menu-link-target" id="all"></span>
<span class="menu-link-target" id="botmaster"></span>

</div>

## Articles

### Botmasters

<div markdown="1" class=" ghcms ghcms-botmasters">

- [Bots](https://www.botworld.wiki/bots): bots detailed list & types/roles presentation
    - [Starter Bots](/starter-bots)
- [Botpack](https://www.botworld.wiki/botpack): botpack presentation (& concise module lists for easy access from the menu) 
    - [Abilities](https://www.botworld.wiki/abilities): abilities detailed list
    - [Boosters](https://www.botworld.wiki/boosters): booster detailed list
    - [Gadgets](https://www.botworld.wiki/gadgets): gadget list
- Recruits: why you need to show them some love in general
    - Jobs: advice, mechanics, listing
- ...

</div>
<span class="menu-link-target" id="universe"></span>


### Botworld

<div markdown="1" class=" ghcms ghcms-botworld">

- Exploration Tips: Critters, Mega, bosses, DZs tips...
    - [Maps](https://www.botworld.wiki/maps): full pics, annotations, unlocks
    - Boat Materials:
    - Upgrade materials: 
    - Contracts:
    - Exterminator squads:
- Scavenger Landing: shop, hair draisser, aunty... mentions arena etc
    - Business Boat upgrades: boat pictures & unlocks per level...
    - Arena:
    - [Arena Masters](https://www.botworld.wiki/arena-masters): List, descriptions, rewards, tips
    - Seasons: Starter Season vs Global Season, most notable rewards etc.
    - Notable characters: the cool npcs
- Mechanics: drops, lvl scaling, IA, recruits simulations...
- ...
<span class="menu-link-target" id="guides"></span>

</div>

### Guides

<div markdown="1" class=" ghcms ghcms-guides">

- [Getting Started](https://www.botworld.wiki/guides/getting-started): 
- Grouper Comp:
- Farming Guide &amp; Routes:
- Arena Crown:
- ...

</div>

### Project pages

- [Contribute](https://www.botworld.wiki/contribute)
- [Changelog](https://www.botworld.wiki/changelog)
- [Roadmap](https://www.botworld.wiki/roadmap)
- [WikiSheets Converter](https://www.botworld.wiki/converter)
