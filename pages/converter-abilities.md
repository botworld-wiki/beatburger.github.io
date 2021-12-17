---

layout: breadcrumbs
permalink: /converter-abilities
title: Abilities Converter
description: Assisting tool to convert bot entries from collective wiki sheets to wiki pages
breadcrumbs:
  Contribute: "/contribute"
  Converter: "/converter"

---

# Abilities Converter

<h2 id="bots">Abilities</h2>

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
	
var abilityRows = ["contributors","updatedAt","# Wiki page infos","title","name","description","imageUrl","breadcrumbs","  Botpack","  Abilities","# Ability infos","abilityName","abilityDescription","abilityImageUrl","abilityCost","abilityRarity","abilityAcquisition","abilityOpinion","searchKeywords"]	;

function select(s){
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
			.map(function(val){return abilityRows[i++]+': "'+val+'"'})
			.join('\n').replace(/#.*"_?_?"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	var str = formatStr(document.querySelector('#input-abilities').value);
	document.querySelector('#output-abilities').value = str;
}
document.querySelector('#convert-abilities').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input-abilities').value = document.querySelector('#input-abilities').value.trim();
	console.log(document.querySelector('#input-abilities').value.trim())
}
document.querySelector('#input-abilities').addEventListener('input', trimInput, false);
</script>
