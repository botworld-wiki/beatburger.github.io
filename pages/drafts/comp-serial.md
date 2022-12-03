---

layout: default
permalink: /comp-serial
title: Comp Serialization PoC
description: crude demo
robots: "NOINDEX, NOFOLLOW"
sitemap: false

---

<input id="poc-url" style="width:100%;" />
<textarea id="poc-json" style="width:100%; height:600px">

</textarea>

<script type="text/javascript">
const BOTS = ["barrie","beat","berserker","bigshot","bombee","brute","bullseye","bullwark","chainer","chomp","comet","dune-bug","flamer","fork","froggy","frosty","gusto","halo","hornet","icicool","inkjet","ko","link","lobbie","longshot","mort","nibbles","nozzle","phantom","pluggie","pupil","ram","rocketeer","scatter","sheller","shuffle","slash","slicer","tether","thump","virus","yanky"];
const ABILITIES = ["ball-lightning","barrier-wall","chaos-boost","chaos-translocator","charge-bolt","charge-field","chilling-ground","corrode","corrupted-bolt","corrupted-missile","deep-freeze","energy-bolt","explosive-proximity-translocator","firestorm","firewall","freeze","frost-missile","frost-tower","gale","goop","gravity-surge","gust","hack","hack-missile","hasty-ground","hypercharge","hyperdrain","icewall","immobilize-field","immobilize","knockback-bolt","knockback","lightning-rod","missile","poison-bolt","poison-missile","poison-tower","poison-trail","proximity-translocator","shield-field","shield","snowball","speed-boost","supercharged-chaos-translocator","super-charge","team-translocator","tornado-bolt","unstable-plasma","vanish","vortex","zap-tower"];
const BOOSTERS = ["bot-crit-epic","bot-crit-special","bot-damage-common","bot-damage-epic","bot-damage-rare","bot-dodge-epic","bot-dodge-rare","bot-dodge-special","bot-effect-area-rare","bot-health-common","bot-health-epic","bot-health-rare","botpack-damage-epic","botpack-damage-special","botpack-effect-area-epic","botpack-effect-area-rare","botpack-stun-epic","botpack-stun-rare","bot-stun-common","bot-stun-epic","bot-stun-rare","brawler-lifesteal-common","chaser-speed-rare","chaser-stun-resistance-special","corrupted-brawler-dodge-epic","corrupted-power-generation-epic","corrupted-sharpshooter-range-epic","corrupted-support-ultimate-charge-epic","corrupted-tank-health-epic","energy-resistance-epic","energy-resistance-special","evader-dodge-rare","faerie's-blessing.","lifesteal-special","marathon-bot","movement-speed-common","movement-speed-epic","nectar-of-the-gods","parry-master","physical-resistance-common","physical-resistance-epic","power-generation-epic","power-generation-special","power-recycling-epic","power-recycling-special","power-start-common","power-start-epic","power-start-rare","radioactive","sniper-range-common","splasher-effect-area-special","stone-cold-stunner","stun-resistance-epic","stun-resistance-rare","sub-zero","the-motherlode","ult-charge-special","ult-cooldowns-common","ult-cooldowns-rare"];

var comp = {
	bots: [
		{name: "barrie", ai: [1,0,1,0,0]},
		{name: "nozzle", ai: [1,0,1,1,1]},
		{name: "inkjet", ai: [1,0,0,0,0]},
		{name: "lobbie", ai: [1,1,1,0,0]},
		{name: "slash", ai: [1,0,1,1,0]},
		{name: "icicool", ai: [0,0,0,0,0]}
	],
	abilities: [
		"ball-lightning",
		"hasty-ground",
		"proximity-translocator",
		"shield-field"
	],
	boosters: [
		"bot-health-rare",
		"corrupted-power-generation-epic",
		"power-generation-epic",
		"power-generation-epic"
	]
};

function serialize(comp){
	let bots = comp.bots.map(bot=>{
		let id = BOTS.indexOf(bot.name).toString().padStart(2,'0');
		let ai = aiEncode(bot.ai)
		return id + ai
	}).join('');
	let abilities = comp.abilities.map(ability=>{
		return ABILITIES.indexOf(ability).toString().padStart(2,'0');
	}).join('');
	let boosters = comp.boosters.map(booster=>{
		return BOOSTERS.indexOf(booster).toString().padStart(2,'0');
	}).join('');
	return bots+abilities+boosters
}

function unserialize(str){
	let comp = {
		bots: str.substr(0,4*6).match(/.{1,4}/g).map(pair=>{
			let [id, ai] = pair.match(/.{1,2}/g);
			return {name: BOTS[+id], ai: aiDecode(ai)}
		}),
		abilities: str.substr(4*6, 4*2).match(/.{1,2}/g).map(id=>ABILITIES[+id]),
		boosters: str.substr(4*6+4*2, 4*2).match(/.{1,2}/g).map(id=>BOOSTERS[+id])

	};
	return comp
}

// mapping the array of 0,1 ai values to binary
function aiEncode(array){
	let bin = Number.parseInt(array.join(''),2); // array to bin to decimal
	return bin.toString().padStart(2,'0') // decimal to str
}
function aiDecode(str){
	return (+str).toString(2).padEnd(5,'0').split('')
}



const $output = document.querySelector('#poc-json');
const $url = document.querySelector('#poc-url');

var anchor = document.location.hash;
if (anchor){
    // If yes, get the app state out of it
	comp = unserialize(anchor.slice(1));
	$output.value = JSON.stringify(comp, null, 2);
}

$url.value = document.location;
$output.value = JSON.stringify(comp, null, 2);


$output.addEventListener('keyup', ()=>{
	document.location.hash = '#'+serialize(JSON.parse($output.value));
	$url.value = document.location;
});


</script>
