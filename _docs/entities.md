# Entities

They're collections of game elements that the wiki needs to be able to reference from many pages, request specific attributes, filter, etc. As such, they're not simply written down in a specific page, but instead stored as data from which everything can be generated automatically.

We went with a 2-steps process to work with them collaboratively:

- Infos are collectivelly gathered into WikiSheets (google sheets).
- Maintainers can export entries from the WikiSheets on request, convert them with the provided tool, and use the result to create/update the Entity on the wiki.


## WikiSheets

They're publicly open for comments, and editable on invitation.

- Bots: https://docs.google.com/spreadsheets/d/1m5DJ7U41LqJgtbf2jezs6u3LvuOlTLH4iwik5-VtSd0/edit#gid=0
- Abilities: https://docs.google.com/spreadsheets/d/1n7BTSFQbv6tJnssi4PZz1PXjbFA8bebbw99CFSkf5kk/edit#gid=0
- Boosters: https://docs.google.com/spreadsheets/d/1LnejD6GO7dZ_Wmt-d55QWcOeGEGUIqIu-zp2E8mH97M/edit#gid=0
- Bots mats: https://docs.google.com/spreadsheets/d/1ngGZbxF6W7fa5H6aa2dNFQsX9RrLWDITyLaKs35ecBQ/edit?usp=sharing
- Boat mats: https://docs.google.com/spreadsheets/d/12eKq1OxHjfLERbBPOmjjN3yLjKbRcXmChsho00IrJeU/edit#gid=0


## Update an Entity

This should never be done manually in the .md file, but **always from the WikiSheet**. For the following reasons:

- the converters aren't susceptible to making syntax errors by inattention
- it's hard to keep track of changes if they can originate from separate places. If you update from the file, and the wikisheet is updated later, any update from the wikisheet will overwrite you direct change.

### Steps

- Go to the corresponding [WikiSheet](#wikisheets)
- *Select* and *Copy* the entire column corresponding to the desired entity (from line0 to line999+)
- Go to the corresponding [Converter](#converters)
- *Paste* into the input, click "convert"
- *Select* and *Copy* the entire output
- Go to the corresponding [Github Folder](#github-folders)
- Open the .md file named as per the entity to update, click *Edit*
- *Select* and *Replace* the entire file content by *Pasting*
- Click *Save*
- Wait for the automatic [Build & Deployment](github.md#deployement) to check the result  

**Demo clip**: https://cdn.discordapp.com/attachments/918672676418121789/919929188109148190/Edited_20211213_132805.mp4

This is a mobile footage for convenience of recording, and as a demonstration that the process can be done on mobile. It is however not recommended, and will be a much better experience from a desktop!

## Create an Entity

The process is the same as for updating one, with only a couple differences:

- [Upload the images](#images) (both regular & small) first into
- *Create* instead of *Edit* the .md file

### Converters

- Bots: https://www.botworld.wiki/converter-bots
- Abilities: https://www.botworld.wiki/converter-abilities
- Boosters: https://www.botworld.wiki/converter-boosters
- Materials: https://www.botworld.wiki/converter-materials
- Boat mats: https://www.botworld.wiki/converter-boat

### Troubleshooting Converters

- The  __begin__   or  __end__   tags are missing from the WikiSheet entry: add them manually in the WikiSheet and try again
- Multi-line break everything. Double-check your WikiSheet cells



### Github Folders


- Bots: https://github.com/beatburger/beatburger.github.io/tree/main/_bots
- Abilities: https://github.com/beatburger/beatburger.github.io/tree/main/_abilities
- Boosters: https://github.com/beatburger/beatburger.github.io/tree/main/_boosters
- Materials: https://github.com/beatburger/beatburger.github.io/tree/main/_materials
- Boat: https://github.com/beatburger/beatburger.github.io/tree/main/_boat

#### Images

They're all to be uploaded into the relevant folder in https://github.com/beatburger/beatburger.github.io/tree/main/assets/img/

A strict naming convention is to be enforced: small caps, no spaces (use: -), no special characters, .png, ...

