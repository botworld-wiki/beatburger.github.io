---

layout: default
permalink: /
title: Botworld Community Wiki
description: All the best the Botworld Adventure community has to offer to help you progress through this awesome game ! Robopedia, Guides, Maps, and more...

---

<img src="https://cdn.discordapp.com/attachments/918419557792776202/920439171171094588/welcome.png" style="width:100%" />


<div id="site_toc">

    <div class="toc-block" id="home_Tanks">
        <a class="toc-block-title" href="/bots#tanks" title="All the Tanks bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Tank bots logo"><h2 id="Tanks">Tanks</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Tank' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Brawlers">
        <a class="toc-block-title" href="/bots#brawlers" title="All the Brawlers bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Brawler bots logo"><h2 id="Brawlers">Brawlers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Brawler' %}
                    <li class="toc-block-entry">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Chasers">
        <a class="toc-block-title" href="/bots#chasers" title="All the Chasers bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Chaser bots logo"><h2 id="Chasers">Chasers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Chaser' %}
                    <li class="toc-block-entry">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Splashers">
        <a class="toc-block-title" href="/bots#splashers" title="All the Splashers bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Splasher bots logo"><h2 id="Splashers">Splashers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Splasher' %}
                    <li class="toc-block-entry">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Snipers">
        <a class="toc-block-title" href="/bots#snipers" title="All the Snipers bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Sniper bots logo"><h2 id="Snipers">Snipers</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Sniper' %}
                    <li class="toc-block-entry">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Evaders">
        <a class="toc-block-title" href="/bots#evaders" title="All the Evaders bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Evader bots logo"><h2 id="Evaders">Evaders</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Evader' %}
                    <li class="toc-block-entry">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Supports">
        <a class="toc-block-title" href="/bots#supports" title="All the Supports bots in our Robopedia"><img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" title="Support bots logo"><h2 id="Supports">Supports</h2></a>
        <ul class="toc-block-list">
            {% for bot in site.bots %}
                {% if bot.botType == 'Support' %}
                    <li class="toc-block-entry">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img src="{{ bot.imageUrl }}" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                    <li><a href="" ></a></li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Botmaster">
        <a class="toc-block-title" href="#botmaster" title="Everything about becoming a great Botmaster">
            <img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" alt="Botmaster articles logo">
            <h2 id="Botmasters">Botmasters</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/bots">
                <span>Bots</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/botpack">
                <span>Botpack</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/abilities">
                <span>Abilities</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/boosters">
                <span>Boosters</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/recruits">
                <span>Recruits</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/#botmaster">
                <span>More...</span></a>
            </li>
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Botworld">
        <a class="toc-block-title" href="#botworld" title="Everything about the Botworld universe">
            <img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" alt="Botworld articles logo">
            <h2 id="Botworld">Botworld</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/danger-zones">
                <span>Exploration & DZ Tips</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/maps">
                <span>Maps</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/business">
                <span>Business Boat upgrades</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/arena-masters">
                <span>Arena Masters</span></a>
            </li>
            <li class="toc-block-entry">
                <a>
                <span>Boat Materials</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/#botworld">
                <span>More...</span></a>
            </li>
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Guide">
        <a class="toc-block-title" href="#guides" title="Every guide we have here">
            <img src="https://cdn.discordapp.com/attachments/918419557792776202/920689577503653908/type.png" alt="Guides articles logo">
            <h2 id="Guides">Guides</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/getting-started">
                <span>Getting Started</span></a>
            </li>
            <li class="toc-block-entry">
                <a>
                <span>Grouper Comp</span></a>
            </li>
            <li class="toc-block-entry">
                <a>
                <span>Farming Guide &amp; Routes</span></a>
            </li>
            <li class="toc-block-entry">
                <a>
                <span>Arena Crown</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="https://www.botworld.wiki/#guides">
                <span>More...</span></a>
            </li>
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

## Tips & Guides

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

- Exploration & DZ Tips: Critters, Mega, bosses, DZs tips...
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
