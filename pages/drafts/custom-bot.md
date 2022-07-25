---
layout: breadcrumbs
permalink: "/custom-bot"
title: "Custom Bots Builder"
name: "Custom Bots Builder"
description: "Use this Bot Builder to write up and share your custom bots!"
breadcrumbs:
  Community Adventure: "/#community"
---

<style type="text/css">
    .botcard {
        border-radius: 10px;
        width: 240px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    .actual-card{
      margin-bottom: 20px;
    }
    .pic {
    background: linear-gradient(160deg, #1b1a6b 50%, cyan);
}
    .cardinfos {
        background: #246eff;
    }
    .cardinfos * {
        font-weight: 1000;
    }
    
    .cardinfos table {
        overflow-x: hidden;
        margin: 0px;
    }
    .bot_bloc_4{
      width: 100%;
    }
</style>


<div>
    <p>Click any text about your bot to edit it live</p>
    <p>Share the link to this page after your edit to share your custom bot</p>
    <p>Updated at: <span class="custom-edit custom-edit-updatedAt"></span></p>
</div>

<div class="bot-infos">
    <div class="bot_bloc_1">
        <div class="intro">
            <h1 class="custom-edit custom-edit-name">Custom Bot name...</h1>

            <p><code class="custom-edit custom-edit-desc">Custom Bot description...</code></p>
        </div>
        <div class="botcard">
          <div class="actual-card">
            <div class="pic">
                <p><img loading="lazy" src="/assets/img/icons/cog.png"/ class="custom-edit custom-edit-image"></p>
            </div>
            <div class="cardinfos">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Rarity</th>
                      <th>Acquisition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="custom-edit custom-edit-class">Class...</td>
                      <td class="custom-edit custom-edit-rarity">Rarity...</td>
                      <td class="custom-edit custom-edit-acquisition">Acquisition...</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <div>
            <h3 id="overview">Overview</h3>
            <div>
              <p class="custom-edit custom-edit-overview">Overview of your bot...</p>
              <p><a href="#comments" title="Comments, AI Builds, tips & tricks...">AI Builds, Tips, etc.</a></p>
            </div>

          </div>
        </div>

        <div class="abilities">
            <h2 id="abilities">Abilities</h2>

            <ul>
              <li>
                <p><h3 class="custom-edit custom-edit-ability1name">1st Ability Name...</h3><code class="custom-edit custom-edit-ability1infos">infos...</code></p>
                <p class="custom-edit custom-edit-ability1desc">description...</p>
              </li>
              <li>
                <p><h3 class="custom-edit custom-edit-ability2name">2st Ability Name...</h3><code class="custom-edit custom-edit-ability2infos">infos...</code></p>
                <p class="custom-edit custom-edit-ability2desc">description...</p>
              </li>
              <li>
                <p><h3 class="custom-edit custom-edit-ability3name">3st Ability Name...</h3><code class="custom-edit custom-edit-ability3infos">infos...</code></p>
                <p class="custom-edit custom-edit-ability3desc">description...</p>
              </li>
            </ul>
        </div>
    </div>
</div>


<script type="text/javascript">

    // global state with all the updated values. Serialized/b64 encoded into the anchor.
    var gState = {
        'updatedAt': "",
        'name': "Bot Name...",
        'desc': "Click to edit the description..."
    };

    // Do we have an anchor already?
    var anchor = document.location.hash;
    if (anchor){
        // If yes, get the app state out of it
        gState = extractFromAnchor(anchor);
        console.log(gState);
    }
    // then initialize the app with it
    initFromState(gState);
    initButtonsInputs();

    function initButtonsInputs(){
        document.querySelectorAll('.custom-edit').forEach(($el) => $el.onclick = clickToEdit);
        document.querySelector('.custom-edit-image').onclick = editImageUrl;
    }

    function editImageUrl(){
        var $img = document.querySelector('.custom-edit-image'); 
        var response = prompt("Edit the image URL", $img.src);
        response = (response === null)? $img.src : response;
        $img.src = response;
        updateState('image', response);
    }
    function clickToEdit(e){
        var $el = e.target;
        var editedFieldId = getCustomEditId($el);
        var response = prompt("Edit the field: "+editedFieldId, $el.innerText);
        response = (response === null)? $el.innerText : response;
        response = (response.match(/^\s*$/)?.length)? "click to edit..." : response;
        var newFieldValue = response;
        $el.innerText = newFieldValue;
        updateState(editedFieldId, newFieldValue);
    }
    function updateState(id, val){
        gState[id] = val;
        gState['updatedAt'] = new Date().toString();
        document.querySelector('.custom-edit-updatedAt').innerText = gState['updatedAt'];
        exportState();
    }

    function getCustomEditId($el){
        return Array.from($el.classList).filter((className) => className.startsWith('custom-edit-'))[0].slice('custom-edit-'.length)
    }


    function exportState(){
        // we do the reverse than in extractFromAnchor()
        var data = JSON.stringify(gState);
        var encoded = btoa(data);
        var anchor = '#'+encoded;
        // update the anchor
        document.location.hash = anchor;
    }


    function extractFromAnchor(anchor){
        // remove the #
        var data = anchor.slice(1);
        // the data will be base64-encoded to avoid special characters issues
        var decoded = atob(data) 
        // let's assume we serialize the data as json
        return JSON.parse(decoded);
    }


    // paste all the values from the url into the page
    function initFromState(state){
        document.querySelectorAll('.custom-edit').forEach( ($el) => {
            var fieldId = getCustomEditId($el);
            if (fieldId in gState){
                $el.innerText = gState[fieldId];
            }
        })
        if ('image' in gState) document.querySelector('.custom-edit-image').src = gState['image'];
    }
</script>



<script type="text/javascript">


const $currentLevel = document.querySelector('#scrap-calc input.calc-current');
const $targetLevel = document.querySelector('#scrap-calc input.calc-target');
const $outputC1 = document.querySelector('.scrap-table span.scrapcostC1');
const $outputC2 = document.querySelector('.scrap-table span.scrapcostC2');
const $outputC3 = document.querySelector('.scrap-table span.scrapcostC3');
const $outputS = document.querySelector('.scrap-table span.scrapcostS');  
const $outputR = document.querySelector('.scrap-table span.scrapcostR');  
const $outputE = document.querySelector('.scrap-table span.scrapcostE');
const $outputGold = document.querySelector('span.scrapcostGold');
  
const arraycommon1 = [ 0, 2, 3, 4, 6, 8, 10, 10, 15, 15, 20, 20, 25, 30, 30, 35, 40, 45, 50, 60, 130, 160, 200, 240, 290, 340, 410, 480, 570, 670 ];
const arraycommon2 = [ 0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 10, 10, 15, 15, 15, 20, 20, 25, 25, 30, 65, 80, 100, 120, 150, 170, 210, 240, 290, 340 ];

const arrayspecial = [ 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 8, 8, 10, 15, 25, 30, 40, 45, 55, 65, 80, 90, 110, 130];
const arrayrare = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 8, 8 ];
const arrayepic = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
const arraygold = [ 0, 5, 8, 12, 16, 20, 25, 30, 40, 50, 60, 70, 85, 105, 125, 155, 190, 235, 290, 355, 440, 605, 820, 1105, 1490, 1995, 2665, 3550, 4715, 6245 ];


function calc(){
    var scrapCounterC1 = 0;
    var scrapCounterC23 = 0;
    var scrapCounterS = 0;
    var scrapCounterR = 0;
    var scrapCounterE = 0;
    var scrapCounterGold = 0;
    for (let i = parseInt($currentLevel.value); i < parseInt($targetLevel.value); i++) {
        scrapCounterC1 += arraycommon1[i];
        scrapCounterC23 += arraycommon2[i];
        scrapCounterS += arrayspecial[i];
        scrapCounterR += arrayrare[i];
        scrapCounterE += arrayepic[i];
        scrapCounterGold += arraygold[i];
    }     
    $outputC1.innerText = scrapCounterC1;
    $outputC2.innerText = scrapCounterC23;
    $outputC3.innerText = scrapCounterC23;
    $outputS.innerText = scrapCounterS;
    $outputR.innerText = scrapCounterR;
    $outputE.innerText = scrapCounterE;
    $outputGold.innerText = scrapCounterGold;
}

$currentLevel.addEventListener('input', calc);
$targetLevel.addEventListener('input', calc);
calc();

</script>
  
<style type="text/css">

#scrap-calc input{
  width: 35px;
}

 .calc-result-container{
    position: relative;
 }
 .calc-result-container span{
    position: absolute;
    left: 2px;
 }
</style>
  
