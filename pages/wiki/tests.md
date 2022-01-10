---

layout: breadcrumbs
permalink: /tests
title: TESTING
description: "Having the right Bots & Botpack Composition is what got the best Botmasters where they are today. Learn everything you need to be one of them in here!" 
breadcrumbs:
  Botmasters: "/#botmasters"
  "Fighting Tips": "/fighting"
robots: "NOINDEX, NOFOLLOW"
sitemap: false

for tests:
matName: "Rusty Cog"
matType: "Bot"

---

# TESTING




{% if page.matType == 'Bot' %}
{% assign bots_by_rarity = site.bots | sort: "botName" %}








## Calculator

<div id="scrap-calc">
	<input class="minlvl" type="text" value="1">
	<input class="maxlvl" type="text" value="25">
	<span class="scrapcost" ></span>
</div>

<script type="text/javascript">


const $inputmin = document.querySelector('#scrap-calc input.minlvl');
const $inputmax = document.querySelector('#scrap-calc input.maxlvl');
const $output = document.querySelector('#scrap-calc span.scrapcost');
const arraycommon1 = [ "0","1","2","2","3","4","4","5","6","8","10","10","15","15","15","20","20","25","25","30","65","130","210","300","410" ];



function calc(){
		var scrapcounter = 0;
		for (let start = parseInt($input.value), end = parseInt($input2.value) ; start < end; start++) {
        scrapcounter += parseInt(arraycommon1[start]);
        }
        $output.innerText = scrapcounter;
   
}

$inputmin.addEventListener('input', calc);
$inputmax.addEventListener('input', calc);

</script>























<br>
<h2 id="{{page.path}}"table>Table of bots that require {{page.matName}} to upgrade.</h1>
<br>

 <table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>N° to max</th>
      <th>Common 1</th>
      <th>Common 2</th>
      <th>Common 3</th>
      <th>Special</th>
      <th>Rare</th>
      <th>Essence</th>
    </tr>
  </thead>
  <tbody>
    {% for bot in bots_by_rarity %}
    {% if bot.rareMat == page.matName or bot.specialMat == page.matName or bot.commonMat1 == page.matName or bot.commonMat2 == page.matName or bot.commonMat3 == page.matName %}
      <tr class="collection-list-entry rarity_{{bot.botRarity}}">
          <td class="table-pic">
       <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> 
        <img loading="lazy"   src="/assets/img/bots{{ bot.url }}.png" alt="Image of the bot {{ bot.botName }}"> 
       </a>
          </td>
          <td>
            <a href="{{ site.baseurl }}{{ bot.url }}" title="Everything about the bot {{ bot.botName }}"> {{ bot.botName }} </a>
          </td>
            {% if page.matName == bot.commonMat1 %}
                <td>2648</td>
            {% elsif page.matName == bot.commonMat2 or page.matName == bot.commonMat3 %}
                <td>1345</td>
            {% elsif page.matName == bot.specialMat %}
                <td>519</td>
            {% elsif page.matName == bot.rareMat %}
                <td>38</td>
            {% else %}
                <td>8</td>   
            {% endif %}        
            <td class="rarity_Common">
              <a href="/{{bot.commonMat1 | slugify}}" title="{{bot.commonMat1}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.commonMat1 | slugify}}.png" alt="{{bot.commonMat1}}" >
              </a>
            </td>
            <td class="rarity_Common">
              <a href="/{{bot.commonMat2 | slugify}}" title="{{bot.commonMat2}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.commonMat2 | slugify}}.png" alt="{{bot.commonMat2}}" >
              </a>
            </td>
            <td class="rarity_Common">
              <a href="/{{bot.commonMat3 | slugify}}" title="{{bot.commonMat3}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.commonMat3 | slugify}}.png" alt="{{bot.commonMat3}}" >
              </a>
            </td>
            <td class="rarity_Special">
              <a href="/{{bot.specialMat | slugify}}" title="{{bot.specialMat}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.specialMat | slugify}}.png" alt="{{bot.specialMat}}" >
              </a>
            </td>
            <td class="rarity_Rare">
              <a href="/{{bot.rareMat | slugify}}" title="{{bot.rareMat}}">
                <img loading="lazy"   src="/assets/img/materials/{{bot.rareMat | slugify}}.png" alt="{{bot.rareMat}}" >
              </a>
            </td>
            <td class="rarity_Epic">
              <a href="/essence" title="Default Essence page">
                <img loading="lazy"   src="/assets/img/materials/essence.png" alt="Default Essence pic" >
              </a>
            </td>
        </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
{% endif %}
