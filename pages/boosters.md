---

layout: default
permalink: /boosters
title: All the boosters
description: The place to learn everything there is to know about the powerful boosters you can find and use in Botworld Adventure!

---

# Every booster listed

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Opinion</th>
    </tr>
  </thead>
  <tbody>
    {% for booster in site.boosters %}
    <tr>
      <td class="rarity_{{booster.boosterRarity}}"><a href="{{ site.baseurl }}{{ booster.url }}"> {{ booster.boosterName }} </a></td>
      <td>{{booster.boosterDescription}}</td>
      <td>{{booster.boosterOpinion}}</td>
    </tr>
    {% endfor %}

  </tbody>
</table>

<div markdown="1" class=" ghcms ghcms-main">

# Most relevant boosters

Just a list of the ones we need to put there first

- Power Start
- Ult CD
- Ult Start
- ...

</div>
