---
title: Addons
description: 🏠 How to locally Install addons directly in reach of Spicetify.
---

## Why install locally?
Some people prefer to install addons locally, this can be for a variety of reasons:

+ Locally installed addons don't need an internet connection.
+ The addon in question may not be available on Marketplace.
+ The potential security concerns of remotely loading code you can't see.
+ The ability to modify the source code for addons.
+ Or even just for potential debugging of errors.

No matter the reason, this is the method addons were intended to be used with spicetify and is the way many original maintainers prefer out of habit.
 

## Location

Spicetify will check for local addons in your <a href="./config-file#location" target="_self">**config directory**</a>, as well as your installation directory.

## Installation
:::tip

It is highly recommended to learn how the <a href="./config-file" target="_self">**config**</a> works when installing addons locally


:::

### Themes
#### Directory Format / Required Files
```
Spicetify/
└── Themes/
    └── Theme-Name/
        ├── user.css
        ├── color.ini
        ├── theme.js (optional)
        └── assets/* (optional)
```

#### Application
```bash
Spicetify config current_theme Theme-Name
Spicetify config color_scheme Scheme-Name (optional)
Spicetify apply
```

#### Removal
```bash
Spicetify config current_theme Theme-Name-
Spicetify config color_scheme Scheme-Name- (optional)
Spicetify apply
```

:::note

color.ini files are split up into sections, and each section has a [scheme-name] at the top; use this name when modifying your config.

:::

### Extensions

#### Directory Format / Required Files:
```
Spicetify/
└── Extensions/
    ├── Extension.js
    └── *.js
```

#### Application
```bash
Spicetify config extensions Extension.js
Spicetify apply
```

#### Removal
```bash
Spicetify config extensions Extension.js-
Spicetify apply
```

:::note

Very few extensions will remote load their code, however most theme extensions will.

:::

### Custom Apps
#### Directory Format / Required Files
```
Spicetify/
└── CustomApps/
    └── CustomApp-Name/
        ├── style.css
        ├── index.js
        ├── manifest.json
        └── *.js
```

#### Application
```bash
Spicetify config custom_apps CustomApp-Name 
Spicetify apply
```
#### Removal
```bash
Spicetify config custom_apps CustomApp-Name-
Spicetify apply
```

:::note

Custom Apps will always add a tab on the sidebar of Spotify matching its directory name.

:::