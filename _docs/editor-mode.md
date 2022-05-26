# Editor Mode

![Editor Mode in action](https://cdn.discordapp.com/attachments/917809790284079114/979408919778697226/editor-mode.png)


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


## Clips

Meant to include direct video links (eg: from discord, but not from youtube)

Example from https://www.botworld.wiki/comps#demo-clips :

`[video Chainer+Mort/SCT+Beat](https://cdn.discordapp.com/attachments/879389444812206110/931894458797146152/XRecorder_Edited_15012022_135455.mp4)`

It will show as a regular link while you have Editor Mode active, but as a video to regular users, assuming they didn't disable javascript and then that's on them.
- link description must start with `video`
- no `!`, it's a link and not an image
- Be mindful of the filesize. 75% of our users are on mobile, they don't want to have 80mb videos... My combos clips are both under 2mb


## Expose Content to Editor Mode

*Role: Maintainer*

## Edit Content without Editor Mode

*Role: Maintainer*

## Merge Edits

*Role: Maintainer*

https://www.botworld.wiki/merge-edits
