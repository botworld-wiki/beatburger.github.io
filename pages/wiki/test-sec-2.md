---
permalink: "/test-sec-2"
layout: booster
contributors: "Pix, debb, Kartoffel, GlareFacer"
updatedAt: "2021-12-21"


title: "Security Test Sandbox"
name: "Bot Crit"
description: "Put yourself in the shoes of a malicious wikisheet contributor - Your goal is to execute javascript in the session of whoever opens this page"
imageUrl: "/assets/img/boosters/bot-crit-epic.png"
breadcrumbs:
  Botpack: "/botpack"
  Boosters: "/boosters"


boosterName: "Bot Crit"
boosterDescription: "exec(alert('test'))"
boosterImageUrl: "/assets/img/boosters/bot-crit-epic.png"
boosterStacks: "Additive"
boosterRarity: "Epic"
boosterRaritySortOrder: "4"
boosterAcquisition: ""
boosterOpinion: ""
searchKeywords: ""
---

- Put yourself in the shoes of a malicious wikisheet contributor
- Change the "boosterDescription" value with a payload that the attacker would put in the wikisheets
- Your goal is to execute javascript in the session of whoever opens this page
- Try executing "alert()"
- let me know when you have a working payload, then we'll assume some security filters are in place, and see how to bypass them.
