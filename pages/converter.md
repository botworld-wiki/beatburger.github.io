---

layout: default
permalink: /converter
title: WikiSheets Converter
description: Assisting tool to convert bot entries from collective wiki sheets to wiki pages

---

# WikiSheets Converter

It's very much a quick'n dirty prototype hacked together hastily. Can be improved later on if usage warrants it.

- [bots](#bots)
- [abilities](#abilities)
- [boosters](#boosters)

## Bots

<div id="autoconverter-bots">
	<h3>Input</h3>
	<textarea id="input-bots" placeholder="Copy paste a column from the wikisheet here"></textarea>
	<button id="convert-bots">Convert</button>
	<h3>Output</h3>
	<textarea id="output-bots" placeholder="Click &#39;Convert&#39; to generate the output"></textarea>
</div>

<style type="text/css">
#autoconverter-bots textarea {
	width: 100%;
	height: 200px;
}
</style>

<script type="text/javascript">
	
const rows = [ "contributors","updatedAt","# Wiki page infos", "title", "name", "description", "imageUrl", "# Bot infos", "botName", "botDescription", "botImageUrl", "botType", "botRarity", "botAcquisition", "botOpinion", "# Abilities infos", "ability1Name", "ability1Info", "ability1Description", "ability2Name", "ability2Info", "ability2Description", "ability3Name", "ability3Info", "ability3Description", "# AI tree infos", "ai1aName", "ai1aDescription", "ai1bName", "ai1bDescription", "ai2aName", "ai2aDescription", "ai2bName", "ai2bDescription", "ai3aName", "ai3aDescription", "ai3bName", "ai3bDescription", "ai4aName", "ai4aDescription", "ai4bName", "ai4bDescription", "ai5aName", "ai5aDescription", "ai5bName", "ai5bDescription", "# Stats infos", "lvl1Hp", "lvl1Dmg", "lvl1Dps", "lvl1Speed", "lvl10Hp", "lvl10Dmg", "lvl10Dps", "lvl20Hp", "lvl20Dmg", "lvl20Dps", "lvl25Hp", "lvl25Dmg", "lvl25Dps", "# Upgrade infos", "epicMat", "rareMat", "specialMat", "commonMat1", "commonMat2", "commonMat3"]	;

function select(s){
	return s.split('__begin__\n')[1].split('\n__end__')[0]
}
function decorate(s){
	return '---\nlayout: bot\n'+s+'\n---'
}
function formatStr(str){
	var i=0;
	return	decorate(
		select(str).replaceAll('"\nhttp', 'http',).split('\n')
			.map(function(line){return line.replaceAll('"','')})
			.map(function(val){return rows[i++]+': "'+val+'"'})
			.join('\n').replace(/#.*"_?_?"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	document.querySelector('#output-bots').value = formatStr(document.querySelector('#input-bots').value)
}
document.querySelector('#convert-bots').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input-bots').value = document.querySelector('#input-bots').value.trim();
	console.log(document.querySelector('#input-bots').value.trim())
}
document.querySelector('#input-bots').addEventListener('input', trimInput, false);
</script>


## Abilities


<div id="autoconverter-abilities">
	<h3>Input</h3>
	<textarea id="input-abilities" placeholder="Copy paste a column from the wikisheet here"></textarea>
	<button id="convert-abilities">Convert</button>
	<h3>Output</h3>
	<textarea id="output-abilities" placeholder="Click &#39;Convert&#39; to generate the output"></textarea>
</div>

<style type="text/css">
#autoconverter-abilities textarea {
	width: 100%;
	height: 200px;
}
</style>

<script type="text/javascript">
	
const rows = [
	'contributors','updatedAt','# Wiki page infos','title','name','description','imageUrl','# Bot infos','abilityName','abilityDescription','abilityImageUrl','abilityCost','abilityRarity','abilityAcquisition','abilityOpinion'
];

function select(s){
	console.log(s.split('__begin__\n')[1].split('\n__end__')[0])
	return s.split('__begin__\n')[1].split('\n__end__')[0]
}
function decorate(s){
	return '---\nlayout: ability\n'+s+'\n---'
}
function formatStr(str){
	var i=0;
	return	decorate(
		select(str).replaceAll('"\nhttp', 'http',).split('\n')
			.map(function(line){return line.replaceAll('"','')})
			.map(function(val){return rows[i++]+': "'+val+'"'})
			.join('\n').replace(/#.*"_?_?"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	document.querySelector('#output-abilities').value = formatStr(document.querySelector('#input-abilities').value)
}
document.querySelector('#convert-abilities').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input-abilities').value = document.querySelector('#input-abilities').value.trim();
	console.log(document.querySelector('#input-abilities').value.trim())
}
document.querySelector('#input-abilities').addEventListener('input', trimInput, false);
</script>


## Boosters


<div id="autoconverter-boosters">
	<h3>Input</h3>
	<textarea id="input-boosters" placeholder="Copy paste a column from the wikisheet here"></textarea>
	<button id="convert-boosters">Convert</button>
	<h3>Output</h3>
	<textarea id="output-boosters" placeholder="Click &#39;Convert&#39; to generate the output"></textarea>
</div>

<style type="text/css">
#autoconverter-boosters textarea {
	width: 100%;
	height: 200px;
}
</style>

<script type="text/javascript">
	
const rows = [
	'contributors','updatedAt','# Wiki page infos','title','name','description','imageUrl','# Bot infos','boosterName','boosterDescription','boosterImageUrl','boosterStacks','boosterRarity','boosterAcquisition','boosterOpinion'
];

function select(s){
	console.log(s.split('__begin__\n')[1].split('\n__end__')[0])
	return s.split('__begin__\n')[1].split('\n__end__')[0]
}
function decorate(s){
	return '---\nlayout: booster\n'+s+'\n---'
}
function formatStr(str){
	var i=0;
	return	decorate(
		select(str).replaceAll('"\nhttp', 'http',).split('\n')
			.map(function(line){return line.replaceAll('"','')})
			.map(function(val){return rows[i++]+': "'+val+'"'})
			.join('\n').replace(/#.*"_?_?"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	document.querySelector('#output-boosters').value = formatStr(document.querySelector('#input-boosters').value)
}
document.querySelector('#convert-boosters').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input-boosters').value = document.querySelector('#input-boosters').value.trim();
	console.log(document.querySelector('#input-boosters').value.trim())
}
document.querySelector('#input-boosters').addEventListener('input', trimInput, false);
</script>

