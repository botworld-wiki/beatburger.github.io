---

layout: breadcrumbs
permalink: /botpack
title: Botpack & Modules
description: The place to learn everything there is to know about your Botpack and its Modules!
breadcrumbs:
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

![Image](/assets/img/banners/botpack.png)



## Abilities

<div markdown="1" class=" ghcms ghcms-abilities">

How well you use your Abilities will make or break difficult fights. Try and have a tool for most tricky situations you can get yourself into!

- **Power generation rate**:  [missing data](/contribute#tbw)
- **Damaging abilities scale** with your botpack level: [missing data](/contribute#tbw)

Find a detailled table with [all the info about every Ability](/abilities)

</div>

<style type="text/css">

	.botpack .toc-block-list{
		padding: 0px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		padding: 0 40px 0 0px;
	}
	.botpack .toc-block-entry {
		flex-grow: 1;
		min-width: 50px;
		max-width: 300px;
		width:  auto;
		padding: 0 20px;
		margin: 3px;
	}
	.botpack .toc-block-entry img {margin-right: 10px;}

	.toc-block-list.links { padding: 0px; }
	.toc-block-list.links .toc-block-entry{
		margin: 0 auto;
		flex-grow: 0;
		padding: 0 10px;
	}
</style>


<div class="botpack">
        <ul class="toc-block-list">

            {% for ability in site.abilities %}
                {% if ability.abilityRarity == 'Common' %}
                    <li class="toc-block-entry rarity_{{ability.abilityRarity}}">
                        <a href="{{ site.baseurl }}{{ ability.url }}" title="Page about the ability {{ ability.abilityName }}">
                            <img src="{{ ability.abilityImageUrl }}" alt="Image of the ability {{ ability.abilityName }}">
                            <span>{{ ability.abilityName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}

            {% for ability in site.abilities %}
                {% if ability.abilityRarity == 'Special' %}
                    <li class="toc-block-entry rarity_{{ability.abilityRarity}}">
                        <a href="{{ site.baseurl }}{{ ability.url }}" title="Page about the ability {{ ability.abilityName }}">
                            <img src="{{ ability.abilityImageUrl }}" alt="Image of the ability {{ ability.abilityName }}">
                            <span>{{ ability.abilityName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}

            {% for ability in site.abilities %}
                {% if ability.abilityRarity == 'Rare' %}
                    <li class="toc-block-entry rarity_{{ability.abilityRarity}}">
                        <a href="{{ site.baseurl }}{{ ability.url }}" title="Page about the ability {{ ability.abilityName }}">
                            <img src="{{ ability.abilityImageUrl }}" alt="Image of the ability {{ ability.abilityName }}">
                            <span>{{ ability.abilityName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}

            {% for ability in site.abilities %}
                {% if ability.abilityRarity == 'Epic' %}
                    <li class="toc-block-entry rarity_{{ability.abilityRarity}}">
                        <a href="{{ site.baseurl }}{{ ability.url }}" title="Page about the ability {{ ability.abilityName }}">
                            <img src="{{ ability.abilityImageUrl }}" alt="Image of the ability {{ ability.abilityName }}">
                            <span>{{ ability.abilityName }}</span>
                        </a>
                    </li>
                {% endif %}
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
            {% for booster in site.boosters %}
                {% if booster.boosterRarity == 'Common' %}
                    <li class="toc-block-entry rarity_{{booster.boosterRarity}}">
                        <a href="{{ site.baseurl }}{{ booster.url }}" title="Page about the booster {{ booster.boosterName }}">
                            <img src="{{ booster.boosterImageUrl }}" alt="Image of the booster {{ booster.boosterName }}">
                            <span>{{ booster.boosterName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}

            {% for booster in site.boosters %}
                {% if booster.boosterRarity == 'Special' %}
                    <li class="toc-block-entry rarity_{{booster.boosterRarity}}">
                        <a href="{{ site.baseurl }}{{ booster.url }}" title="Page about the booster {{ booster.boosterName }}">
                            <img src="{{ booster.boosterImageUrl }}" alt="Image of the booster {{ booster.boosterName }}">
                            <span>{{ booster.boosterName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}

            {% for booster in site.boosters %}
                {% if booster.boosterRarity == 'Rare' %}
                    <li class="toc-block-entry rarity_{{booster.boosterRarity}}">
                        <a href="{{ site.baseurl }}{{ booster.url }}" title="Page about the booster {{ booster.boosterName }}">
                            <img src="{{ booster.boosterImageUrl }}" alt="Image of the booster {{ booster.boosterName }}">
                            <span>{{ booster.boosterName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}

            {% for booster in site.boosters %}
                {% if booster.boosterRarity == 'Epic' %}
                    <li class="toc-block-entry rarity_{{booster.boosterRarity}}">
                        <a href="{{ site.baseurl }}{{ booster.url }}" title="Page about the booster {{ booster.boosterName }}">
                            <img src="{{ booster.boosterImageUrl }}" alt="Image of the booster {{ booster.boosterName }}">
                            <span>{{ booster.boosterName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>

</div>

## Gadgets


<div markdown="1" class=" ghcms ghcms-gadgets">

Incorrect Data. Please share the right info [Contribute](/contribute#tbw)

- **Extra dmg**:
	- *Activate when a combat starts for +50% bot dmg* 
	- 4/5 charges
	- boat lvl req: 3/7
- **Extra power**:
	- *Activate when a combat starts for +30% botpack power* 
	- 4/5 charges
	- boat lvl req: 4/9
- **Extra speed**:
	-
- **Invisibility**:
	- Activate when out of combat to turn invisible
	- 1 charge
	- boat lvl req: 9
- **Shockwave generator**:
	- Activate when out of combat to push back mobs
	- 5 charge
	- boat lvl req: 11
- **Disruptor**:
- **Mines**:
</div>

