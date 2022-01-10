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

## Calculator

<div id="scrap-calc">
	You can calculate how much Scrap you'll need for a certain level.
	<br>
	Current Bot Level:
	<input class="calc-current" type="number" value="1" min="1" max="24">
	Wanted Bot Level:
	<input class="calc-target" type="number" value="25" min="2" max="25">
	<br>
	Check the Table below to see how much it'll cost you.
</div>



<div id="scrap-table">

<br>
<h2 id="{{page.path}}"table>Table of bots that require {{page.matName}} to upgrade.</h2>
<br>

 <table class="collection-list no-inline">
  <thead>
    <tr>
      <th>Bot</th>
      <th>Name</th>
      <th>Cost</th>
      <th>Common 1</th>
      <th>Common 2</th>
      <th>Common 3</th>
      <th>Special</th>
      <th>Rare</th>
      <th>Essence</th>
    </tr>
  </thead>
  <tbody>
    {% assign bots_by_rarity = site.bots | sort: "botName" %}
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
                <td><span class="scrapcostC1" >2633</span></td>
            {% elsif page.matName == bot.commonMat2 or page.matName == bot.commonMat3 %}
                <td><span class="scrapcostC23" >1335</span></td>
            {% elsif page.matName == bot.specialMat %}
                <td><span class="scrapcostS" >519</span></td>
            {% elsif page.matName == bot.rareMat %}
                <td><span class="scrapcostR" >38</span></td>
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

</div>

<script type="text/javascript">


const $currentLevel = document.querySelector('#scrap-calc input.calc-current');
const $targetLevel = document.querySelector('#scrap-calc input.calc-target');
const $output = document.querySelector('#scrap-calc span.scrapcost');
const $outputC1 = document.querySelector('#scrap-table span.scrapcostC1');
const $outputC23 = document.querySelector('#scrap-table span.scrapcostC23');
const $outputS = document.querySelector('#scrap-table span.scrapcostS');	
const $outputR = document.querySelector('#scrap-table span.scrapcostR');	
const $outputE = document.querySelector('#scrap-table span.scrapcostE');
	
const arraycommon1 = [ 0, 2, 3, 4, 6, 8, 10, 10, 15, 15, 20, 20, 25, 30, 30, 35, 40, 45, 50, 60, 135, 260, 410, 590, 810 ];
const arraycommon2 = [ 0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 10, 10, 15, 15, 15, 20, 20, 25, 25, 30, 65, 130, 210, 300, 410 ];
const arrayspecial = [ 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 8, 8, 10, 15, 35, 60, 75, 110, 160 ];
const arrayrare = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 5, 8, 10 ];
const arrayepic = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3 ];


function calc(){
    var scrapCounterC1 = 0;
    var scrapCounterC23 = 0;
    var scrapCounterS = 0;
    var scrapCounterR = 0;
    var scrapCounterE = 0;
    for (let i = parseInt($currentLevel.value); i < parseInt($targetLevel.value); i++) {
        scrapCounterC1 += arraycommon1[i];
        scrapCounterC23 += arraycommon2[i];
        scrapCounterS += arrayspecial[i];
        scrapCounterR += arrayrare[i];
        scrapCounterE += arrayepic[i];
    }								 
    var x = document.querySelectorAll('#scrap-table span.scrapcostC1');
    var i;
    for (i = 0; i < x.length; i++) {
    	x[i].innerText = scrapCounterC1;
    }									 
    var x = document.querySelectorAll('#scrap-table span.scrapcostC23');
    var i;
    for (i = 0; i < x.length; i++) {
    	x[i].innerText = scrapCounterC23;
    }											 									 
    var x = document.querySelectorAll('#scrap-table span.scrapcostS');
    var i;
    for (i = 0; i < x.length; i++) {
    	x[i].innerText = scrapCounterS;
    }										 
    var x = document.querySelectorAll('#scrap-table span.scrapcostR');
    var i;
    for (i = 0; i < x.length; i++) {
    	x[i].innerText = scrapCounterR;
    }									 
    var x = document.querySelectorAll('#scrap-table span.scrapcostE');
    var i;
    for (i = 0; i < x.length; i++) {
    	x[i].innerText = scrapCounterE;
    }			     									 
}

$currentLevel.addEventListener('input', calc);
$targetLevel.addEventListener('input', calc);

</script>
	
{% endif %}

