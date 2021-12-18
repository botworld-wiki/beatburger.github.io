---
layout: default
permalink: /search
title: Search
description: Search would be cool, innit ?.
---

<!-- HTML elements for search -->
<input type="text" id="search-input" placeholder="Search blog posts..">
<ul id="results-container"></ul>

<!-- or without installing anything -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script type="text/javascript">
	
var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/assets/js/search.json'
})
</script>

# Search tests

## Bots ?
