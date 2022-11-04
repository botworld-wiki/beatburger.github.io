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

<div class="botpack no-inline">
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

<div class="botpack no-inline">
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

<div markdown="1" class=" ghcms ghcms-fusing">

Kindly ask your dear [Auntie](/contribute#tbw) 

- You can only fuse **3 of the exact same module**. Eg: 3 [Shields](/shield)
- Fusing will get you a module of the **same type** of the **rarity one higher**
- Fusing is **always random**

**Tip:** don't be too eager to fuse anything you might want to use later!

</div>

## Botpack Level

<div markdown="1" class=" ghcms ghcms-botpacklevel">

- The value you see on your botpack in the top-left corner
- Impacts your damage abilities & [mobs level scaling](/exploring#level-scaling)
- Is equal to the **average of the 6 highest level bots *you own***. Even if you're not using them. Rounded up.

</div>

## Gadgets

<div markdown="1" class=" ghcms ghcms-gadgets">

### Usage

- **Activation:** From your botpack (bottom right while in the wild) or at the start of a fight (**turn off autobattle**). Demo:


[video demo of gadgets activation](<https://cdn.discordapp.com/attachments/826340570908721203/931917757501550683/XRecorder_Edited_15012022_152654.mp4>)

- **Require:** that you pay to unlock them, and equip them
- **Refresh:** every time you leave town or when using Gadget Repair stations inside [Danger Zones](</danger-zones>)


### Hack

![300px Hack](<https://cdn.discordapp.com/attachments/923510071026155550/995428513186328616/unknown.png>)<br>

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

Each strike deals slightly less than 1/3 of a Wild Bot/Bandit's health bar worth of damage, value that is halved against [Booses](</bosses>) ([needs confirmation](</contribute#tbw>)). Striking a regular unit 3 times will leave them with close to no health, while striking a [Boss](</bosses>) 3 times will take away around 1/3 of it's health bar.

- **Level 1:** range 10, 2 uses
- **Level 2:** range 14, 2 uses
- **Level 3:** range 14, 3 uses


### Speed Amplifier

![Image](</assets/img/gadgets/speed-upg.png>)

- **Level 1:** \+30%, 3 uses
- **Level 2:** \+50%, 3 uses


### Invisibility

![Image](</assets/img/gadgets/invisibility.png>)

Altough preventing enemies from detecting and following you, it won't make you intangible, meaning you can still trigger traps and that bumping into enemies would still start a fight

- **Level 1:** 5 sec duration, 1 use


### Shockwave Generator

![Image](</assets/img/gadgets/shockwave.png>)

- **Level 1:** 5 uses


### Mine

![Image](</assets/img/gadgets/mines.png>)

Each Mine deals around 1/5th to 1/6th of a [Boss](</bosses>)' health bar worth of damage, value that is doubled against regular Bandits and Wild bots. Mines can be stacked on top of each other in order to deal multiple simultaneous hits. Damaging regular units with 3 mines will defeat them, while damaging a [Boss](</bosses>) with 5 mines will bring it's health bar down to around 5\~10% (Credits to @Noob)

- **Level 1:** 3 uses
- **Level 2:** 5 uses


### Ability Jammer

![Image](</assets/img/gadgets/jammer.png>)

- **Level 1:** 2 uses
</div>

