---
title: Extensions
description: 🧩 Manually installing Extensions.
---

Extensions, in a nutshell, are JavaScript files that will be evaluated along with Spotify main JavaScript.

## Installing

Extension files can be stored in:

- `Extensions` folder in Home directory:

| Platform            | Path                                   |
| ------------------- | -------------------------------------- |
| **Windows**         | `%appdata%\spicetify\Extensions\`      |
| **Linux**/**MacOS** | `~/.config/spicetify/Extensions`       |

- `Extensions` folder in Spicetify executable directory.

If there are 2 extensions with the same name, the extension within the Home directory will be prioritized.

Some Spotify API endpoints are exposed and can be found in the global object `Spicetify`. Check out `global.d.ts` for API documentation.

After placing the extension file into correct folder, run following command to install it:

```bash
spicetify config extensions <file name>
spicetify apply
```

**Note:** Using `config` command to add extension always append file name to existed extensions list. It does not replace the whole key's value.

## Uninstalling

If you want to remove an extension from the current list of extensions you can always append a `-` after the file name:

```bash
spicetify config extensions <file name>-
spicetify apply
```

## Manual Install

You can always manually edit the config file, add your desired extension filenames in `extensions` key, separated them by `|` character.  
Example:

```ini
[AdditionalOptions]
...
extensions = autoSkipExplicit.js|queueAll.js|djMode.js|shuffle+.js|trashbin.js
```

Afterwards, you will need to run the following:

```
spicetify apply
```

## Extensions

Below are list of default extensions that come with the distributed package:

- [Auto Skip Videos](#auto-skip-videos)
- [Bookmark](#bookmark)
- [Christian Spotify](#christian-spotify)
- [Full App Display](#full-app-display)
- [Keyboard Shortcut](#keyboard-shortcut)
- [Loopy Loop](#loopy-loop)
- [Pop-up Lyrics](#pop-up-lyrics)
- [Shuffle+](#shuffle)
- [Trash Bin](#trash-bin)
- [Web Now Playing](#web-now-playing)

### Auto Skip Videos

**Filename:** `autoSkipVideo.js`

Videos are unable to play in some regions because of Spotify's policy. Instead of jumping to next song in playlist, it just stops playing. And it's kinda annoying to open up the client to manually click next every times it happens. Use this extension to skip them automatically.

### Bookmark

**Filename:** `bookmark.js`

Easily store and browse pages, play tracks or tracks in specific time. Useful for who wants to check out an artist, album later without following them or writing their name down.

![Ext_bookmark](https://i.imgur.com/isgU4TS.png)

### Christian Spotify

**Filename:** `autoSkipExplicit.js`

Auto skip explicit tracks. Toggle option is in Profile menu (top right button).

![Ext_ChristianDemo](https://i.imgur.com/5reGrBb.png)

### Full App Display

**Filename:** `fullAppDisplay.js`

Full App Display: Minimal album cover art display with beautiful blur effect background. Activating button locates in top bar. While in display mode, double click anywhere to exit. Right click anywhere to open setting menu.

![Ext_FAD](https://i.imgur.com/S7CPQ2s.png)

### Keyboard Shortcut

**Filename:** `keyboardShortcut.js`

Register some useful keybinds to support keyboard-driven navigation in Spotify client. Less time touching the mouse.

- <kbd>Ctrl</kbd> <kbd>Tab</kbd> / <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Tab</kbd>: Navigate items in left sidebar menu.
- <kbd>Shift</kbd> <kbd>H</kbd>/<kbd>Shift</kbd> <kbd>L</kbd>: Navigate history backward/forward.
- <kbd>PageUp</kbd>/<kbd>PageDown</kbd>: Force scroll up/down app page only (because mouse focus is sometimes in sidebar region and they scroll sidebar instead of app page).
- <kbd>J</kbd>/<kbd>K</kbd>: Scroll app page up/down. \*Tips hat to Vim users\*
- <kbd>G</kbd>/<kbd>Shift</kbd> <kbd>G</kbd>: Scroll to top or bottom
- <kbd>M</kbd>: Like/Unlike track
- <kbd>/</kbd>: Open search page
- <kbd>Ctrl</kbd> <kbd>Q</kbd>: Open Queue page.
- <kbd>F</kbd>: Open up keyboard-driven navigation. Hit correct key sequences to open up place you want to go:

![KeyboardDemo](https://i.imgur.com/evkGv9q.png)

### Loopy Loop

**Filename:** `loopyLoop.js`

Provide ability to mark start and end points on progress bar and automatically loop over that track portion.

![LoopyLoop](https://i.imgur.com/YEkbjLC.png)

### Pop-up Lyrics

**Filename:** `popupLyrics.js`

Have easy access to a pop-up window with the current song's lyrics. Click at microphone icon on top bar to open lyrics windows. Right click at the same icon to open config menu to customize looks and lyrics providers priorities.

![Pop-up Lyrics](https://i.imgur.com/Nx9Lx7D.png)

### Shuffle+

**Filename:** `shuffle+.js`  
Shuffles using Fisher–Yates algorithm with zero bias. After installing extensions, right click album/playlist/artist item, there will be an option "Play with Shuffle+". You can also multiple select tracks and choose to "Play with Shuffle+".

![Shuffle](https://i.imgur.com/gxbnqSN.png)

### Trash Bin

**Filename:** `trashbin.js`  
Throw songs/artists to trash bin and never hear them again (automatically skip). This extension will append a Throw to Trashbin option in tracks and artists link right click menu.

![Ext_Trash](https://i.imgur.com/ZFTy5Rm.png)

### Web Now Playing

**Filename:** `webnowplaying.js`  
For Rainmeter users, establish connection with WebNowPlaying plugin to send track metadata and control players.

If you just want WebNowPlaying without changing UI color, CSS, run this:

```powershell
spicetify config inject_css 0 replace_colors 0
spicetify config extensions webnowplaying.js
spicetify apply
```

## Legacy Extensions

If you are running Spicetify 1.2.1 or below, and a supported Spotify version, you may also have access to the extensions listed below.

- [DJ Mode](#dj-mode)
- [New Release](#new-release)
- [Queue All](#queue-all)

### DJ Mode

**Filename:** `djMode.js`

Easily setting up the client for your friends or audiences to choose, add song to queue but prevent them to control player. Plays button in album track list/playlist are re-purposed to add track to queue, instead of play track directly. Hide Controls option also allow you to hide all control button in player bar, Play/More/Follow buttons in cards.

![Ext_DJDemo](https://i.imgur.com/pOFEqtM.png)

### New Release

**Filename:** `newRelease.js`

Aggregate all new releases from favorite artists, podcasts. Setting menu could be opened by right clicking at Bell icon.

![Ext_newrelease](https://user-images.githubusercontent.com/26436809/86569793-50dd8480-bfb2-11ea-8d82-be238d719660.png)

### Queue All

**Filename:** `queueAll.js`

You like using Discover, New Releases page to find new music but adding each one of them to queue takes a lot of effort? If so, activate this extensions and apply. At top of every carousel now has a "Queue All" button to help you add all of them to queue. Note: Not available for playlist carousels. Just songs, albums ones.

![QueueAllDemo](https://i.imgur.com/D9ytt7K.png)
