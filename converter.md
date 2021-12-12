---

layout: default
title: WikiSheets Converter
description: Assisting tool to convert bot entries from collective wiki sheets to wiki pages

---

# WikiSheets Converter

It's very much a quick'n dirty prototype hacked together hastily. Can be improved later on if usage warrants it.

<div id="autoconverter">
	<h3>Input</h3>
	<textarea id="input" placeholder="Copy paste a column from the wikisheet here"></textarea>
	<button id="convert">Convert</button>
	<h3>Output</h3>
	<textarea id="output" placeholder="Click 'Convert' to generate the output"></textarea>
</div>
 
<style type="text/css">
#autoconverter textarea {
	width: 100%;
	height: 200px;
}
</style>
<script type="text/javascript">
	
const rows = [ "contributors","# Wiki page infos", "title", "name", "description", "imageUrl", "# Bot infos", "botName", "botDescription", "botImageUrl", "botType", "botRarity", "botAcquisition", "botOpinion", "# Abilities infos", "ability1Name", "ability1Info", "ability1Description", "ability2Name", "ability2Info", "ability2Description", "ability3Name", "ability3Info", "ability3Description", "# AI tree infos", "ai1aName", "ai1aDescription", "ai1bName", "ai1bDescription", "ai2aName", "ai2aDescription", "ai2bName", "ai2bDescription", "ai3aName", "ai3aDescription", "ai3bName", "ai3bDescription", "ai4aName", "ai4aDescription", "ai4bName", "ai4bDescription", "ai5aName", "ai5aDescription", "ai5bName", "ai5bDescription", "# Stats infos", "lvl1Hp", "lvl1Dmg", "lvl1Dps", "lvl1Speed", "lvl10Hp", "lvl10Dmg", "lvl10Dps", "lvl20Hp", "lvl20Dmg", "lvl20Dps", "lvl25Hp", "lvl25Dmg", "lvl25Dps", "# Upgrade infos", "epicMat", "rareMat", "specialMat", "commonMat1", "commonMat2", "commonMat3"]	;

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
			.join('\n').replace(/#.*"__"/g,'\n').replaceAll('__','')
		)
}
function convertFromFields(){
	document.querySelector('#output').value = formatStr(document.querySelector('#input').value)
}
document.querySelector('#convert').onclick = convertFromFields;

function trimInput(){
	document.querySelector('#input').value = document.querySelector('#input').value.trim();
	console.log(document.querySelector('#input').value.trim())
}
document.querySelector('#input').addEventListener('input', trimInput, false);
</script>
