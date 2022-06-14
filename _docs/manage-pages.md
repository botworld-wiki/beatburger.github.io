# Manage Pages

*Role: Maintainer*

- Github folder: https://github.com/beatburger/beatburger.github.io/tree/main/pages


## Edit .md files directly

You can totally do that as a [Maintainer](roles.md#maintainer), and that'll be the only way to do some edits that Editor Mode just can't handle.


TBW

## Understanding a page structure

Here's the top of the ["Bots Materials" page](https://www.botworld.wiki/materials) in its current version. It illustrates a bunch of different elements you can expect to find in most pages, so let's break it down to explain each part individually. 

**You don't need to understand or master it all** some parts are totally optional and you can skip them: any html is either for custom stuff, not required, or for Editor Mode, not required either. Very worth learning about still so ask and we will teach you so you can have fun later!

You can first see some [headers](#headers) (up until ---), and then a mix of Markdown and HTML. In their entirety, most pages are mostly [Markdown](wiki-md.md), But some HTML code is used when markdown isn't powerful enough to give us the desired design or features. A couple Editor Mode tags (ghcms) are present also, to enable Editor Mode access to these specific page locations.

```
---

layout: breadcrumbs
permalink: /materials
title: Bots Materials
description: "The Materials you need to upgrade your Bots in Botworld Adventure - Everything there is to know about it on the Botworld Community Wiki!"
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
permalink: "/materials"
title: "Bots Materials"
description: "The Materials you need to upgrade your Bots in Botworld Adventure - Everything there is to know about it on the Botworld Community Wiki!"
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

The header section must be formatted according to the **YAML syntax**. I know you've had to learn 2 markup languages already, and there's yet another one, so by that point YAML could as well stand for *Yet Another Markup Language*! Sorry about that, but that's just how the cookie crumbles I guess. Anyway here's a suggestion to read more about it: https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started

### Markdown

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

### Html

**If you don't already know HTML, just skip** this part and any HTML (stuff between `<> tags`) you see in pages. It's totally optional so don't worry about it.

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


### GHCMS

aka "Editor Mode tags"

**If you don't already know HTML, just skip**

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

TBW

## Create a new page

Let's create a new Guilds page as an example:

### First, headers


```
---

layout: breadcrumbs
permalink: /guilds
title: Guilds
description: "Guilds: gather your friends to complete ojectives and compete with others! - Everything there is to know about it on the Botworld Community Wiki!"
breadcrumbs:
  
---
```

- **layout**: `breadcrumbs`, like every page should be
- **permalink**: `/guilds`, no need to get fancy
- **title**: `Guilds`, same
- **description**: I don't know the first thing about Guilds but that seems sensible? Note: my description includes a ":". It's a significant character in the [YAML syntax](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started) so in order to not confuse it, the entire description is encapsulated (ie: neutralized, "escaped") in-between `"`
- **breadcrumbs**: ensure it's better suited to be under "Botmasters" or "Botworld" (cf main menu), so I'll go with blank for now?

Here's the codex breacrumbs as an example to remind you the proper format, slightly different than other parameters:
```
breadcrumbs:
  "Botworld": "/#botworld"
  "Exploring": "/exploring"
```

### Next, body

```
# Guilds

## Introduction

## Completing Objectives

## Joining a Guild

## Creating a Guild
```

A main title and a couple sections that seem to make sense.

### Some Editor Mode blocs

Let's add some ghcms blocs so Editors can start filling out our new page:

```
# Guilds

## Introduction

<div markdown="1" class=" ghcms ghcms-intro">
</div>

## Completing Objectives

<div markdown="1" class=" ghcms ghcms-objectives">
</div>

## Joining a Guild

<div markdown="1" class=" ghcms ghcms-joining">
</div>

## Creating a Guild

<div markdown="1" class=" ghcms ghcms-create">
</div>
```

### Let's create the file!

- Every pages are in https://github.com/beatburger/beatburger.github.io/tree/main/pages
- Let's name our file... `guilds.md` ?
- "Create New File" is fine, but you can also work in your favorite text editor then upload the result ![edit file button](https://cdn.discordapp.com/attachments/923509490307977227/986149486566985748/unknown.png)
- Sold, here's what I'm putting into https://github.com/beatburger/beatburger.github.io/commits/main/pages/guilds.md :

```
---

layout: breadcrumbs
permalink: /guilds
title: Guilds
description: "Guilds: gather your friends to complete ojectives and compete with others! - Everything there is to know about it on the Botworld Community Wiki!"
breadcrumbs:
  
---

# Guilds

## Introduction

<div markdown="1" class=" ghcms ghcms-intro">
</div>

## Completing Objectives

<div markdown="1" class=" ghcms ghcms-objectives">
</div>

## Joining a Guild

<div markdown="1" class=" ghcms ghcms-joining">
</div>

## Creating a Guild

<div markdown="1" class=" ghcms ghcms-create">
</div>
```

- The page may change in the future, but using the [history (commits)](github.md), you will always be able to consult this first, initial version of the file: https://github.com/beatburger/beatburger.github.io/commit/1490fe319e49f59c06209205e07f147e394daaa7
- I check and wait for the [Build & Deployment](github.md#deployment) to be complete
- The page is soon available at https://www.botworld.wiki/guilds, ready for Editors to fill it out!
- All that's left is to link to the page from all the right places: other pages, but especially the menu & homepage.


## Merge Edits

https://www.botworld.wiki/merge-edits
