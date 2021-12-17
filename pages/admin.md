---

layout: default
permalink: /admin
title: Admin
description: Toggle Editor Mode there.
robots: "NOINDEX, NOFOLLOW"

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
