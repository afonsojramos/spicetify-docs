---
title: FAQ
---

## Where is the config file?

You can learn about the config file and where its located <a href="./advanced-usage/customization/config-file#location" target="_self">**here**</a>.

## Cannot find `pref_file`

### Windows

1. There is great chance that you are using Microsoft Store Spotify. Please double check that in Spotify About page.
2. If you are actually using Microsoft Store Spotify, remove it completely. Go to Spotify website to download normal version installer.
3. If you are not using the Microsoft Store Spotify, and are using the one from the Spotify website, check to see if you have a "prefs" file in `C:\Users\YOUR_USERNAME\AppData\Roaming\Spotify`.
4. If so, open your `config-xpui.ini` and set `prefs_path` to the absolute path of that prefs file. (e.g. `C:\Users\YOUR_USERNAME\AppData\Roaming\Spotify\prefs`) Then try running `spicetify` again.

### Linux

1. In `bash`, run `cd ~` and `find | grep "spotify/prefs$"`
2. If it returns a path to prefs file, copy its absolute path to `prefs_path` field in `config-xpui.ini`.

## After Spotify's update, running `spicetify apply` or `spicetify update` breaks Spotify.

After any Spotify update, always run `spicetify backup apply`.  
Optionally, set the Spotify shortcut to run `spicetify auto` (instead of direct path to spotify executable), so that Spicetify can backup and apply, when it needs to, then launch Spotify automatically.

It may be the case that Spicetify does not yet support a new Spotify update. In that case, please check the Spicetify issue tracker.

## I can't play some songs after downgrading Spotify

Delete all files in the following folder and launch spotify again.

- **Windows**: `%LOCALAPPDATA%\Spotify`
- **Linux**: `~/.config/spotify`
- **macOS**: `~/Library/Application Support/Spotify`
