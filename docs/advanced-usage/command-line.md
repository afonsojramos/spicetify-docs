---
title: Command Line
description: 👾 Using Spicetify from the command line (CLI).
---

## Post Installation
:::tip

If you are coming off a fresh install of Spotify we recommend you open Spotify for atleast 60 seconds and login to generate the files that Spicetify depend on for application.

:::

Run with no command once to generate config file:

```bash
spicetify
```
Make sure config file is created successfully and there is no error.

Install addons and update your config file then run:

```bash
spicetify backup apply
```
:::note

If you use Linux or macOS, before applying Spicetify, you need to gain write permission on Spotify files, by running the commands:

```bash
sudo chmod a+wr /opt/spotify
sudo chmod a+wr /opt/spotify/Apps -R
```
*Your Spotify location may differ*

:::


From now, after changing colors in `color.ini` or CSS in `user.css`, you just need to run:

```bash
spicetify update
```

to update your theme.

In Spotify, hit <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>R</kbd> / <kbd>Command</kbd> <kbd>Shift</kbd> <kbd>R</kbd> to reload and receive visual update of your theme.

For other commands and additional flags information, please run:

```bash
spicetify --help
```

## Commands

### Chainable

- `backup`: Start backup and preprocessing app files.
- `apply`: Apply customization.
- `update`: By default, updates theme's CSS, JS, colors, and assets. Use with flag "-e" to update extensions.
- `restore`: Restore Spotify to its original state.
- `clear`: Clear current backup files.
- `enable-devtools`: Enable Spotify's developer tools.
- `restart`: Restart Spotify client.
- `watch`: Enter watch mode. To update on change, use with any combination of the following flags:
  - "-e" (for extensions)
  - "-a" (for custom apps)
  - "-s" (for the active theme; color.ini, user.css, theme.js, and assets)
  - "-l" (for extensions, custom apps, and active theme)

### Standalone

- `upgrade` Upgrade spicetify to the latest version.
- `path`: Prints path of Spotify's executable, userdata, and more.
  - `path all`: all paths.
  - `path`: executable path.
  - `path userdata`: userdata path.
  - Toggle focus with flags:
    - "-e" (for extensions), options: root, extension name, blank for all.
    - "-a" (for custom apps), options: root, app-name, blank for all.
    - "-s" (for the active theme), options: root, folder, color, css, js, assets, blank for all.
    - "-c" (for config.ini), options: N/A.

- `color`: Prints hex for color.inis.
  - Print all color fields and values: `spicetify color`
  - Change theme's one or multiple color values: `spicetify color <field> <value> [<field> <value> ...]`
    - `<value>` can be in hex or decimal (rrr,ggg,bbb) format.
    - Example usage:
      - Change `main` to `ff0000`: `spicetify color main ff0000`
      - Change `sidebar` to `00ff00` and `button` to `0000ff`: `spicetify color sidebar 00ff00 button 0000ff`