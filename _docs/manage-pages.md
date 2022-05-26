# Manage Pages

*Role: Maintainer*

- Github folder: https://github.com/beatburger/beatburger.github.io/tree/main/pages


## Edit .md files directly

## Create a new page


## Understanding a page structure

Here's the top of the ["Bots Materials" page](https://www.botworld.wiki/materials) in its current version. It illustrates a bunch of different elements you can expect to find in most pages, so let's break it down to explain each part individually. 

You can see in here some [headers](#headers) (up until ---), and everything below is the body. It's mostly [Markdown](wiki-md.md), with some html code when markdown isn't powerful enough to give us the desired design or features. A couple Editor Mode tags (ghcms) are present also, to enable Editor Mode access to these specific page locations.

```
---

layout: breadcrumbs
permalink: /materials
title: Bots Materials
description: The Materials you need to upgrade your Bots in Botworld Adventure - Everything there is to know about it on the Botworld Community Wiki!
breadcrumbs:
  Botworld: "/#botworld"
  Exploring: "/exploring"
  
---


# Bots Materials



<div markdown="1" class=" ghcms ghcms-intro">
</div>


<ul class="page-toc toc-block-list links">
  <li class="toc-block-entry" ><a href="#bots" title="Every Bots Material info">Bots Mats</a></li>
  <li class="toc-block-entry" ><a href="#crafting" title="Required Mats for every Bot ">Crafting Table</a></li>
  <li class="toc-block-entry" ><a href="#costs" title="Upgrade Costs by level">Upgrade Costs</a></li>
</ul>


- **The most efficient ways to get mats**: [Farming](/farming)
- **Ancient Ruins**: Check out our [explanation & maps about Ancient Ruins](/loot#ancient-ruins) 


<span id="bots"></span>

## Bots Materials


<div markdown="1" class=" ghcms ghcms-bots">

What you need to upgrade your bots.

</div>
```

### Header

```
---

layout: breadcrumbs
permalink: /materials
title: Bots Materials
description: The Materials you need to upgrade your Bots in Botworld Adventure - Everything there is to know about it on the Botworld Community Wiki!
breadcrumbs:
  Botworld: "/#botworld"
  Exploring: "/exploring"
  
---
```

That's a list of meta-data [used by Github/Jekyll to build the wiki pages](github.md):

**layout**
- defines the template to use to generate the wiki page
- required
- every page should use "breadcrumbs" (but entities use different values there)

**permalink**
- declares the url the page should be accessed with
- required
- must be unique
- must follow our [url format conventions](conventions.md)

**title**
- defines the title displayed in the browser tab, google results page, and discord embed
- required
- should be informative and a reasonable size

**description**
- defines the description displayed in google results page, and discord embed
- required
- should be informative and a reasonable size

**breadcrumbs**
- adds navigation links at the very top of the page
- optional (can have 0 to X entries)
- should be helpful to the user and be representative of some hierarchical relation between the page and the links
- shows "Wiki > Botworld > Exploring" links as a result in our current example
- the "Wiki" link to the homepage is always added as the first parent

**---**
- separator, must be present at the start and at the end of the headers block

### Body

#### Markdown

Let's strip and ignore everything in-between html tags for now (<>), we're left with the markdown content:

```
# Bots Materials

- **The most efficient ways to get mats**: [Farming](/farming)
- **Ancient Ruins**: Check out our [explanation & maps about Ancient Ruins](/loot#ancient-ruins) 

## Bots Materials

What you need to upgrade your bots.
```

- `# Bots Materials` : the top title of the page, every page needs one and one only.
- a list with a couple of links to related pages, why not
- `## Bots Materials` : the title of a section in the page. It gets automatically applied the blue line separator
- and regular plain text

#### Html

```
<ul class="page-toc toc-block-list links">
  <li class="toc-block-entry" ><a href="#bots" title="Every Bots Material info">Bots Mats</a></li>
  <li class="toc-block-entry" ><a href="#crafting" title="Required Mats for every Bot ">Crafting Table</a></li>
  <li class="toc-block-entry" ><a href="#costs" title="Upgrade Costs by level">Upgrade Costs</a></li>
</ul>
```

Ẁe can freely mix HTML inside our markdown files. Here it's used to make a Table of Contents (with the toc styles)

- pro: can be used to apply specific styles or enable specific features
- cons: require technical skills not only for you to write but also for others to maintain/update

Best used with parcimony.

`<span id="bots"></span>` : also html, this element is actually empty and thus invisible. Its only purpose is to place an anchor at that position in the page, so that we can link directly to it like: https://www.botworld.wiki/materials#bots


#### GHCMS

aka "Editor Mode tags"

```
<div markdown="1" class=" ghcms ghcms-intro">
</div>

<div markdown="1" class=" ghcms ghcms-bots">

What you need to upgrade your bots.

</div>
```

Used to encapsulate portions of the page exposed to Editor Mode, for others to update conveniently.

TBW

## Expose sections to Editor Mode

## Merge Edits

https://www.botworld.wiki/merge-edits
