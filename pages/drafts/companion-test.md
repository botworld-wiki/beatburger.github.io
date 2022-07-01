---

layout: default
permalink: /companion-test
title: Guild Companion
description: In-guild contributions tracker prototype
robots: "NOINDEX, NOFOLLOW"
sitemap: false

---


# Guild Companion 
  
## proto-v0.0.0

	<input type="text" name="guild" id="guild" placeholder="Guild Name..." />
	<input type="text" name="player" id="player" placeholder="Player Name..." />

	<button id="contributions-demo">+5</button>	

	<div id="progress">Progress: <span id="demo">??</span></div>


	<div>
		<button id="save">Save</button> & share this url:
		<input type="text" id="url" readonly/>
	</div>

	<script type="text/javascript">

		// Do we have an anchor already?
		var anchor = document.location.hash;
		var state = {
			guildName: "Undefined Guild",
			playerName: "Undefined Player",
			contributionsDemo: 0
		}
		if (anchor){
			// If yes, get the app state out of it
			state = extractFromAnchor(anchor);
			console.log(state);
		}
		// then initialize the app with it
		initFromState(state);
		initButtonsInputs();

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
			document.querySelector('#guild').value = state.guildName;
			document.querySelector('#player').value = state.playerName;
			document.querySelector('#demo').innerText = state.contributionsDemo;
		}

		// make sure the button clicks and input values do something
		function initButtonsInputs(){
			document.querySelector('#guild').onchange = ((event) => state.guildName = event.target.value)
			document.querySelector('#player').onchange = ((event) => state.playerName = event.target.value)
			document.querySelector('#contributions-demo').onclick = registerContribution;
			document.querySelector('#save').onclick = exportState;
		}

		function registerContribution(){
			state.contributionsDemo += 5;
			document.querySelector('#demo').innerText = state.contributionsDemo;
			console.log('contribution-demo: ', state.contributionsDemo);	
		}

		function exportState(){
			// we do the reverse than in extractFromAnchor()
			var data = JSON.stringify(state);
			var encoded = btoa(data);
			var anchor = '#'+encoded;
			// update the anchor
			document.location.hash = anchor;
			// update the input for the user to copy
			document.querySelector('#url').value = document.location;	
			console.log('exported state: ',state);
		}

	</script>

