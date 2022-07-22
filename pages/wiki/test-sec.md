---
permalink: "/test-sec"
layout: breadcrumbs
contributors: "Pix, debb, Kartoffel, GlareFacer"
updatedAt: "2021-12-21"


title: "Security Test Sandbox"
name: "Bot Crit"
description: "Put yourself in the shoes of a malicious wikisheet contributor - Your goal is to execute javascript in the session of whoever opens this page"
imageUrl: "/assets/img/boosters/bot-crit-epic.png"
breadcrumbs:
  Botpack: "/botpack"
  Boosters: "/boosters"


boosterName: "Bot Crit"
boosterDescription: "All bot attacks have 10% critical chance (critical hits deal double damage)"
boosterImageUrl: "/assets/img/boosters/bot-crit-epic.png"
boosterStacks: "Additive"
boosterRarity: "Epic"
boosterRaritySortOrder: "4"
boosterAcquisition: ""
boosterOpinion: ""
searchKeywords: ""
---

- Put yourself in the shoes of a malicious wikisheet contributor
- Change the "boosterName" value with a payload that the attacker would put in the wikisheets
- Your goal is to execute javascript in the session of whoever opens this page
- Try executing "alert()"
- lvl1: inject from boosterName
- lvl2: inject from boosterStacks
- lvl3: inject from boosterDescription
- lvl4: inject from boosterImageUrl


{% assign boosterStacks = page.boosterStacks | replace: "<", "" %}
{% assign boosterDescription = page.boosterDescription | replace: "<", "" %}
{% assign boosterImageUrl = page.boosterImageUrl | replace: "<", "" %}

<h1 id="{{page.path}}">{{page.boosterName}}</h1>

<p><img loading="lazy"  src="{{boosterImageUrl}}" alt="Image of the {{page.boosterName}} abilty" /></p>

<ul>
  <li><strong>Effect</strong>: <code class="language-plaintext highlighter-rouge"> {{boosterDescription}} </code></li>
  <li><strong>Stacks?</strong>: {{boosterStacks}} </li>
</ul>
<br>

<div id="calculator">
  <h3>Booster Stacks Calculator</h3>
  <br>
  <span id="booster_effect"/></span>%
  <span class="select">increase <input type="radio" name="effect" id="inc" value="inc" checked></span>, or
  <span class="select">decrease <input type="radio" name="effect" id="dec" value="dec"></span>
  <br>
  How many boosters ? <input type="number" name="count" id="count" placeholder="Number of Boosters" value="2"/>
  Total Effect: <span id="effect_output"></span>
  <br>
  Starting value: <input type="text" name="value" id="value" placeholder="Original Value" />
  Final value: <span id="value_output"></span>
  <br>
</div>

{{content}}

  <div id="contribs" style="flex: 1 0 100%; margin:20px auto">
    <span>Last updated at: {{page.updatedAt}}</span>
    <p>Contributors: {{page.contributors}}</p>
  </div>


<script type="text/javascript">
  
  var stacking = "{{boosterStacks}}";

  var booster_effect = "{{boosterDescription}}".match(/\d\d?/)
  var booster_type = '';
  var count = 0;
  var original_value = 0;

  var total_effect = 0;
      var output_value = 0;
  
  if ("{{boosterDescription}}".indexOf('%') < 0){
        document.querySelector('#calculator').style.display = 'none';
      }

  document.querySelector('#inc').onchange = function(event){
    booster_type = 'increase';
    calculate_booster_effect();
  }
  document.querySelector('#dec').onchange = function(event){
    booster_type = 'decrease';
    calculate_booster_effect();
  }
  document.querySelector('#count').onchange = calculate_booster_effect
  document.querySelector('#value').onchange = calculate_booster_effect
  document.querySelector('#booster_effect').innerText = booster_effect
    
    // first calc based on default values
  booster_type = 'increase';
  calculate_booster_effect();

  
  function calculate_booster_effect(){
    initialize_values();
    if (stacking.toLowerCase() == 'multiplicative'){
      if (booster_type == 'increase'){
        total_effect = (1 + booster_effect/100) ** count - 1
      }else if(booster_type == 'decrease'){
        total_effect = 1 - (1 - booster_effect/100) ** count
      }
      total_effect = Math.round(total_effect * 10000)/100
    }else if (stacking.toLowerCase() == 'additive'){
      total_effect = booster_effect * count;
    }

    if (booster_type == 'increase'){
      output_value = Math.round((original_value * (1 + total_effect/100))*100)/100;
    }else if(booster_type == 'decrease'){
      output_value = Math.round((original_value * (1 - total_effect/100))*100)/100;
    }
    if (output_value < 0) 
      output_value = 0;

    document.querySelector('#effect_output').innerText = String(total_effect) + '%';
    if (output_value || output_value == 0)
      document.querySelector('#value_output').innerText = String(output_value);
  }

  function initialize_values(){
    total_effect = 0;
    count = parseInt(document.querySelector('#count').value);
    original_value = parseInt(document.querySelector('#value').value);
  }

</script>


<style type="text/css">
  .select{
    border: 1px solid gray;
  }
  #booster_effect{
    width:  40px;
  }
  #count{
    width: 30px;
  }
  #value{
    width:  120px;
  }
</style>

