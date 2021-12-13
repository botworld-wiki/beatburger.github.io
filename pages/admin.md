---

layout: default
permalink: /admin
title: Admin
description: Toggle Editor Mode there.

---
<div markdown="1">
## Idk
</div>

<h1 class="long-h1">Admin</h1>
<div class="bloc-text">
<h2><strong>Authentification</strong></h2>
<input type="text" name="user" id="user" placeholder="Prénom..."/>
<input type="password" name="password" id="password" placeholder="password123..."/>
<button id="connection">connection</button>
<button id="deconnection">Deconnection</button>
</div>
<div class=" ghcms ghcms-presentation">
<h2 id="new-player-">New player ?</h2>
<p>Let’s make one thing clear: <strong>this game won’t punish you for any choice you make</strong>. Even when mutually exclusive options are presented, you will get other occasions to try and pick the ones you haven’t yet, or get the same rewards by other means.</p>
<p>Botworld is well worth exploring at your own pace, and won’t punish you for trying stuff or fooling around, so really you can stop reading and go straight in !</p>
<p>Alternatively, have a look at <a href="https://www.botworld.wiki/bots">all the new bots you’ll encounter soon</a> or go and read <a href="https://www.botworld.wiki/guides/getting-started">Getting Started</a>.
</div>
<script defer="defer" async="async" async src="assets/js/dispatcher.js"></script>


<style type="text/css">
#ghCMS-news-panel #targetId,#ghCMS-news-panel #targetIndex,#ghCMS-news-panel #imgSize{
	display:none !important
}
#ghCMS-editor-panel,#ghCMS-news-panel{
	position:fixed;width:25%;height:80%;min-width:300px;background:#fff;border:5px solid grey;border-radius:10px;z-index:10;top:70px;right:0px;display:flex;flex-direction:column;overflow:hidden;font-family:arial,serif
}
#ghCMS-editor-panel.mini,#ghCMS-news-panel.mini{
	height:80px
}
#ghCMS-editor-panel.maxi,#ghCMS-news-panel.maxi{
	height:80%
}
#ghCMS-editor-panel *,#ghCMS-news-panel *{
	font-family:arial,serif
}
#ghCMS-editor-panel h2 a,#ghCMS-news-panel h2 a{
	display:inline-block;width:80px;font-size:17px
}
#ghCMS-editor-panel h2 button,#ghCMS-news-panel h2 button{
	float:right;padding:0px;width:50px
}
#ghCMS-editor-panel input,#ghCMS-news-panel input{
	display:none
}
#ghCMS-editor-panel textarea,#ghCMS-news-panel textarea{
	width:100%;height:600px;font-family:monospace
}
.ghcms-edit-option{
	width:70px
}
#ghCMS-news-panel input{
	display:block !important;height:80px
}
</style>
