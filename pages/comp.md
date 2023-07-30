---

layout: default
permalink: /comp
title: Comp Builder
description: Create a full or partial Comp with Bots, AI, Abilities and Boosters. Share it easily or save it for later! 

---


# Comp Builder

- Tap or click a Bot, AI pick, Ability or Booster to change it
- You can name your comp so it's easy to recognize when shared
- [Empty comp loadout](#---blank) (to start from scratch)
- Some samples are [listed below](#library)
- The url of this page updates with your changes, copy/paste to share or save:

<p><input id="poc-url" style="width:100%;"></p>

<div id="display">
    <div id="preview">
        <h2 id="title">Tap to enter a comp title</h2>
        <div id="bots">
            <ul>
                <li class="bot bot0"><img src="/assets/img/materials/essence.png"><ul><li></li><li></li><li></li><li></li><li></li></ul></li>   
                <li class="bot bot1"><img src="/assets/img/materials/essence.png"><ul><li></li><li></li><li></li><li></li><li></li></ul></li>
                <li class="bot bot2"><img src="/assets/img/materials/essence.png"><ul><li></li><li></li><li></li><li></li><li></li></ul></li>
                <li class="bot bot3"><img src="/assets/img/materials/essence.png"><ul><li></li><li></li><li></li><li></li><li></li></ul></li>
                <li class="bot bot4"><img src="/assets/img/materials/essence.png"><ul><li></li><li></li><li></li><li></li><li></li></ul></li>
                <li class="bot bot5"><img src="/assets/img/materials/essence.png"><ul><li></li><li></li><li></li><li></li><li></li></ul></li>
            </ul>
            <div class="select select-bot" style="display:none;">
                <form class="filters">
                    <label><input type="radio" name="botsFilter" value="All" checked> All</label>
                    <label><input type="radio" name="botsFilter" value="Tank"> Tank</label>
                    <label><input type="radio" name="botsFilter" value="Brawler"> Brawler</label>
                    <label><input type="radio" name="botsFilter" value="Chaser"> Chaser</label>
                    <label><input type="radio" name="botsFilter" value="Evader"> Evader</label>
                    <label><input type="radio" name="botsFilter" value="Sniper"> Sniper</label>
                    <label><input type="radio" name="botsFilter" value="Splasher"> Splasher</label>
                    <label><input type="radio" name="botsFilter" value="Support"> Support</label>
                </form>
                <ul class="options"></ul>
            </div>
            <div class="select select-ai" style="display:none;">
                <form>
                    <h3>Bot</h3>
                    <div>
                        <label><input type="radio" name="ai0" value="0" checked><span>ai1A</span></label>
                        <label><input type="radio" name="ai0" value="1"><span>ai1B</span></label>
                    </div><div>
                        <label><input type="radio" name="ai1" value="0" checked><span>ai2A</span></label>
                        <label><input type="radio" name="ai1" value="1"><span>ai2B</span></label>
                    </div><div>
                        <label><input type="radio" name="ai2" value="0" checked><span>ai3A</span></label>
                        <label><input type="radio" name="ai2" value="1"><span>ai3B</span></label>
                    </div><div>
                        <label><input type="radio" name="ai3" value="0" checked><span>ai4A</span></label>
                        <label><input type="radio" name="ai3" value="1"><span>ai4B</span></label>
                    </div><div>
                        <label><input type="radio" name="ai4" value="0" checked><span>ai5A</span></label>
                        <label><input type="radio" name="ai4" value="1"><span>ai5B</span></label>
                    </div>
                    <button>OK</button>
                </form>
            </div>
        </div>
        <div id="abilities">
            <ul>
                <li class="ability ability0"><img></li>   
                <li class="ability ability1"><img></li>
                <li class="ability ability2"><img></li>
                <li class="ability ability3"><img></li>
            </ul>
            <div class="select" style="display:none;">
                <form class="filters">
                    <label><input type="radio" name="abilitiesFilter" value="All" checked> All</label>
                    <label><input type="radio" name="abilitiesFilter" value="Common">Common</label>
                    <label><input type="radio" name="abilitiesFilter" value="Special">Special</label>
                    <label><input type="radio" name="abilitiesFilter" value="Rare"> Rare</label>
                    <label><input type="radio" name="abilitiesFilter" value="Epic"> Epic</label>
                </form>
                <ul class="options"></ul>
            </div>
        </div>
        <div id="boosters">
            <ul>
                <li class="booster booster0"><img></li>   
                <li class="booster booster1"><img></li>
                <li class="booster booster2"><img></li>
                <li class="booster booster3"><img></li>
            </ul>
            <div class="select" style="display:none;">
                <form class="filters">
                    <label><input type="radio" name="boostersFilter" value="All" checked> All</label>
                    <label><input type="radio" name="boostersFilter" value="Common">Common</label>
                    <label><input type="radio" name="boostersFilter" value="Special">Special</label>
                    <label><input type="radio" name="boostersFilter" value="Rare"> Rare</label>
                    <label><input type="radio" name="boostersFilter" value="Epic"> Epic</label>
                    <label><input type="radio" name="boostersFilter" value="Legendary"> Legendary</label>
                </form>
                <ul class="options"></ul>
            </div>
        </div>
    </div>
    <div id="list">
        <h3>Bots</h3>
        <ul>
            <li class="bot bot0">
                <img/>
                <div><a></a><ul><li></li><li></li><li></li><li></li><li></li></ul></div>
            </li>
            <li class="bot bot1">
                <img/>
                <div><a></a><ul><li></li><li></li><li></li><li></li><li></li></ul></div>
            </li>
            <li class="bot bot2">
                <img/>
                <div><a></a><ul><li></li><li></li><li></li><li></li><li></li></ul></div>
            </li>
            <li class="bot bot3">
                <img/>
                <div><a></a><ul><li></li><li></li><li></li><li></li><li></li></ul></div>
            </li>
            <li class="bot bot4">
                <img/>
                <div><a></a><ul><li></li><li></li><li></li><li></li><li></li></ul></div>
            </li>
            <li class="bot bot5">
                <img/>
                <div><a></a><ul><li></li><li></li><li></li><li></li><li></li></ul></div>
            </li>
        </ul>        <h3>Abilities</h3>
        <ul>
            <li class="ability ability0">
                <img/>
                <div><a></a><p></p></div>
            </li>
            <li class="ability ability1">
                <img/>
                <div><a></a><p></p></div>
            </li>
            <li class="ability ability2">
                <img/>
                <div><a></a><p></p></div>
            </li>
            <li class="ability ability3">
                <img/>
                <div><a></a><p></p></div>
            </li>
        </ul>
        <h3>Boosters</h3>
        <ul>
            <li class="booster booster0">
                <img/>
                <div><a></a><p></p></div>
            </li>
            <li class="booster booster1">
                <img/>
                <div><a></a><p></p></div>
            </li>
            <li class="booster booster2">
                <img/>
                <div><a></a><p></p></div>
            </li>
            <li class="booster booster3">
                <img/>
                <div><a></a><p></p></div>
            </li>
        </ul>
    </div>
</div>

<h2>Library of full or partial comps</h2>
<ul id="library">
    <li>Arena Chainer Meta: <a href="#ChakLobnMorgVirsNozmFor0-GusDFrSCTHCh-cPwPwSSZ0UCD-arena-chainer-meta">ChakLobnMorgVirsNozmFor0-GusDFrSCTHCh-cPwPwSSZ0UCD-arena-chainer-meta</a></li>
    <li>Bigshot Fever: <a href="#Big0-00a-da0da0-Bigshot-fever">Big0-00a-da0da0-Bigshot-fever</a></li>
    <li>Sky Pony Boom: <a href="#Com0-SCT-da0da0SZ0PwS-sky-pony-boom">Com0-SCT-da0da0SZ0PwS-sky-pony-boom</a></li>
    <li>Kart's Special: <a href="#Ici0Roc0Lob0-GusHDrGSu-EnREnREnREnR-karts-special">Ici0Roc0Lob0-GusHDrGSu-EnREnREnREnR-karts-special</a></li>
    <li>Pix Pauper: <a href="#Bar0LoboDundYan9Roc0Ici1-Gus28c5c1186-UChUCh282282-Pix-pauper">#Bar0LoboDundYan9Roc0Ici1-Gus28c5c1186-UChUCh282282-Pix-pauper</a></li>
    <li>Pix's CC Shell: <a href="#Cha0Lob0-GusIcW-SZ0UCDPwS-Pix-CC-shell">Cha0Lob0-GusIcW-SZ0UCDPwS-Pix-CC-shell</a></li>
</ul>


<style type="text/css">
    #preview {
        max-width: 350px;
    }
    #display ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
    }
    #display li {
        list-style: none;
    }
    #display img {
        height: 60px;
        width: 60px;
    }
    #preview .bot{
        display: flex;
        flex-direction: row;
        border: 1px solid grey;
        width:  32%;
    }
    #preview .bot ul{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        background: none;
        padding: 0px;
        margin: 0 auto;
    }
    #list ul {
        flex-direction: column;
    }
    #list li {
        display: flex;
    }
    #list .bot li {
        display: flex;
        flex-direction: column;
    }

    #preview .select .options li{
        border: 1px solid grey;
        border-radius: 5px;
        padding: 3px;
        margin: 3px;
    }
    form.filters label{
        display: inline-block;
    }
    #preview .select .options img{
        width:20px;
        height: 20px
    }
    #preview .select-ai form{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }
    #preview .select-ai div{
        display: flex;
        flex-direction: column;
        border: 1px solid grey;
        border-radius: 4px;
    }
</style>

<!-- debug -->
<textarea id="poc-json" style="width:100%; height:600px; display:none">
</textarea>

<script type="text/javascript">


/* start - UX */

const emptyDisplay = document.querySelector('#display').innerHTML;
function resetDisplay(){
    document.querySelector('#display').innerHTML = emptyDisplay;
    // title change
    document.querySelector('#title').addEventListener('click', ()=>{
        editTitle();
    }) 

    // bots select
    document.querySelectorAll('#preview #bots li.bot img').forEach(($e,position)=>$e.addEventListener('click',()=>{
        toggleBotsSelect(position);
        // selection filters buttons
        document.querySelectorAll('#preview #bots .select form [name=botsFilter]').forEach($e=>$e.addEventListener('click',()=>filterBotsOptions(position)));
    }));
    // bot ai select
    document.querySelectorAll('#preview #bots li.bot ul').forEach(($e,position)=>$e.addEventListener('click',()=>{
        toggleAiSelect(position);
        document.querySelectorAll('#preview #bots .select-ai form label').forEach($e=>$e.addEventListener('click',()=>selectAi(position)));
        
    }));
    document.querySelector('#preview #bots .select-ai button').addEventListener('click', displayComp);
    // abilities select
    document.querySelectorAll('#preview #abilities li.ability img').forEach(($e,position)=>$e.addEventListener('click',()=>{
        toggleAbilitiesSelect(position);
        // selection filters buttons
        document.querySelectorAll('#preview #abilities .select form [name=abilitiesFilter]').forEach($e=>$e.addEventListener('click',()=>filterAbilitiesOptions(position)));
    }));
    // boosters select
    document.querySelectorAll('#preview #boosters li.booster img').forEach(($e,position)=>$e.addEventListener('click',()=>{
        toggleBoostersSelect(position);
        // selection filters buttons
        document.querySelectorAll('#preview #boosters .select form [name=boostersFilter]').forEach($e=>$e.addEventListener('click',()=>filterBoostersOptions(position)));
    }));
}

function editTitle(){
        var response = prompt("Enter a new comp title", comp.title);
        response = (response === null)? comp.title : response;
        comp.title = response;
        displayComp();
        exportComp();
}

function toggleBotsSelect(position){
    var current = document.querySelector('#preview #bots .select').style.display;
    document.querySelector('#preview #bots .select').style.display = (current != 'none')?'none':'block';
    document.querySelector('#preview #bots ul').style.display = (current != 'none')?'flex':'none';
    if (typeof position) filterBotsOptions(position); //todo: doesn't need to be called so often
}

function filterBotsOptions(position){
    console.log(position)
    let $list = document.querySelector('#preview #bots .select .options');
    let selected = document.querySelector('#preview #bots .select form').elements['botsFilter'].value;
    let results = Object.entries(db.bots);
    if (selected != 'All') results = results.filter(e=>(e[1].type == selected));
    $list.innerHTML = '';
    var out = ''; 
    for (var i=0; i<results.length; i++){
        out += '<li onclick="selectBot(\''+results[i][0]+'\','+position+')"><img src="https://botworld.wiki'+results[i][1].image+'"/><span>'+results[i][1].name+'</span></li>';
    }
    $list.innerHTML = out;
}
function selectBot(botId, position){
    toggleBotsSelect()
    if (position >= comp.bots.length) {
        comp.bots.push({name:botId, ai: ['0', '0', '0', '0', '0']});
    } else {
        comp.bots[position].name = botId;
        comp.bots[position].ai = ['0', '0', '0', '0', '0'];
    }
    exportComp();
    displayComp();
}

function toggleAiSelect(position){
    var current = document.querySelector('#preview #bots .select.select-ai').style.display;
    document.querySelector('#preview #bots .select.select-ai').style.display = (current != 'none')?'none':'flex';
    document.querySelector('#preview #bots ul').style.display = (current != 'none')?'flex':'none';
    if (typeof position) loadAiOptions(position); //todo: doesn't need to be called so often
}

function loadAiOptions(position){
    var $ai = document.querySelector('#preview #bots .select-ai');
    var bot = db.bots[comp.bots[position].name];
    $ai.querySelector('h3').innerText = bot.name;
    var aiNames = bot.ai.flat().map(e=>e.name)
    $spans = $ai.querySelectorAll('span');
    for (var i=0; i<$spans.length; i++){
        $spans[i].innerText = aiNames[i];
    }
    var picks = comp.bots[position].ai;
    for (var i=0; i<5; i++){
        $ai.querySelectorAll('[name="ai'+i+'"]')[picks[i]].checked = true;
    }
}
function selectAi(position){
    var picks = []
    for (var i=0; i<5; i++){
        picks.push(document.querySelector('#preview #bots .select-ai form').elements['ai'+i].value)
    }
    comp.bots[position].ai = picks;
    exportComp();
}

function toggleAbilitiesSelect(position){
    var current = document.querySelector('#preview #abilities .select').style.display;
    document.querySelector('#preview #abilities .select').style.display = (current != 'none')?'none':'block';
    document.querySelector('#preview #abilities ul').style.display = (current != 'none')?'flex':'none';
    if (typeof position) filterAbilitiesOptions(position); //todo: doesn't need to be called so often
}

function filterAbilitiesOptions(position){
    let $list = document.querySelector('#preview #abilities .select .options');
    let selected = document.querySelector('#preview #abilities .select form').elements['abilitiesFilter'].value;
    let results = Object.entries(db.abilities);
    if (selected != 'All') results = results.filter(e=>(e[1].rarity == selected));
    $list.innerHTML = '';
    var out = ''; 
    for (var i=0; i<results.length; i++){
        out += '<li onclick="selectAbility(\''+results[i][0]+'\','+position+')"><img src="https://botworld.wiki'+results[i][1].image+'"/><span>'+results[i][1].name+'</span></li>';
    }
    $list.innerHTML = out;
}
function selectAbility(abilityId, position){
    toggleAbilitiesSelect()
    if (position >= comp.abilities.length) {
        comp.abilities.push(abilityId);
    } else {
        comp.abilities[position] = abilityId;
    }
    exportComp();
    displayComp();
}

function toggleBoostersSelect(position){
    var current = document.querySelector('#preview #boosters .select').style.display;
    document.querySelector('#preview #boosters .select').style.display = (current != 'none')?'none':'block';
    document.querySelector('#preview #boosters ul').style.display = (current != 'none')?'flex':'none';
    if (typeof position) filterBoostersOptions(position); //todo: doesn't need to be called so often
}

function filterBoostersOptions(position){
    let $list = document.querySelector('#preview #boosters .select .options');
    let selected = document.querySelector('#preview #boosters .select form').elements['boostersFilter'].value;
    let results = Object.entries(db.boosters);
    if (selected != 'All') results = results.filter(e=>(e[1].rarity == selected));
    $list.innerHTML = '';
    var out = ''; 
    for (var i=0; i<results.length; i++){
        out += '<li onclick="selectBooster(\''+results[i][0]+'\','+position+')"><img src="https://botworld.wiki'+results[i][1].image+'"/><span>'+results[i][1].name+'</span></li>';
    }
    $list.innerHTML = out;
}
function selectBooster(boosterId, position){
    toggleBoostersSelect()
    if (position >= comp.boosters.length) {
        comp.boosters.push(boosterId);
    } else {
        comp.boosters[position] = boosterId;
    }
    exportComp();
    displayComp();
}

function displayComp(){
    resetDisplay();
    document.querySelector('#preview #title').innerText = comp.title;
    for (var i=0; i< comp.bots.length; i++){
        let $preview = document.querySelector('#preview .bot'+i);
        let $list = document.querySelector('#list .bot'+i);
        let bot = db.bots[comp.bots[i].name];
        $preview.querySelector('img').src = 'https://www.botworld.wiki/'+bot.image;
        $list.querySelector('img').src = 'https://www.botworld.wiki/'+bot.image;
        $list.querySelector('a').innerText = bot.name;
        $list.querySelector('a').href = 'https://www.botworld.wiki/'+bot.url;
        let aipicks = comp.bots[i].ai;
        let $previewAi = $preview.querySelectorAll('li');
        let $listAi = $list.querySelectorAll('li');
        for (var j=0; j< aipicks.length; j++){
            let ai = bot.ai[j][aipicks[j]]
            $previewAi[j].innerText = ai.name.split('')[0] || '?';  
            $listAi[j].innerHTML = '<strong>'+ai.name+'</strong><span>'+ai.description+'</span>';    
        }
        
    };
    for (var i=0; i< comp.abilities.length; i++){
        let $preview = document.querySelector('#preview .ability'+i);
        let $list = document.querySelector('#list .ability'+i);
        let ability = db.abilities[comp.abilities[i]];
        $preview.querySelector('img').src = 'https://www.botworld.wiki/'+ability.image;
        $list.querySelector('img').src = 'https://www.botworld.wiki/'+ability.image;
        $list.querySelector('a').innerText = ability.name;
        $list.querySelector('a').href = 'https://www.botworld.wiki/'+ability.url;
        $list.querySelector('p').innerText = ability.description;
    };
    for (var i=0; i< comp.boosters.length; i++){
        let $preview = document.querySelector('#preview .booster'+i);
        let $list = document.querySelector('#list .booster'+i);
        let booster = db.boosters[comp.boosters[i]];
        $preview.querySelector('img').src = 'https://www.botworld.wiki/'+booster.image;
        $list.querySelector('img').src = 'https://www.botworld.wiki/'+booster.image;
        $list.querySelector('a').innerText = booster.name;
        $list.querySelector('a').href = 'https://www.botworld.wiki/'+booster.url;
        $list.querySelector('p').innerText = booster.description;
    }
}

/* end - UX */

// Pix Pauper as placeholder
var comp = {
  "title": "Click here to name your comp",
  "bots": [
    {
      "name": "barrie",
      "ai": [
        "0",
        "0",
        "0",
        "0",
        "0"
      ]
    },
    {
      "name": "lobbie",
      "ai": [
        "1",
        "0",
        "0",
        "0",
        "0"
      ]
    },
    {
      "name": "dune-bug",
      "ai": [
        "0",
        "0",
        "0",
        "0",
        "0"
      ]
    },
    {
      "name": "yanky",
      "ai": [
        "0",
        "0",
        "0",
        "0",
        "0"
      ]
    },
    {
      "name": "rocketeer",
      "ai": [
        "0",
        "0",
        "0",
        "0",
        "0"
      ]
    },
    {
      "name": "icicool",
      "ai": [
        "1",
        "0",
        "0",
        "0",
        "0"
      ]
    }
  ],
  "abilities": [
    "gust",
    "shield",
    "vortex",
    "ball-lightning"
  ],
  "boosters": [
    "ult-charge-special",
    "ult-charge-special",
    "power-start-common",
    "power-start-common"
  ]
}

/* start - serialization */

// https://stackoverflow.com/questions/14733374/how-to-generate-an-md5-file-hash-in-javascript-node-js
var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}


function serialize(comp){
    let bots = comp.bots.map(bot=>{
        let id = lookup.bot2key[bot.name];
        let ai = aiEncode(bot.ai)
        return id + ai
    }).join('');
    let abilities = comp.abilities.map(ability=>{
        return lookup.ability2key[ability];
    }).join('');
    let boosters = comp.boosters.map(booster=>{
        return lookup.booster2key[booster];
    }).join('');
    let title = comp.title.replaceAll(' ','-'); //todo proper url prep
    return [bots,abilities,boosters,title].join('-')
}

function unserialize(str){
    let [bots, abilities, boosters, ...title] = str.split('-');
    title = title.join(' ');
    try {
        bots = bots.match(/.{1,4}/g).map(bot=>{
            let [id, ai] = [bot.substr(0,3),bot.substr(3,1)];
            return {name: lookup.key2bot[id], ai: aiDecode(ai)}
        })
    } catch (e) { bots = []; }
    try {
        abilities = abilities.match(/.{1,3}/g).map(id=>lookup.key2ability[id])
    } catch (e) { abilities = []; }
    try {
        boosters = boosters.match(/.{1,3}/g).map(id=>lookup.key2booster[id])
    } catch (e) { boosters = []; }

    return comp = {
        title: title,
        bots: bots,
        abilities: abilities,
        boosters: boosters
    }
}

// mapping the array of 0,1 ai values to binary
// result is base 36 encoded in a single char (2^5 = 32 ai combinations)
function aiEncode(array){
    return Number.parseInt(array.join(''),2).toString(36); // array to bin to decimal to b36
}
function aiDecode(str){
    return Number.parseInt(str, 36).toString(2).padEnd(5,'0').split('')
}


const OVERRIDES = {
    // SUGAR
    // bots
    "barrie":"Bar", "beat":"Bea", "berserker":"Ber", "bigshot":"Big", "bombee":"Bom", "brute":"Bru", "bullseye":"BuE", "bullwark":"BuW", "chainer":"Cha", "chomp":"Cho", "comet":"Com", "dune-bug":"Dun", "flamer":"Fla", "fork":"For", "froggy":"Frg", "frosty":"Frs", "gusto":"Gus", "gyro":"Gyr", "halo":"Hal", "hornet":"Hor", "icicool":"Ici", "inkjet":"Ink", "ko":"KOx", "link":"Lin", "lobbie":"Lob", "longshot":"Lon", "mort":"Mor", "nibbles":"Nib", "nozzle":"Noz", "phantom":"Pha", "pluggie":"Plu", "pupil":"Pup", "ram":"Ram", "rocketeer":"Roc", "scatter":"Sca", "sheller":"She", "shuffle":"Shu", "slash":"Sla", "slicer":"Sli", "tether":"Tet", "thump":"Thu", "virus":"Vir", "yanky":"Yan",
    // abilities
    "gust":"Gus",
    "hypercharge":"HCh",
    "hyperdrain":"HDr",
    "icewall":"IcW",
    "deep-freeze":"DFr",
    "supercharged-chaos-translocator": "SCT",
    "chaos-translocator": "CTr",
    "explosive-proximity-translocator":"EPT",
    "proximity-translocator": "PTr",
    "gravity-surge":"GSu",
    // boosters
    "ult-cooldowns-rare":"UCD",
    "ult-charge-special":"UCh",
    "faerie's-blessing":"FBl",
    "sub-zero":"SZ0",
    "power-start-epic":"PwS",
    "power-generation-epic":"PwG",
    "corrupted-power-generation-epic":"cPw",
    // COLLISIONS
    //'ram': 'RAM', // bullseye
    'corrupted-sharpshooter-range-epic': 'cSR', // brawler-lifesteal-common
    'energy-resistance-epic': 'EnR', // bot-damage-common
}


var db, lookup = {};

function genLookups(dbCollection){
    let key2entity = {};
    let entity2key = {};
    for (let id in dbCollection){
        const fallback = MD5(id).substr(0,3);
        const key = OVERRIDES[id] || fallback; 
        if (entity2key[id]){ alert('collision: ' + id + ' and ' + entity2key[id]) }; 
        key2entity[fallback] = id; //so serial payloads shared before an override was added stay supported
        key2entity[key] = id;
        entity2key[id] = key;
    }
    return [key2entity, entity2key]
}
/* end - serialization */


/* start - Main init */

const $output = document.querySelector('#poc-json');
const $url = document.querySelector('#poc-url');
    
function init(json){
    db = json;
    const [key2bot, bot2key] = genLookups(db.bots);
    const [key2ability, ability2key] = genLookups(db.abilities);
    const [key2booster, booster2key] = genLookups(db.boosters);

    lookup = {
        key2bot: key2bot, bot2key: bot2key,
        key2ability: key2ability, ability2key: ability2key,
        key2booster: key2booster, booster2key: booster2key,
        list: Object.keys(bot2key).concat(Object.keys(ability2key), Object.keys(booster2key))
    }

    importComp();

}

function importComp(anchor){
    if ((anchor) || ( (anchor = document.location.hash) && (anchor !== '#library') ) ){
        // If yes, get the app state out of it
        comp = unserialize(anchor.slice(1));
    }

    $url.value = 'https://botworld.wiki/comp' + (anchor? anchor : '');
    $output.value = JSON.stringify(comp, null, 2);
    displayComp();
}

function exportComp(){
    document.location.hash = '#'+serialize(comp);
    $url.value = document.location;
}

fetch("https://www.botworld.wiki/assets/js/comp-serial.json")
//fetch("/assets/js/comp-serial.json")
  .then(response => response.json())
  .then(json => init(json));

// applies to all links in library + the blank reset one
document.querySelectorAll('#library a, a[href^="#---"]').forEach(($e)=>$e.addEventListener('click', (ev)=>{importComp(ev.target.hash); window.scrollTo(0, 500);}))

/* end - Main init */

</script>
