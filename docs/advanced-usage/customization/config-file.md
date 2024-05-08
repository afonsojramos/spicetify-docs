---
title: Config
description: 🦺 Learn how the config works and how to modify it.
---

Spicetify's config file is a text file that contains various settings that affect Spicetify's behavior. 
You can modify the config file to customize your Spicetify installation according to your needs. 

Spicetify reads the data in this file at injection, for backing up, and for dev commands like watch.
Spicetify cannot function without it and requires read/write permissions for it.

## Location

The config file is typically located in one of the following paths depending on your operating system:

| Platform            | Path                                       |
| ------------------- | ------------------------------------------ |
| **Windows**         | `%appdata%\spicetify\config-xpui.ini`      |
| **Linux**/**MacOS** | `~/.config/spicetify/config-xpui.ini`      |

However, you can know specifically where it is with:

```
spicetify -c
```

Or, you can open the folder where it is located with:

```
spicetify config-dir
```

If the config file is not present in any of the above locations, run `spicetify` in a terminal to generate one.


## Using The Config
:::note

Please read [**this**](./addons.md) to learn where to download custom addons.

:::

### Modification

To modify the config file through the command line, use the `spicetify config` command followed by the name of the setting you want to modify and its value. The general format for the command is:

```bash
spicetify config <setting> <value>
```

For example, to set the color_scheme setting to Dark, run:
```bash
spicetify config color_scheme Dark
```

To remove themes, extensions, or custom apps through the command line you will need to follow the same format stated above + `-` after the `value` field:
```bash
spicetify config color_scheme Dark-
```

If these methods fail you can open the `config-xpui.ini` file in any text editor, and manually modify the values of each setting.
### Application

In an attempt to not hinder load times, Spicetify will not automatically load changes made to the config, you will need to manually apply any changes you make prior to loading Spotify with the command:
+ `spicetify apply`

If this is your first time using the config or this is a fresh install please run:
+ `spicetify backup apply`

## Available Settings
Here is a list of available settings contained within the config and what they do.

### String-based
`spotify_path` **Path to Spotify directory.**

`prefs_path`: **Path to Spotify's prefs file.**

`current_theme`: **Folder name of a theme - must be exact.**

`color_scheme`: **Color.ini section name - first section used if unset.**

`custom_apps`: **Folder name of a custom app - seperate each app with `|`.**

`extensions`: **File name of extension + `.js` - seperate each app with `|`.**

`version`: **Spotify version - e.g 1.2.8.923.g4f94bf0d.**

`with`: **Spicetify version - e.g 2.16.2.**

```
spotify_launch_flags -
    Default: None
    Description: Command-line flags used when launching/restarting Spotify.
    Docs: https://spicetify.app/docs/development/spotify-cli-flags
```

### Boolean-based
A boolean based setting accepts a 1 or a 0 inplace of a string.

```
inject_css -
    Default: 1.
    Description: Inject user.css from the theme folder of currently applied theme.
```
```
replace_colors -
    Default: 1.
    Description: Inject color.ini from the theme folder of currently applied theme, 
    which overwrites spotifys default css color variables.
```
```
disable_sentry -
    Default: 1.
    Description: Prevents Sentry and Amazon Qualaroo to send console log/error/warning to Spotify developers.
```
```
disable_ui_logging -
    Default: 1.
    Description: Stop logging of element clicks and scrolls.
```
```
remove_rtl_rule -
    Default: 1.
    Description: Removes obsolete CSS rules for Right-To-Left languages to improve render speed, 
    disable if you arent using a Left-To-Right language.
```
```
expose_apis -
    Default: 1.
    Description: Exposes Spotify's API, functions, and objects for use with Spicetify addons.
```
```
disable_upgrade_check -
    Default: 1.
    Description: Prevent Spotify checking new version and visually notifying user.
```
```
experimental_features -
    Default: 1.
    Description: Expose and add the ability to enable unreleased Spotify features, 
    "Experimental Features" on Profile menu.
```
```
home_config -
    Default: 1.
    Description: Enable the ability to re-arrange sections in Home page,
    "Home config" on Profile menu.
```
```
sidebar_config -
    Default: 1.
    Description: Enable ability to stick, hide, re-arrange sidebar items,
    "Sidebar config" on Profile menu.
```

```
check_spicetify_upgrade -
    Default: 0.
    Description: Notify the user whenever there is new Spicetify release.
```
```
overwrite_assets -
    Default: 1.
    Description: Themes that contain an assets folder will have its contents overwrite matching files in Spotifys xpui folder.
```
