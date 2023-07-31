---

layout: default
permalink: /admin
title: Admin
description: Toggle Editor Mode there.
robots: "NOINDEX, NOFOLLOW"
sitemap: false

---
# Admin

## Auth

<div>
	<input type="text" name="user" id="user" placeholder="your-name..."/>
	<input type="password" name="password" id="password" placeholder="that-very-long-and-temporary-password123..."/>
	<button id="connection">Login</button>
	<button id="deconnection">Logout</button>
</div>



<script type="text/javascript">

var afterDispatch = function(){ $.getScript('/assets/js/admin.js'); }

</script>



<div id="bgPicker">
	<input type="text" placeholder="https://cdn.discordapp.com/attachments/918419557792776202/920287854268129280/BotpediaBackgroundAlt3.png">
	<div></div>
</div>

<style type="text/css">
	#fontPicker {
		position: fixed;
		z-index: 200;
		bottom: 10px;
		left: 10px;
		display: none;
	}
	#fontPicker input {
		width: 200px;
		height: 30px;
		display: block;
	}
</style>

<script type="text/javascript">
	
var $bgOverload = `
<style>
body {
    background: url(__url__) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>`

function loadBg(){
	if (window.location.hash.startsWith('#bg')){
	 document.querySelector('#bgPicker').style.display = 'block';
	 if (window.location.hash.match(/#bg=./)){
	 	document.querySelector('#bgPicker div').innerHTML = $bgOverload.replaceAll('__url__', 
	 		window.location.hash.replace('#bg=','').replaceAll('%20', ' ')
	 		);
	 }
	}
}

if (window.location.hash.startsWith('#bg')){
	window.location.hash.onchange = loadBg;
	document.querySelector('#bgPicker input').addEventListener('input', function(){
		window.location.hash = '#bg='+document.querySelector('#bgPicker input').value;
		loadBg();
	})
	loadBg();
}
</script>	
<div id="fontPicker">
	<a href="https://www.w3schools.com/howto/howto_google_fonts.asp" target="_blank">Fonts list</a>
	<input type="text" placeholder="Font name, ie: Alegreya Sans SC">
	<div></div>
</div>

<style type="text/css">
	#bgPicker {
		position: fixed;
		z-index: 200;
		bottom: 10px;
		left: 10px;
		display: none;
	}
	#bgPicker input {
		width: 200px;
		height: 30px;
		display: block;
	}
</style>

<script type="text/javascript">
	
var $fontOverload = `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=__name__">
<style>
body * {
  font-family: "__name__" !important;
}
</style>`

function loadFont(){
	if (window.location.hash.startsWith('#font')){
	 document.querySelector('#fontPicker').style.display = 'block';
	 if (window.location.hash.match(/#font=./)){
	 	document.querySelector('#fontPicker div').innerHTML = $fontOverload.replaceAll('__name__', 
	 		window.location.hash.replace('#font=','').replaceAll('%20', ' ')
	 		);
	 }
	}
}

if (window.location.hash.startsWith('#font')){
	window.location.hash.onchange = loadFont;
	document.querySelector('#fontPicker input').addEventListener('input', function(){
		window.location.hash = '#font='+document.querySelector('#fontPicker input').value;
		loadFont();
	})
	loadFont();
}
</script>
  
<div id="bannerPicker">
	<a href="https://www.botworld.wiki/#https://cdn.discordapp.com/attachments/918419557792776202/920439171171094588/welcome.png">Example</a>
	<input type="text" placeholder="https://cdn.discordapp.com/attachments/918419557792776202/920287854268129280/BotpediaBackgroundAlt3.png">
	<div></div>
</div>

<style type="text/css">
	#bannerPicker {
		position: fixed;
		z-index: 200;
		bottom: 10px;
		left: 10px;
		display: none;
	}
	#bannerPicker input {
		width: 200px;
		height: 30px;
		display: block;
	}
</style>

<script type="text/javascript">
	
var $bannerOverload = `
<style>
#banner {
    background-image: url(__url__) !important;
    background-repeat: no-repeat !important;
    background-position: top center !important;
    height: 350px !important;
}
</style>`

function loadBanner(){
	if (window.location.hash.startsWith('#banner')){
	 	document.querySelector('#bannerPicker').style.display = 'block';
 		 if (window.location.hash.match(/#banner=./)){
		 	document.querySelector('#bannerPicker div').innerHTML = $bannerOverload.replaceAll('__url__', 
		 		window.location.hash.replace('#banner=','').replaceAll('%20', ' ')
		 	);
		 }
		/* applies to page banners, not wiki banner
		if (window.location.hash.match(/#banner=./)){
			document.querySelector('#bannerPicked').src = window.location.hash.replace('#banner=','').replaceAll('%20', ' ');
		}*/
	}
}
if (window.location.hash.startsWith('#banner')){
	document.querySelector('section').innerHTML ='<img id="bannerPicked" src="https://cdn.discordapp.com/attachments/918419557792776202/920439171171094588/welcome.png" style="width:100%">' + document.querySelector('section').innerHTML;
	window.location.hash.onchange = loadBanner;
	document.querySelector('#bannerPicker input').addEventListener('input', function(){
		window.location.hash = '#banner='+document.querySelector('#bannerPicker input').value;
		loadBanner();
	})
	loadBanner();
}

</script>	


