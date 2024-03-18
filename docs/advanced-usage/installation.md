---
title: Installation
description: ⚡ A simple guide to installing Spicetify on any platform.
---

:::tip
Please read our CLI [**usage**](./command-line.md#post-installation) guide after installing!
:::

## Windows

### Powershell - Recommended

```powershell
iwr -useb https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.ps1 | iex
```

### Chocolatey

```
choco install spicetify-cli
```

### Winget

```powershell
winget install Spicetify.Spicetify
```

### Scoop


```powershell
scoop install spicetify-cli
```

:::note

If your Spotify has also been installed through Scoop, find the location of your Spotify installation by running:

```console
$ scoop prefix spotify
C:\Users\<username>\scoop\apps\spotify\current
```

After you have located it, set your `spotify_path` to that directory in Spicetify's config file:

<details>
<summary>Example Image</summary>
<img src="https://user-images.githubusercontent.com/56180050/158084602-99428adf-93bb-4983-968f-14e1f4f5b253.png"></img>
</details>
:::


## Linux and macOS

:::caution

You **cannot** use Spotify installed via Snap, please re-install it using the [**debian package**](https://www.spotify.com/us/download/linux/).

Flatpak Spotify users need to do some [**additional setup**](#flatpak-spotify).
:::

### Shell - Recommended

```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
```

### Homebrew/LinuxBrew

```bash
brew install spicetify-cli
```

### AUR

```bash
yay -S spicetify-cli
```

:::tip

If you also have Spotify installed from the AUR, we recommend you install [**spotify-edge**](https://aur.archlinux.org/packages/spotify-edge) instead.

This version of Spotify is more up-to-date as it repackages the Snap releases into a usable format.

:::

## Flatpak Spotify

- You need to find where Flatpak stores your Spotify client. In Manjaro, it is stored in:

```
/var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/
```

- Yours might be different, try these steps:

1. Find flatpak installation place with command: `flatpak --installations`
2. Go to that directory and dig in until you find folder which contain items like these:

![flat2](https://user-images.githubusercontent.com/26436809/57563050-81408780-73dc-11e9-92e8-d0cc60502ff3.png)

After you have Spotify location, set `spotify_path` in config file to that directory:

![flat2](https://user-images.githubusercontent.com/26436809/57563057-9ddcbf80-73dc-11e9-82d8-d31cdf7e9cef.png)

3. Find your `prefs` file:
   It could be either in these two locations:

- `~/.config/spotify/prefs`
- `~/.var/app/com.spotify.Client/config/spotify/prefs`

Check both, expand the right one to absolute path and set it to `prefs_path` in config file.

```bash
spicetify config prefs_path ~/.var/app/com.spotify.Client/config/spotify/prefs
```

4. Finally in terminal, set read/write permission for it:

```bash
sudo chmod a+wr /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify
sudo chmod a+wr -R /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/Apps
```

## Legacy Installation

If you choose to use a legacy Spotify installation (v1.1.56 or lower) you will be required to install our legacy branch of Spicetify (v1.2.1 or lower).

### Windows

#### Powershell
```powershell
$v="1.2.1"; Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.ps1" | Invoke-Expression
```

### Linux and MacOS

#### Shell
```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh -o /tmp/install.sh
sh /tmp/install.sh 1.2.1
```

### Misc
Spicetify V1 code is available in our [`legacy`](https://github.com/spicetify/spicetify-cli/tree/legacy) branch if you want to build from source.

Legacy themes can be located [here](https://github.com/spicetify/spicetify-themes/tree/legacy).
