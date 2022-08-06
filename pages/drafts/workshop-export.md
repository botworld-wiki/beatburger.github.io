---

  permalink: "/workshop-export"
  
---

<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Export Custom Bot</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    /*font-family: 'Abel', sans-serif;*/


    body {
            background-color: rgb(2, 55, 55);
            background-repeat: no-repeat;
            background-size: cover;
            text-overflow: ellipsis;
            overflow: hidden;
            color: white;
            font-family: 'Abel', Arial, Helvetica, sans-serif ;
        }
        main {
            width: 1410px;
            height: 1000px;
            padding: 20px;
            background-image: url(https://cdn.discordapp.com/attachments/923604529470124032/1005355273600389200/unknown.png);
            background-repeat: no-repeat;
            background-size: cover;
            text-overflow: ellipsis;
            overflow: hidden;
            color: white;
            font-family: 'Abel', Arial, Helvetica, sans-serif ;
            font-size: 1.15em;
        }
        h2 {
            margin: 5px;
            padding: none;
            font-size: 1.5em;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        p {
            text-align: justify;
        }
        h1 {
            margin: 0px;
            padding: 5px;
        }
        .ailevel {
            width: 80px;
            height: 68px;
            text-align: center;
            vertical-align: baseline;
            border-right: 1px solid black;
        }
        #export {
            display: flex;
            flex-flow: row wrap;
        }
        #export .header {
            order: 0;
            width: 1390px;
            height: 50px;
            background-color: rgba(4, 65, 118, 0.388);
            text-align: left;
            padding-left: 10px;
            border-radius: 10px;
        }
        #export .botcard {
            order: 1;
            background-color: rgba(250, 235, 215, 0.037);
            width: 320px;
            height: 460px;
            margin: 10px 10px 10px 0px;
            padding: 10px;
            text-align: center;
            border-radius: 10px;
        }
        #botcardimage {
            max-width: 300px;
            max-height: 300px;
        }
        #export .abilities {
            order: 2;
            background-color: rgba(0, 52, 98, 0.104);
            width: 350px;
            height: 460px;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
        }
        #export .concept-arts {
            order: 3;
            background-color: rgba(127, 255, 212, 0.23);
            width: 630px;
            height: 460px;
            margin: 10px 0px 10px 10px;
            padding: 10px;
            text-align: center;
            border-radius: 10px;
        }
        #conceptartimage {
            width: 600px;
            max-height: 440px;
        }
        #export .overview {
            order: 4;
            height: 400px;
            width: 340px;
            margin: 10px 10px 0px 0px;

        }
            #export .stat-bars {
                background-color: rgba(11, 141, 117, 0);
                height: 190px;
                padding: 0px 10px 0px 10px;
                border-radius: 10px;
            }
                .barbackground {
                    background-color: rgba(255, 80, 80, 0.127);
                    padding: 0px;
                    margin: 5px 0px 0px 0px;
                    height: 30px;
                    max-width: 320px;
                    border: 3px solid rgba(255, 255, 255, 0.544);
                    border-radius: 10px 30px;
                }
                #dps-bar, #health-bar, #speed-bar, #attack-bar {
                    padding: 0px;
                    margin: 0px;
                    height: 30px;
                    width: 159px;
                    background-image: linear-gradient(to left, rgba(21, 107, 146, 0.786), rgb(25, 39, 109));
                    border-radius: 10px 20px 20px 30px;
                }
                #dps-bar > p , #health-bar > p, #speed-bar > p, #attack-bar > p {
                    color: rgb(174, 240, 200);
                    font-weight: bold;
                    margin: 0px;
                    padding: 1px 0px 0px 10px;
                }
            #export .bot-overview {
                background-color: rgba(60, 137, 35, 0.177);
                height: 210px;
                padding: 10px;
                border-radius: 10px;
            }
        #export .ai-tree {
            order: 5;
            background-color: rgba(14, 206, 27, 0.203);
            width: 520px;
            height: 400px;
            margin: 10px 10px 0px 10px;
            padding: 10px;
            border-radius: 10px;
        }
        #export .comments {
            order: 6;
            background-color: rgba(238, 174, 77, 0.223);
            width: 460px;
            height: 400px;
            margin: 10px 0px 0px 10px;
            padding: 10px;
            border-radius: 10px;
        }
        p#comments {
            height: 23.5em;
            width: inherit - 30px;
            margin: 15px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        textarea {
            width: 100%;
            height: 300px;
        }
    </style>
</head>
<body>
    <main>
        <div id="export">
            <div class="header">
                <h1 id="header"></h1>
            </div>
            <div class="botcard">
                <div id="botcardholder">
                    <img id="botcardimage" src="" alt="Custom Bot Image">
                </div>
                <div id="botcardinfo">
                    <table>
                        <tr>
                            <th class="cardInfoHeader">Type</th>
                            <th class="cardInfoHeader">Rarity</th>
                            <th class="cardInfoHeader">Acquisition</th>
                        </tr>
                        <tr>
                            <td class="cardInfoCell" id="bottype"></td>
                            <td class="cardInfoCell" id="botrarity"></td>
                            <td class="cardInfoCell" id="botacquisition"></td>
                        </tr>
                    </table>
                    <p id="botdesc"></p>
                </div>
            </div>
            <div class="abilities">
                <ul id="ability-list">
                    <li id="ability1">
                        <span id="ability1name"></span><span id="ability1info"></span>
                        <p id="ability1desc"></p>
                    </li>
                    <li id="ability2">
                        <span id="ability2name"></span><span id="ability2info"></span>
                        <p id="ability2desc"></p>
                    </li>
                    <li id="ability3">
                        <span id="ability3name"></span><span id="ability3info"></span>
                        <p id="ability3desc"></p>
                    </li>
                </ul>
            </div>
            <div class="concept-arts" >
                <img id="conceptartimage" src="" alt="Custom Bot Concept Art">
            </div>
            <div class="overview">
                <div class="stat-bars">
                    <div class="barbackground"><div id="attack-bar"><p>Attack</p></div></div>
                    <div class="barbackground"><div id="health-bar"><p>Health</p></div></div>   
                    <div class="barbackground"><div id="dps-bar"><p>DPS</p></div></div> 
                    <div class="barbackground"><div id="speed-bar"><p>Speed</p></div></div>
                </div>
                <div class="bot-overview">
                    <h2>Bot Overview</h2>
                    <p id="botoverview"></p>
                </div>
            </div>
            <div class="ai-tree">
                <table>
                    <tr>
                        <th rowspan="2" class="ailevel">AI Level 1 (500xp)</th>
                        <td class="ainame" id="ainame1a">
                         </td>
                         <td class="ainame" id="ainame1b">
                         </td>
                    </tr>
                    <tr>
                        <td class="aidescription" id="aidescription1a">
                        </td>
                        <td class="aidescription" id="aidescription1b">
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2" class="ailevel">AI Level 2 (2000xp)</th>
                        <td class="ainame" id="ainame2a">
                        </td>
                        <td class="ainame" id="ainame2b">
                        </td>
                    </tr>
                    <tr>
                        <td class="aidescription" id="aidescription2a">
                        </td>
                        <td class="aidescription" id="aidescription2b">
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2" class="ailevel">AI Level 3 (5000xp)</th>
                        <td class="ainame" id="ainame3a">
                        </td>
                        <td class="ainame" id="ainame3b">
                        </td>
                    </tr>
                    <tr>
                        <td class="aidescription" id="aidescription3a">
                        </td>
                        <td class="aidescription" id="aidescription3b">
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2" class="ailevel">AI Level 4 (14000xp)</th>
                        <td class="ainame" id="ainame4a">
                        </td>
                        <td class="ainame" id="ainame4b">
                        </td>
                    </tr>
                    <tr>
                        <td class="aidescription" id="aidescription4a">
                        </td>
                        <td class="aidescription" id="aidescription4b">
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2" class="ailevel">AI Level 5 (30000xp)</th>
                        <td class="ainame" id="ainame5a">
                        </td>
                        <td class="ainame" id="ainame5b">
                        </td>
                        <tr>
                        <td class="aidescription" id="aidescription5a">
                        </td>
                        <td class="aidescription" id="aidescription5b">
                        </td>
                        </tr>
                    </tr>
                </table>
            </div>
            <div class="comments">
                <p id="comments"></p>
            </div>
        </div>
    </main>
    <br><br><br><br>
    <h2>Bots infos found in URL (<a href="">Bot Demo</a>)</h2>
    <textarea readonly></textarea>
    <h2>Exported Image</h2>
    <button>Not implemented yet</button>
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
            // print the data found in the url into the textarea, for debug. 
            document.querySelector('textarea').value = JSON.stringify(gState).replaceAll('","','",\n"');

            // get the bot name from the global variable gState, and update the name span with it
            //Bot Name + Credits
            document.querySelector('#header').innerText = gState.name + ', by ' + gState.creators;
            //BotCard
            document.querySelector('#botcardimage').src = gState.image
            document.querySelector('#bottype').innerText = gState.class
            document.querySelector('#botrarity').innerText = gState.rarity
            document.querySelector('#botacquisition').innerText = gState.acquisition
            document.querySelector('#botdesc').innerText = gState.desc
            //Stat Bars
            //Bot Overview
            document.querySelector('#botoverview').innerText = gState.overview;
            //Ability 1
            document.querySelector('#ability1name').innerText = gState.ability1name;
            document.querySelector('#ability1info').innerText = gState.ability1infos;
            document.querySelector('#ability1desc').innerText = gState.ability1desc;      
            //Ability 2
            document.querySelector('#ability2name').innerText = gState.ability2name;
            document.querySelector('#ability2info').innerText = gState.ability2infos;
            document.querySelector('#ability2desc').innerText = gState.ability2desc;
            //Ability 3
            document.querySelector('#ability3name').innerText = gState.ability3name;
            document.querySelector('#ability3info').innerText = gState.ability3infos;
            document.querySelector('#ability3desc').innerText = gState.ability3desc;
            //Concept Art
            document.querySelector('#conceptartimage').src = gState.conceptArt
            //Comments
            document.querySelector('#comments').innerText = gState.notes;
            //Ai table
            //Ai Level 1
            document.querySelector('#ainame1a').innerText = gState.ai1aName
            document.querySelector('#ainame1b').innerText = gState.ai1bName
            document.querySelector('#aidescription1a').innerText = gState.ai1aDesc
            document.querySelector('#aidescription1b').innerText = gState.ai1bDesc
            //Ai Level 2
            document.querySelector('#ainame2a').innerText = gState.ai2aName
            document.querySelector('#ainame2b').innerText = gState.ai2bName
            document.querySelector('#aidescription2a').innerText = gState.ai2aDesc
            document.querySelector('#aidescription2b').innerText = gState.ai2bDesc
            //Ai Level 3
            document.querySelector('#ainame3a').innerText = gState.ai3aName
            document.querySelector('#ainame3b').innerText = gState.ai3bName
            document.querySelector('#aidescription3a').innerText = gState.ai3aDesc
            document.querySelector('#aidescription3b').innerText = gState.ai3bDesc
            //Ai Level 4
            document.querySelector('#ainame4a').innerText = gState.ai4aName
            document.querySelector('#ainame4b').innerText = gState.ai4bName
            document.querySelector('#aidescription4a').innerText = gState.ai4aDesc
            document.querySelector('#aidescription4b').innerText = gState.ai4bDesc
            //Ai Level 5
            document.querySelector('#ainame5a').innerText = gState.ai5aName
            document.querySelector('#ainame5b').innerText = gState.ai5bName
            document.querySelector('#aidescription5a').innerText = gState.ai5aDesc
            document.querySelector('#aidescription5b').innerText = gState.ai5bDesc
            /* code from Bot Companion, for reference/inspiration
            document.querySelectorAll('.custom-edit').forEach( ($el) => {
                var fieldId = getCustomEditId($el);
                if (fieldId in gState){
                    $el.innerText = gState[fieldId];
                }
            })
             if ('image' in gState) document.querySelector('.custom-edit-image').src = gState['image'];
             if ('conceptArt' in gState) document.querySelector('.custom-edit-conceptArt').src = gState['conceptArt'];
            */
        }
    </script>
</body>
</html>