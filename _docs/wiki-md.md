# Markdown Wiki Cheatsheet by @debb

Read more about markdown at: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images

## Text format

```
#
##
###
```
creates headlines. 

`*one*, **two**`
italic *one*,  bold **two**

`- text`
creates a new list entry with double arrows to the left

## Links

`[description](/materials) or [description](<https://bla.bla>)`
creates a clickable link

`[description](/materials#crafting-table)`
you can also link to specific places on a page by adding it's ID at the end. you can use any headline on any page as an ID, as long as it's unique. replace space with - or remove it. If both doesn't work let us know so we can link it for you.


## Rich links

tldr: linking to an entity page will be recognized by the wiki and enriched by adding a little picture of the relevant entity directly next to the link

Most pages automatically put images of bots or abilities behind links. Like `[Evader Spray](/evader-spray)` would generate a yellow link named `Evader Spray`that links to the evader spray material page if you click on it. The page will automatically put a small evader spray icon behind the yellow text. The link has to be precise and (/evaderspray) or (/evader-spray") will not work! This feature can be disabled on some pages like seasons.


## Images:

` ![Description](<image link>)`

> adds an image to the left side of the screen. 
> 
`![inline Description](<image link>)`
> adds an image to the right
> 
`![50px description](<image link>)`
> limits the size of an image

The description is just there to provide a textual description of the image:
- in case it fails to load
- to screen readers for people who can't see well
- to search engines who can't understand pics as well as text
It's optional, and not restricted by any syntax requirements as far as Pix knows.


## Tables

```
| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |
```

creates a table. you can extend it in both directions. beware of the space between | and text. 
