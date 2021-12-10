---

layout: default
title: List of bots
description: All the bots in Botworld Adventure so far

---
<ul>
{% for bot in site.bots %}
  <li><a href="{{ site.baseurl }}{{ bot.url }}"> {{ bot.botName }} </a> ({{ bot.botType }}, {{ bot.botRarity }})</li>
{% endfor %}
</ul>

| Name | Type | Rarity | Acquisition | Summary |
| ------ | ------ | ------ | --- | ----- |
| Chainer  | Tank | Rare | Arena | Best combo enabler - top meta pick |
