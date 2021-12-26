---

layout: default
permalink: /
title: Botworld Adventure Wiki, by the community
description: Everything about every Bot, Ability, Map,.. anything in Botworld ! All the best Tips, Guides, and Resources the Botworld Adventure community could gather.

---

<p><picture>
  <source type="image/webp" srcset="/assets/img/banners/welcome.webp" style="width:100%">
  <source type="image/jpeg" srcset="/assets/img/banners/welcome.png" style="width:100%">
  <img loading="lazy" src="/assets/img/banners/welcome.png" alt="Welcome to the Wiki banner" style="width:100%">
</picture></p>

<div id="site_toc">
    {% assign bots_by_rarity = site.bots | sort: "botRaritySortOrder" %}
    <div class="toc-block" id="home_Tanks">
        <a class="toc-block-title" href="/bots#tanks" title="All the Tanks bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/tanks.png" alt="Tank bots logo" title="Tank bots logo"><h2 id="Tanks">Tanks</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Tank' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Brawlers">
        <a class="toc-block-title" href="/bots#brawlers" title="All the Brawlers bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/brawlers.png" alt="Brawler bots logo" title="Brawler bots logo"><h2 id="Brawlers">Brawlers</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Brawler' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Chasers">
        <a class="toc-block-title" href="/bots#chasers" title="All the Chasers bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/chasers.png" alt="Chaser bots logo" title="Chaser bots logo"><h2 id="Chasers">Chasers</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Chaser' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Splashers">
        <a class="toc-block-title" href="/bots#splashers" title="All the Splashers bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/splashers.png" alt="Splasher bots logo" title="Splasher bots logo"><h2 id="Splashers">Splashers</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Splasher' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Snipers">
        <a class="toc-block-title" href="/bots#snipers" title="All the Snipers bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/snipers.png" alt="Sniper bots logo" title="Sniper bots logo"><h2 id="Snipers">Snipers</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Sniper' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Evaders">
        <a class="toc-block-title" href="/bots#evaders" title="All the Evaders bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/evaders.png" alt="Evader bots logo" title="Evader bots logo"><h2 id="Evaders">Evaders</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Evader' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block" id="home_Supports">
        <a class="toc-block-title" href="/bots#supports" title="All the Supports bots in our Robopedia"><img loading="lazy"  src="/assets/img/icons/supports.png" alt="Support bots logo" title="Support bots logo"><h2 id="Supports">Supports</h2></a>
        <ul class="toc-block-list">
            {% for bot in bots_by_rarity %}
                {% if bot.botType == 'Support' %}
                    <li class="toc-block-entry rarity_{{bot.botRarity}}">
                        <a href="{{ site.baseurl }}{{ bot.url }}" title="Page about the bot {{ bot.botName }}">
                            <img loading="lazy"  src="/assets/img/bots/small/{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}">
                            <span>{{ bot.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div class="toc-block toc-block-big" id="home_Botmaster">
        <a class="toc-block-title" href="#botmasters" title="Everything about becoming a great Botmaster">
            <img loading="lazy"  src="/assets/img/icons/botpack.png" alt="Botmaster articles logo">
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
                <a href="/recruits">
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
            <img loading="lazy"  src="/assets/img/icons/boat.png" alt="Botworld articles logo">
            <h2 id="Botworld">Botworld</h2>
        </a>
        <ul class="toc-block-list">
            <li class="toc-block-entry">
                <a href="/exploring">
                <span>Exploring & Danger Zones</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/maps">
                <span>Maps</span></a>
            </li>
            <li class="toc-block-entry">
                <a href="/boat">
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
            <img loading="lazy"  src="/assets/img/icons/list.png" alt="Guides articles logo">
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

- [New Bot Reveal](/news): [Sheller](/sheller) ![New Bot Sheller](/assets/img/bots/small/sheller.png)

- [Community Wiki Launch](/news): We, *Beat Burger & Friends*, are most excited to present to you the brand new and shiny: **Botworld Adventure community Wiki**

It's been a project running strong for the last 10 days or so, and today we believe it is ready enough to present it to you!
It is *ready*, but **far from complete**! Many (most?) of the pages are shadows of what we want them to be, created as placeholder so we can fill them up together over the weeks to come.

We have some very nice and rich ones already though!

We very much hope you like it, where it can go, and hopefully send us some stuff that you noticed is still missing and you have the info.

</div>

<div markdown="1" class=" ghcms ghcms-main">

## New player ?


Let's make one thing clear: **this game won’t punish you for any choice you make**. Even when mutually exclusive options are presented, you will get other occasions to try and pick the ones you haven’t yet, or get the same rewards by other means.

Check out [Starter Bots](</starter-bots>) if you want, for example, but rest assured **you’ll get all 3 of them** eventually !

Botworld is well worth exploring at your own pace, and won’t punish you for trying stuff or fooling around, so really you can stop reading and go straight in !

Alternatively, have a look at [all the new bots you’ll encounter soon](/bots) or go and read [Getting Started](/guides/getting-started). 

</div>
<span class="menu-link-target" id="all"></span>
<span class="menu-link-target" id="wiki"></span>


<div class="grid">
    
<div markdown="1" class="grid-box ghcms ghcms-botmasters">

## Botmasters

- [Bots](/bots): our Robopedia has everything already.
    - [Starter Bots](/starter-bots)
- [Botpack](/botpack): infos about Power, Level, Fusing, and compact Modules lists.
    - [Abilities](/abilities): full list.
    - [Boosters](/boosters): full list.
    - [Gadgets](/botpack#gadgets): full list.
- [Comps & Combos](/comps): general Composition tips, Grouper Comp, and cool Combos.
- [Recruits](/recruits): how their fights work, usage & comp tips.
    - [Jobs](/jobs): mechanics, list, & tips.
- [Business Upgrades](/business): list, selection tips, and level unlocks.
- [Getting Started](/getting-started): introductory guide to get you started on the right foot.

</div>



<div markdown="1" class="grid-box tall ghcms ghcms-botworld">

## Botworld

- [Exploring](/exploring): Infos and Tips about Canisters, Mobs, Critters, Mega, Bosses, Random Encounters, Level Scaling...
    - [Maps](/maps): Full Pictures, Wild Bots, Locations of Interest...  
    - [Danger Zones](/danger-zones): Tips, Random Encounters, Exterminator Squads...
    - [Farming](/farming): the most efficient ways to get lots of anything.
    - [Bots Materials](/materials): full list.
    - [Story & Boat Materials](/boat-materials): list & maps.
    - [Loot](/loot): Chests, Scrap Piles, Botframes, Ancient Ruins, High Grounds, Drop Rates...
- [Arena](/arena): Solo Arena, Squad Cup, Arena Masters descriptions & Tips
- [Seasons](/seasons): Starter Season vs Global Season, Rewards.
    - [Contracts](/contracts): list.
- [Story](/story): Quests, Characters (NPCs), Lore 

</div>


<span class="menu-link-target" id="community"></span>
<span class="menu-link-target" id="community-wiki"></span>
    
<div markdown="1" class="grid-box ghcms ghcms-community">

## Community Adventure

- [BWA News & Updates](/news): New Bots, Game Updates, anything that's happening.
- [Play on Windows](/play-on-windows): How-to guide to link your phone & PC
- [How to Contribute](/contribute): It's easy, really. **Simply sending us missing infos already helps a lot!** and even becoming an Editor requires zero coding experience.
- [Credits](/credits): A big **Thank You** to everyone!
- [Changelog](/changelog): What's new on the wiki ?
- [Discord Bot](/help): Coggy bot integration with the [Official BWA Discord](https://discord.gg/FsJzvtFrgq) - documentation and "help" command.

</div>

</div>
