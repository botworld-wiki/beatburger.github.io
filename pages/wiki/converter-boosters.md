---

layout: breadcrumbs
permalink: /converter-boosters
title: Boosters Converter
description: Assisting tool to convert bot entries from collective wiki sheets to wiki pages
breadcrumbs:
  Contribute: "/contribute"
  Converter: "/converter"
robots: "NOINDEX, NOFOLLOW"
sitemap: false

---

# Boosters Converter

<h2 id="bots">Boosters</h2>

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
	
var boosterRows = ["contributors","updatedAt","# Wiki page infos","title","name","description","imageUrl","breadcrumbs","  Botpack","  Boosters","# Booster infos","boosterName","boosterDescription","boosterImageUrl","boosterStacks","boosterRarity","boosterRaritySortOrder","boosterAcquisition","boosterOpinion","searchKeywords"]	;

function select(s){
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
			.map(function(val){return boosterRows[i++]+': "'+val+'"'})
			.join('\n').replace(/#.*"_?_?"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	var input = document.querySelector('#input-boosters').value;
	var freeform = input.split('__end__').length > 1 ? input.split('__end__')[1] : '';
	var str = formatStr(input);
	document.querySelector('#output-boosters').value = str.replace('breadcrumbs: ""', 'breadcrumbs:')+'\n\n'+freeform.replace(/^\s*"/,'').replace(/"\s*$/,'')+'\n';
}
document.querySelector('#convert-boosters').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input-boosters').value = document.querySelector('#input-boosters').value.trim();
	console.log(document.querySelector('#input-boosters').value.trim())
}
document.querySelector('#input-boosters').addEventListener('input', trimInput, false);
</script>
