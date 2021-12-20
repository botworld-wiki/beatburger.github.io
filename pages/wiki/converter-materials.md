---

layout: breadcrumbs
permalink: /converter-materials
title: Materials Converter
description: Assisting tool to convert material entries from collective wiki sheets to wiki pages
breadcrumbs:
  Contribute: "/contribute"
  Converter: "/converter"
robots: "NOINDEX, NOFOLLOW"
sitemap: false

---

# Materials Converter

<h2 id="bots">Materials</h2>

<div id="autoconverter-materials">
	<h3>Input</h3>
	<textarea id="input-materials" placeholder="Copy paste a column from the wikisheet here"></textarea>
	<button id="convert-materials">Convert</button>
	<h3>Output</h3>
	<textarea id="output-materials" placeholder="Click &#39;Convert&#39; to generate the output"></textarea>
</div>

<style type="text/css">
#autoconverter-materials textarea {
	width: 100%;
	height: 200px;
}
</style>

<script type="text/javascript">
	
var materialRows = ["contributors", "updatedAt", "# Wiki page infos", "title", "name", "description", "imageUrl", "breadcrumbs", "  Materials", "# Upgrade Materials", "matName", "matRarity", "matImageUrl", "matRaritySortOrder", "matType", "matDescription", "matOverview"]	;

function select(s){
	return s.split('__begin__\n')[1].split('\n__end__')[0]
}
function decorate(s){
	return '---\nlayout: material\n'+s+'\n---'
}
function formatStr(str){
	var i=0;
	return	decorate(
		select(str).replaceAll('"\nhttp', 'http',).split('\n')
			.map(function(line){return line.replaceAll('"','')})
			.map(function(val){return materialRows[i++]+': "'+val+'"'})
			.join('\n').replace(/#.*"_?_?"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	var input = document.querySelector('#input-materials').value;
	var freeform = input.split('__end__').length > 1 ? input.split('__end__')[1] : '';
	var str = formatStr(input);
	document.querySelector('#output-materials').value = str.replace('breadcrumbs: ""', 'breadcrumbs:')+'\n\n'+freeform.replace(/^\s*"/,'').replace(/"\s*$/,'')+'\n';
}
document.querySelector('#convert-materials').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input-materials').value = document.querySelector('#input-materials').value.trim();
	console.log(document.querySelector('#input-materials').value.trim())
}
document.querySelector('#input-materials').addEventListener('input', trimInput, false);
</script>
