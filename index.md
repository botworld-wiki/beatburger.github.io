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
</div>



## Botworld Adventures News


<div markdown="1" class="grid-box tall ghcms ghcms-homenews">

- [Sheller](/sheller): complete with stats and everything!
- [Ptage talks about us!](https://www.youtube.com/watch?v=jqeymvKmIs8): 

<iframe width="560" height="315" src="https://www.youtube.com/embed/jqeymvKmIs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [Youtubers & Streamers](/content-creators): we're excited to have them in the wiki now!
- [New Version 1.2.0](/news): [Codex Outfits & Missions], a new ability **Gravity Surge**, and [Balance Changes](/news)


</div>


## New player ?


<div markdown="1" class="grid-box tall ghcms ghcms-newplayer">

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

<div markdown="1" class="grid-box ghcms ghcms-botworld">

## Botworld

- [Exploring](/exploring): Infos and Tips about Canisters, Mobs, Critters, Mega, Bosses, Random Encounters, Level Scaling...
    - [Maps](/maps): Full Pictures, Wild Bots, Locations of Interest...  
    - [Danger Zones](/danger-zones): Tips, Random Encounters, Exterminator Squads...
    - [Farming](/farming): the most efficient ways to get lots of anything.
    - [Bots Materials](/materials): full list.
    - [Story & Boat Materials](/boat-materials): list & maps.
    - [Codex](/codex): the new Codex missions & outfits.
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
- [YouTubers & Streamers](/content-creators): Check these out! 
- [Play on Windows](/play-on-windows): How-to guide to link your phone & PC
- [How to Contribute](/contribute): It's easy, really. **Simply sending us missing infos already helps a lot!** and even becoming an Editor requires zero coding experience.
- [Credits](/credits): A big **Thank You** to everyone!
- [Wiki Changelog](/changelog): What's new on the wiki ?
- [Discord Bot](/help): Coggy bot integration with the [Official BWA Discord](https://discord.gg/FsJzvtFrgq) - documentation and "help" command.

</div>

</div>
