---

layout: breadcrumbs
permalink: /botpack
title: Botpack & Modules
description: Your Botpack, how it works, every Ability, Booster, and Gadget... The best place to learn everything there is to know about what really makes you a True Botmaster!
breadcrumbs:
    Botmasters: "/#botmasters"
---

# Botpack

<div markdown="1" class=" ghcms ghcms-intro">

Mom gave you a Botpack, now you're a real Botmaster! With it you can control your [bots](/bots), cast powerful abilities, equip useful boosters and use fun gadgets.

Unlock all your module slots by defeating the [Arena Masters](https://www.botworld.wiki/arena-masters)

</div>

<div class="botpack">
    <ul class="toc-block-list links">
        <li class="toc-block-entry"><a href="https://www.botworld.wiki/botpack#boosters">Boosters</a></li>
        <li class="toc-block-entry"><a href="https://www.botworld.wiki/botpack#abilities">Abilities</a></li>
        <li class="toc-block-entry"><a href="https://www.botworld.wiki/botpack#gadgets">Gadgets</a></li>
     </ul>
</div>

<img loading="lazy"   src="/assets/img/banners/botpack-pix.png" alt="Botpack Modules by Pix" title="Botpack Modules by Pix" style="width: 100%">



## Abilities

<div markdown="1" class=" ghcms ghcms-abilities">

How well you use your Abilities will make or break difficult fights. Try and have a tool for most tricky situations you can get yourself into!

- **Power generation rate**:  [missing data](/contribute#tbw)
- **Damaging abilities scale** with your botpack level: [missing data](/contribute#tbw)

Find a detailled table with [all the info about every Ability](/abilities)

</div>

<div class="botpack">
        <ul class="toc-block-list">
            {% assign abilities_by_rarity = site.abilities | sort: "abilityRaritySortOrder" %}
    		{% for ability in abilities_by_rarity %}
                <li class="toc-block-entry rarity_{{ability.abilityRarity}}">
                    <a href="{{ site.baseurl }}{{ ability.url }}" title="Page about the ability {{ ability.abilityName }}">
                        <img loading="lazy"   src="{{ ability.abilityImageUrl }}" alt="Picture of {{ ability.abilityName }}">
                        <span>{{ ability.abilityName }}</span>
                    </a>
                </li>
            {% endfor %}
        </ul>

</div>




## Boosters


<div markdown="1" class=" ghcms ghcms-boosters">

Having the right Boosters will round up your playstyle and your comp.

-**Stacking**: multiplicative != additive [To Be Written](/contribute#tbw)

Find a detailled table with [all the info about every Booster](/boosters)


</div>

<div class="botpack">
        <ul class="toc-block-list">
            {% assign boosters_by_rarity = site.boosters | sort: "boosterRaritySortOrder" %}
    		{% for booster in boosters_by_rarity %}
                <li class="toc-block-entry rarity_{{booster.boosterRarity}}">
                    <a href="{{ site.baseurl }}{{ booster.url }}" title="Page about the booster {{ booster.boosterName }}">
                        <img loading="lazy"   src="{{ booster.boosterImageUrl }}" alt="Picture of {{ booster.boosterName }}">
                        <span>{{ booster.boosterName }}</span>
                    </a>
                </li>
            {% endfor %}
        </ul>

</div>

## Gadgets


<div markdown="1" class=" ghcms ghcms-gadgets">

[Upgrades & unlocks](/contribute#tbw)

### Damage Amplifier 

![Image](/assets/img/gadgets/amplifier.png)

-**Level 1:** +25%, 2 uses
-**Level 2:** +30%, 3 uses

### Botpack Overclocker 

![Image](/assets/img/gadgets/overclocker.png)

-**Level 1:** +35%, 3 uses
-**Level 2:** +50%, 4 uses


### Bombardment 

![Image](/assets/img/gadgets/bombardment.png)

-**Level 1:** range 10, 2 uses
-**Level 2:** range 14, 2 uses
-**Level 3:** range 14, 3 uses

### Speed Amplifier

![Image](/assets/img/gadgets/speed-upg.png)

-**Level 1:** +30%, 3 uses
-**Level 2:** +50%, 3 uses


### Invisibility 

![Image](/assets/img/gadgets/invisibility.png)

### Shockwave Generator 

![Image](/assets/img/gadgets/shockwave.png)

### Mine 

![Image](/assets/img/gadgets/mines.png)

-**Level 1:** ? uses
-**Level 2:** 5 uses

### Ability Jammer 

![Image](/assets/img/gadgets/jammer.png)

</div>

