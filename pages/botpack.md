---

layout: breadcrumbs
permalink: /botpack
title: Botpack & Modules
description: The place to learn everything there is to know about your Botpack and its Modules!
breadcrumbs:
---

# Botpack

<div markdown="1" class=" ghcms ghcms-intro">

That's the stuff you use to cast stuff or have things

( Here's a nice pic btw )

Unlock slots by defeating the [Arena Masters](https://www.botworld.wiki/arena-masters)

</div>

## Abilities

<div markdown="1" class=" ghcms ghcms-abilities">

The stuff you cast, ya know ?

**Power generation rate**: ??

Dmg scaling over lvl ?

Detailled list: [Abilities](https://www.botworld.wiki/abilities)

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
		width:  auto;
		padding: 0 20px;
		margin: 3px;
	}
	.botpack .toc-block-entry img {margin-right: 10px;}
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

The things you equip to do some other stuff better

Some stack, some don't

Detailled list: [Boosters](https://www.botworld.wiki/boosters)


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

Things Hack builds that do stuff

You unlock them with your Boat lvl

Detailled list: [Gadgets](https://www.botworld.wiki/gadgets)

</div>

