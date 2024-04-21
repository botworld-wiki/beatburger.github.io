---

layout: breadcrumbs
permalink: /stats
title: "Bots Stats"
description: Bots Stats Calculator
breadcrumbs:
  "Botworld": "/#botworld"

---

<!--- HTML Code -->
<div id="stats-page">
  <h1>Stats Calculator</h1>
  {% assign allBotsDetails = site.data.base-stats | sort: "botName" %}
  <div id="stats-input-section" style="margin: 8px 0px;">
    <div id="bot-input">
      <label for="selected-bot" required>Select a Bot:</label>
      <select id="selected-bot" style="height: 24px;">
        <option value="default"> -Select a bot- </option>
        {% for bot in allBotsDetails %}
          <option value="{{ bot.botName }}">{{ bot.botName }}</option>
        {% endfor %}
      </select>
    </div>
    <div id="levels-input" style="margin: 8px 0px;">
      <label for="from-level">From Level:</label>
      <input type="number" id="from-level" value="0" min="0" max="29">
      <label for="to-level">To Level:</label>
      <input type="number" id="to-level" value="30" min="1" max="30">

      <br><span> OR </span><br>

      <input type="checkbox" id="all-levels" style="height:14px; width:14px; margin-right:4px;"> All levels
    </div>
    <div>
      <button id="button-calculate-stats">See Stats</button>
    </div>
  </div>
  
  <hr>
  
  <div id="results-section" style="display:none;">
    <div id="results-title">
      <h2 class="bot-name"></h2>
    </div>
    <div id="results-data">
      <table id="results-table">
        <thead>
            <tr>
                <th>Level</th>
                <th>HP</th>
                <th>Attack</th>
                <th>DPS</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!--- Javascript Code -->
<script>
  // Grab all bot stats and details in data file from "_data/base-stats.json"
  const botsDetails = {{ allBotsDetails | jsonify }};
  var resultsSection = document.getElementById('results');
  const calculateButton = document.getElementById('button-calculate-stats');
  calculateButton.addEventListener("click", () => {  
    seeStats();
  });
  const allLevelsCheckbox = document.getElementById('all-levels');
  allLevelsCheckbox.addEventListener("change", () => {
    let fromValue = document.getElementById('from-level');
    let toValue = document.getElementById('to-level');
    if(allLevelsCheckbox.checked) {
      fromValue.disabled = true;
      toValue.disabled = true;
    }
    else {
      fromValue.disabled = false;
      toValue.disabled = false;
    }
  });

  
  /* Get the user inputs and check if the bot data exists in the data
   * Once everything is checked, send details to calculateStats()
   */
  function seeStats() {
    const selectedBot = document.getElementById('selected-bot').value.toLowerCase();
    if (selectedBot == 'default') {
      alert('Please select a bot');
      return;
    }
    else {
      let fromLevel, toLevel;
      if(allLevelsCheckbox.checked) {
        fromLevel = 1;
        toLevel = 30;
      }
      else {
        fromLevel = parseInt(document.getElementById('from-level').value);
        toLevel = parseInt(document.getElementById('to-level').value);
      
        // Level adjustments if incorrect
        if (fromLevel < 1) {
          fromLevel = 1;
        }
        else if (fromLevel > 30) {
          fromLevel = 30;
        }
        
        if (toLevel < fromLevel) {
          toLevel = fromLevel;
        }
        else if (toLevel < 1) {
          toLevel = 1;
        }
        else if (toLevel > 30) {
          toLevel = 30;
        }
      }
  
      var botStats = null;
      for(let i = 0; i < botsDetails.length; i++) {
        if(botsDetails[i].botName.toLowerCase() == selectedBot) {
          botStats = calculateStats(i, fromLevel, toLevel);
          break;
        }
      }
      if(botStats == null) {
        alert('Bot details not found! Please contact a wiki staff or send a feedback');
        return;
      }
      else {
        document.getElementById('results-section').style.display = "block";
        document.querySelector('#results-title .bot-name').innerText = selectedBot;
        createTable(botStats);
      }
    }
  }
  
  /* Main logic of the stats calculator
   * 
   *
   */
  function calculateStats(matchIndex, fromLevel, toLevel) {
    let helperHp = 1;
    let calculatedStats = [];
    const baseHp = botsDetails[matchIndex].baseStats.hp;
    const baseAttack = botsDetails[matchIndex].baseStats.attack;
    const baseDps = baseAttack / botsDetails[matchIndex].baseStats.attackSpeed;
    for(let level = fromLevel; level <= toLevel; level++) {
      if (level > 0 && level < 5) {
        // Exta 1.12, 1.09, 1.06, 1.03 multiplier for levels 1 to 4 respectively 
        helperHp = 1 + ((5 - level) * 0.03);
      }
      else {
        helperHp = 1;
      }
      // (level - fromLevel) = 0, 1, 2, ... which will act as indices for the array
      calculatedStats[level - fromLevel] = {
        "level": level,
        "hp": Math.round(baseHp * Math.pow(1.1, level-1) * helperHp),
        "attack": Math.round(baseAttack * Math.pow(1.1, level-1)),
        "dps": Math.round(baseDps * Math.pow(1.1, level-1))
      }
    }
    return calculatedStats;
  }
  
  // Creates table body to show calculated stats
  function createTable(botStats) {
    let resultsTableBody = document.querySelector('#results-table tbody');
    resultsTableBody.innerHTML = "";
    let row;
    botStats.forEach(levelStat => {
      row = document.createElement("tr");
      row.innerHTML = `
        <td>${levelStat.level}</td>
        <td>${levelStat.hp}</td>
        <td>${levelStat.attack}</td>
        <td>${levelStat.dps}</td>
      `;
      resultsTableBody.appendChild(row);
    });
  }  
  </script>
