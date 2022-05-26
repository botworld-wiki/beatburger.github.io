# Botworld Wiki Project

- Our objective is to provide the best resource possible for Botworld Adventure, at: https://www.botworld.wiki/
- The project is coordinated from the official discord server: https://discord.com/invite/FsJzvtFrgq


## Project Organization

### Overview 

**Content Types**

Most of the content present on the site can be broken down into the following categories:

- [Content sections](https://github.com/beatburger/beatburger.github.io/blob/main/README.md#content) (manually written content with potentially links & medias)
- [Entity pages](https://github.com/beatburger/beatburger.github.io/blob/main/README.md#entities) (bots, abilities, boosters, materials are all imported and a page is automatically generated)
- [Entities lists](https://github.com/beatburger/beatburger.github.io/blob/main/README.md#entities) (automatically lists the desired infos for the selected entities)

Some special and more advanced cases, best left to the most accustomed maintainers:

- Navigation blocks
- Dynamic features: Search, Upgrade Calculator...
- Custom Embeds (for discord integration)

**Platforms and Resources**

- Coordination: https://discord.com/invite/FsJzvtFrgq
- Code & Hosting: https://github.com/beatburger/beatburger.github.io/
- Collaborative documents incl. WikiSheets: https://drive.google.com/drive/folders/13ZKZipuTUg8KfSVQwKNKAoiKYJcuQ4fT?usp=sharing

## HowTos

### Content

**Use Editor Mode (Editors)**

This mode aims to provide a **simple and straightforward** way for everyone to edit **specific sections** of the content. In order to lower the skill requirements to contribute this way, the **edition capabilities are restricted to simple and localized edits**. 

*Requirements: [Markdown markup language](/_docs/wiki-md.md)*

- [Activate](/_docs/editor-mode.md#activate)
- [Edit Content](/_docs/editor-mode.md#edit-content)
  - [Pictures](/_docs/editor-mode.md#pictures)
  - [Video clips](/_docs/editor-mode.md#video-clips)
- [Precautions](/_docs/editor-mode.md#precautions)

![Editor Mode in action](https://cdn.discordapp.com/attachments/917809790284079114/979408919778697226/editor-mode.png)

**Manage Pages (Maintainers)**

*Requirements: [Markdown markup language](/_docs/wiki-md.md), github*

- [Edit .md files directly](/_docs/manage-pages.md#edit-md-files-directly)
- [Create a new page](/_docs/manage-pages.md#create-a-new-page)
- [Expose sections to Editor Mode](/_docs/manage-pages.md#expose-sections-to-editor-mode)
- [Merge Edits](/_docs/manage-pages.md#merge-edits)


### Entities

They're collections of game elements that the wiki needs to be able to reference from many pages, request specific attributes, filter, etc. As such, they're not simply written down in a specific page, but instead stored as data from which everything can be generated automatically.

We went with a 2-steps process to work with them collaboratively:

- Infos are collectivelly gathered into [WikiSheets](/_docs/entities.md#wikisheets) (google sheets).
- Maintainers can export entries from the WikiSheets on request, convert them with the provided tool, and use the result to create/update the Entity on the wiki.

More about it on the dedicated page:

- [WikiSheets](/_docs/entities.md#wikisheets)
- [Update an Entity](/_docs/entities.md#update-an-entity)
- [Create an Entity](/_docs/entities.md#create-an-entity)
- [Converters](/_docs/entities.md#converters)
  - [Troubleshooting Converters](/_docs/entities.md#converters)
- [Github Folders](/_docs/entities.md#github-folders)
  - [Images](/_docs/entities.md#images)


### Embeds

Used for discord integration

### Other

[Markdown Cheat Sheet](/_docs/wiki-md.md)

**Github for the wiki**

- [Get access](/_docs/github.md#access)
- [Deployment](/_docs/github.md#deployment)


## Roles

- Outside contributors: Get in touch with the project members on Discord accordingly
- [Editors](/_docs/roles.md#editors): Can update some content. No technical skills required
- [Maintainers](/_docs/roles.md#editors): Full content control. No programming skills required, must learn the project internals.
- [Developpers](/_docs/roles.md#editors): New features or design. Programming skills very much required!
