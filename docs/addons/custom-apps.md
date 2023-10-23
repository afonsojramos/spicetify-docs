---
title: Custom Apps
description: 💥 Manually installing Custom Apps.
---

Custom Apps, similar to Extensions, are simply Javascript that will be injected into Spotify, that consists of a page that can be accessed from the sidebar.

## Installing

Custom Apps files can be stored in:

- `CustomApps` folder in Home directory:

| Platform            | Path                                   |
| ------------------- | -------------------------------------- |
| **Windows**         | `%appdata%\spicetify\CustomApps\`      |
| **Linux**/**MacOS** | `~/.config/spicetify/CustomApps`       |

- `CustomApps` folder in Spicetify executable directory.

If there are 2 Custom Apps with the same name, the extension within the Home directory will be prioritized.

After placing the Custom App file into correct folder, run following command to install it:

```bash
spicetify config custom_apps <file name>
spicetify apply
```

**Note:** Using `config` command to add Custom Apps always append file name to existed extensions list. It does not replace the whole key's value.

## Uninstalling

If you want to remove a custom app from the current list of custom app you can always append a `-` after the file name:

```bash
spicetify config custom_apps <file name>-
spicetify apply
```

## Custom Apps

Inject custom apps to Spotify and access them in left sidebar.  
Add your desired custom app folder names in config, separated them by `|` character.  
Example:

```ini
[AdditionalOptions]
...
custom_apps = reddit|yourownapp
```

App folders can be stored in:

- `CustomApps` folder in Home directory:

| Platform            | Path                                   |
| ------------------- | -------------------------------------- |
| **Windows**         | `%appdata%\spicetify\CustomApps\`      |
| **Linux**/**MacOS** | `~/.config/spicetify/CustomApps`       |

- `CustomApps` folder in Spicetify executable directory.

If there are 2 apps having same name, app in Home directory is prioritized.

Three apps have been included to demonstrate how to create and inject an app:

- [Reddit](#reddit)
- [New Releases](#new-releases)
- [Lyrics Plus](#lyrics-plus)

### Reddit

Fetching posts from any Spotify link sharing subreddit. You can add, remove, arrange subreddits and customize post visual in config menu (in Profile menu, top right button with your user name).

![Reddit](https://i.imgur.com/MC3tpNZ.png)

To install, run following commands:

```
spicetify config custom_apps reddit
spicetify apply
```

### New Releases

Aggregate all new releases from favorite artists, podcasts. Time range, release type, and other filters can be customized in config menu (in Profile menu, top right button with your user name). Date format is based on your locale code (BCP47).

![New Releases](https://i.imgur.com/MP9dTjt.png)

To install, run following commands:

```
spicetify config custom_apps new-releases
spicetify apply
```

### Lyrics Plus

Get access to the current track's lyrics from various lyrics providers (Musixmatch, Netease, Genius). Learn more [here](https://github.com/spicetify/spicetify-cli/tree/master/CustomApps/lyrics-plus).

Colors, lyrics providers can be customized in config menu (in Profile menu, top right button with your user name).

![Lyrics Plus](https://i.imgur.com/WtD080A.png)

To install, run following commands:

```
spicetify config custom_apps lyrics-plus
spicetify apply
```
