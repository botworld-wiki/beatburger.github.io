---

layout: breadcrumbs
permalink: /merge-edit
title: Merge Edits
description: Assisting tool to merge Editor Mode edits into source .md files
breadcrumbs:
  Contribute: "/admin"
robots: "noindex"

---

# Merge Edits

<style type="text/css">
.ghcms-merge textarea {
	width: 100%;
	height: 200px;
}
.ghcms-merge .save {
	color: green;
}
.ghcms-merge .clear {
	color: red;
}
.source-links, .update-links {
	display: flex;
	flex-wrap: wrap;
}
.source-links *, .update-links * {
	flex-grow: 1;
}
</style>

<script type="text/javascript">
	
var debug;
var afterDispatch = function(){ $.getScript('/assets/js/merger.js'); }

</script>
