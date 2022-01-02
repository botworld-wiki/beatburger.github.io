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

Mom gave you a Botpack, now you're a real Botmaster! With it you can control your [bots](</bots>), cast powerful abilities, equip useful boosters and use fun gadgets.

</div>

<div class="botpack">
    <ul class="toc-block-list links">
        <li class="toc-block-entry"><a href="#boosters">Boosters</a></li>
        <li class="toc-block-entry"><a href="#abilities">Abilities</a></li>
        <li class="toc-block-entry"><a href="#gadgets">Gadgets</a></li>
     </ul>
</div>

<img loading="lazy"   src="/assets/img/banners/botpack-pix.png" alt="Botpack Modules by Pix" title="Botpack Modules by Pix" style="width: 100%">


- **Unlocking more slots:** [Arena Masters](/arena#arena-masters). 
- **Getting better Modules:** [Fusing with Auntie](#fusing)
- **Level scaling:** [Botpack Level](#botpack-level) & [Mobs Level Scaling](/exploring#level-scaling)


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

## Fusing

Kindly ask your dear [Auntie](/contribute#tbw) 

- You can only fuse **3 of the exact same module**. Eg: 3 [Shields](/shield)
- Fusing will get you a module of the **same type** of the **rarity one higher**
- Fusing is **always random**

**Tip:** don't be too eager to fuse anything you might want to use later!


## Botpack Level

- The value you see on your botpack in the top-left corner
- Impacts your damage abilities & [mobs level scaling](/exploring#level-scaling)
- Is equal to the **average of the 6 highest level bots *you own***. Even if you're not using them. Rounded up.

## Gadgets


<div markdown="1" class=" ghcms ghcms-gadgets">

### Usage

- **Activation:** From your botpack (bottom right while in the wild) or at the start of a fight (turn off auto battle)
- **Require:** that you pay to unlock them, and equip them
- **Refresh:** every time you leave town


### Hack

She builds your them all for you! She bills you of course, but she's very helpful and just about the only friendly Rat out there so really, you should just consider yourself lucky.

### Damage Amplifier

![Image](</assets/img/gadgets/amplifier.png>)

- **Level 1:** \+25%, 2 uses
- **Level 2:** \+30%, 3 uses


### Botpack Overclocker

![Image](</assets/img/gadgets/overclocker.png>)

- **Level 1:** \+35%, 3 uses
- **Level 2:** \+50%, 4 uses


### Bombardment

![Image](</assets/img/gadgets/bombardment.png>)

- **Level 1:** range 10, 2 uses
- **Level 2:** range 14, 2 uses
- **Level 3:** range 14, 3 uses


### Speed Amplifier

![Image](</assets/img/gadgets/speed-upg.png>)

- **Level 1:** \+30%, 3 uses
- **Level 2:** \+50%, 3 uses


### Invisibility

![Image](</assets/img/gadgets/invisibility.png>)

### Shockwave Generator

![Image](</assets/img/gadgets/shockwave.png>)

### Mine

![Image](</assets/img/gadgets/mines.png>)

- **Level 1:** ? uses
- **Level 2:** 5 uses


### Ability Jammer

![Image](</assets/img/gadgets/jammer.png>)

</div>

