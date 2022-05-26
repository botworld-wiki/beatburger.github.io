# Editor Mode

![Editor Mode in action](https://cdn.discordapp.com/attachments/917809790284079114/979408919778697226/editor-mode.png)

This mode aims to provide a **simple and straightforward** way for everyone to edit **specific sections** of the content. In order to lower the skill requirements to contribute this way, the **edition capabilities are restricted to simple and localized edits**. 

- You can use it to edit sections of a pages and change their text, pictures, video clips. You can't use it to change anything with site-wide repercussions like an [Entity](/README.md#content-types) (bot, abilities, etc.)
- [Maintainers](roles.md#maintainer) enable suitable page sections manually on a case-by-case basis

## Activate

*Role: Editor*

- Get the latest credentials from the private thread (pins)
- Activation page: https://www.botworld.wiki/admin

## Edit Content

*Role: Editor*


Recorded demo footage: https://cdn.discordapp.com/attachments/918419557792776202/920055054436798524/Edited_20211213_214536.mp4



### Pictures

You include pictures alongside your text with the default markdown syntax:

`![image description](<image-location-url>)` or `![image description](image-location-url)` 

ex: `[Catch a Rare Jackalope](<https://cdn.discordapp.com/attachments/923510071026155550/925702854537265192/Screenshot_20211229-170312.jpg>)` from https://www.botworld.wiki/codex

**Custom layout options**

A few layout directives are offered to allow for some design customization. They're to be declared at the very start of the image description (ie: the alt attribute). From the same page, here's the **inline** directive used to have a 30px image that follows the flow of the text it's inserted in:

`![inline Jackalope picture](<https://cdn.discordapp.com/attachments/923510071026155550/925701450565287946/1640773608420.png>)`

Available directives declarations:

> - img[alt^="**50px**"]{width: 50px;}
> - img[alt^="**100px**"]{width: 100px;}
> - img[alt^="**200px**"]{width: 200px;}
> - img[alt^="**300px**"]{width: 300px;}
> - img[alt^="**inline**"]{height: 30px;display: inline-block;vertical-align: middle;}
> - img[alt^="**left**"]{float:left;margin-right: 30px}
> - img[alt^="**right**"]{float:right;margin-left: 30px}
> - img[alt^="**half-left**"]{float:left;margin-right: 30px;width: 50%;}
> - img[alt^="**half-right**"]{float:right;margin-left: 30px;width: 50%;}


## Video Clips

Meant to include direct video links (eg: from discord, but not from youtube)

Example from https://www.botworld.wiki/comps#demo-clips :

`[video Chainer+Mort/SCT+Beat](https://cdn.discordapp.com/attachments/879389444812206110/931894458797146152/XRecorder_Edited_15012022_135455.mp4)`

It will show as a regular link while you have Editor Mode active, but as a video to regular users, assuming they didn't disable javascript and then that's on them.
- link description must start with `video`
- no `!`, it's a link and not an image
- Be mindful of the filesize. 75% of our users are on mobile, they don't want to have 80mb videos... My combos clips are both under 2mb


## Precautions


Some issues may arise when multiple persons are using editor mode at the same time. (roughly: your own editor loads the current version of the page, someone else updates it separately, you edit and publish your version: theirs is lost). Only under specific circumstances and unlikely given the size of our group, but potentially painful for big updates!


**tldr: Save your work (for your sake), and Refresh Before commit (for others sake)**



- Write your new content on a separate text editor
- Try it on the Editor Mode to proofread/see how it looks
- Refresh the page to make sure you have the last version of the edits.json file (that you're all updating, so don't wanna delete other's work)
- copy your content again
- Save (commit)
- (opt) check the commit was registered (instant)
- (opt) check the content got updated (10s-3min)
- (opt) delete your local backup

Sorry that's a bit messy but that's what we get when building software fast and not testing it properly, we do the tests live...


