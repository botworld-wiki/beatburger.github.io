---

layout: default
permalink: /botpack
title: Botpack & modules
description: The place to learn everything there is to know about your Botpack and its Modules!

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

<div id="site_toc">
    <div class="toc-block">
        <ul class="toc-block-list">
            {% for ability in site.abilities %}
                {% if ability.abilityRarity == 'Common' %}
                    <li class="toc-block-entry rarity_{{ability.abilityRarity}}">
                        <a href="{{ site.baseurl }}{{ ability.url }}" title="Page about the ability {{ ability.abilityName }}">
                            <img src="{{ ability.abilityImageUrl }}" alt="Image of the ability {{ ability.abilityName }}">
                            <span>{{ ability.botName }}</span>
                        </a>
                    </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
</div>




## Boosters


<div markdown="1" class=" ghcms ghcms-boosters">

The things you equip to do some other stuff better

Some stack, some don't

Detailled list: [Boosters](https://www.botworld.wiki/boosters)

And/or short list here ?

</div>


## Gadgets


<div markdown="1" class=" ghcms ghcms-gadgets">

Things Hack builds that do stuff

You unlock them with your Boat lvl

Detailled list: [Gadgets](https://www.botworld.wiki/gadgets)

</div>

