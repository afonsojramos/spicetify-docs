---
title: Marketplace
description: 📶 Inject addons from within Spotify!
---

Marketplace is a custom app that offers a dedicated page within Spotify, allowing users to peruse and apply addons created by the community. The application facilitates the installation of themes, extensions, and snippets, with the exception of custom apps.

## Why use it?

<details>
<summary>Positives</summary>

1. Huge repository of addons.

2. Installation is quick and hassle-free.

3. Perfect for the average user who doesn't have time to waste in the terminal.

4. Change colour schemes in-app.

5. Since addons are fetched remotely, they will always be up to date.

6. Reduces user error.

</details>

<details>
<summary>Negatives</summary>

1. Fresh installs of Spotify / incorrect updating can cause Marketplace to forget your installed addons.

2. Marketplace requires internet connection to apply the addons.

3. Inability to modify addons' source code.

4. Inability to see what addons do at a code level before installing.

5. Relies on an active connection to GitHub (and jsdelivr for extensions).

</details>

## Installation

### Windows
#### Powershell
```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.ps1" | Invoke-Expression
```

### Linux/MacOS
#### Shell
```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
```


## Reset Marketplace {#reset}
### Command
```
Marketplace.reset(theme, extensions, snippets) -
    Description: Resets localstorage objects for specific addon types.
    Parameters:
        - none: Resets all Marketplace localstorage items.
        - theme (optional): Reset the current theme installed by Marketplace.
        - extensions (optional): Reset all extensions installed by Marketplace. 
        - snippets (optional): Reset all snippets.
    Usage: `Marketplace.reset("theme", "extensions")` or `Marketplace.reset()`
```
### Guide
In the event you cannot access Marketplaces settings menu, you will need to run this command in terminal:

```bash
spicetify enable-devtools
```

Once spotify has opened, press <kbd>CTRL</kbd> <kbd>SHIFT</kbd> <kbd>I</kbd> / <kbd>CMD</kbd> <kbd>OPTION</kbd> <kbd>I</kbd> to bring up devtools, and navigate to the console tab:

<details>
<summary>Example Image</summary>
<img src="https://i.imgur.com/UKnWDUs.png"></img>
</details>

Once in the console tab, type in `Marketplace.reset()` + optional args and press enter:

<details>
<summary>Example Image</summary>
<img src="https://i.imgur.com/eXYEyUp.png"></img>
</details>