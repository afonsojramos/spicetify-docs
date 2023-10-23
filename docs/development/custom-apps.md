---
title: Custom Apps
description: 🔧 Creating Custom Apps.
---

## How to start

- Make a new folder for your custom app in your [CustomApps folder](../addons/custom-apps). You'll install it like any other custom app.
- Create an `index.js` and a `manifest.json` inside that folder.
- The `index.js` file is the main file for the custom app.
- The manifest includes some important information to make the custom app work.

## Manifest file

- Your custom app needs a `manifest.json` file in the root folder with the following keys:
- `name`: The name of the custom app.
- `icon`: The escaped SVG markup for the sidebar icon.
- `active-icon`: The escaped SVG markup for the active status of the sidebar icon (when your custom app is open).
- `subfiles`: You can optionally include other JS files. These files will be concatenated together in the order defined here. Any variables you delcare in the main `index.js`, or any subfiles will be accessible from all. This is useful for organizational purposes for more complex custom apps.
- `subfiles_extension`: You can optionally include an extension(s) with your custom app. These are treated as regular extensions, and will run when Spotify starts.

_Note: The `subfiles` can be in nested folders, while any `subfiles_extension` can not._

```json
{
  "name": "My Custom App",
  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z\"></path></svg>",
  "active-icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z\"></path></svg>",
  "subfiles": ["src/Subfile.js", "src/Subfile2.js"],
  "subfiles_extension": ["my_extension.js"]
}
```

## Creating your index.js

Custom apps are written in [React](https://reactjs.org). You'll need to grab some React references from the `Spicetify` object, set up a component for your page, and return that component from a `render()` function in the main body of the file. Sadly, this does not support [`jsx`](https://reactjs.org/docs/introducing-jsx.html), so you must use [`react.createElement`](https://reactjs.org/docs/react-api.html#createelement).

Example:

```js
// Grab any variables you need
const react = Spicetify.React;
const reactDOM = Spicetify.ReactDOM;
const {
    URI,
    React: { useState, useEffect, useCallback },
    Platform: { History },
} = Spicetify;

// The main custom app render function. The component returned is what is rendered in Spotify.
function render() {
    return react.createElement(Grid, { title: "My Custom App" });
}

// Our main component
class Grid extends react.Component {
    constructor(props) {
        super(props);
        Object.assign(this, props);
        this.state = {
            foo: "bar",
            data: "etc"
        };
    }

    render() {
        return react.createElement("section", {
            className: "contentSpacing",
        },
        react.createElement("div", {
            className: "marketplace-header",
        }, react.createElement("h1", null, this.props.title),
        ),
        ), react.createElement("div", {
            id: "marketplace-grid",
            className: "main-gridContainer-gridContainer",
            "data-tab": CONFIG.activeTab,
            style: {
                "--minimumColumnWidth": "180px",
            },
        }, [...cardList]),
        react.createElement("footer", {
            style: {
                margin: "auto",
                textAlign: "center",
            },
        }, !this.state.endOfList && (this.state.rest ? react.createElement(LoadMoreIcon, { onClick: this.loadMore.bind(this) }) : react.createElement(LoadingIcon)),
        ), react.createElement(TopBarContent, {
            switchCallback: this.switchTo.bind(this),
            links: CONFIG.tabs,
            activeLink: CONFIG.activeTab,
        }));
    }
}
```

## Common questions:

### My custom app isn't running when Spotify starts

Your custom app will only run when it is clicked on the sidebar and its page loads. In order to run code on startup, you need to include a separate JS file as `subfiles_extension` in your [manifest](#manifest-file).

### My subfile extension can't read my variables from my custom app

Any subfile extensions are loaded separately from the main custom app, and do not have access to variables. You can use `localStorage` to save/load data between the two.

### How can I add a new sub page or path to my custom app?

You can use `Spicetify.Platform.History.push(...)` to navigate to a new page. This can be a standard Spotify page, or a custom page for your app. You can include any data you need in the `state` key.

```js
Spicetify.Platform.History.push({
  pathname: '/marketplace/readme',
  state: {
    data: {
      title: 'My sub page title',
      content: 'My sub page content',
    },
  },
});
```

In order to render a different page, you can check the `pathname` of the current page within `index.js`'s main render method, and render a different page component for different paths. The main path for your custom app will be the name of the folder (which is the same that needs to be used in the [`config-xpui.ini`](themes#configs) configuration file).
In this example, if our `pathname` is "/marketplace/readme", we load the `ReadmePage` component, otherwise we load our main page component, `Grid`.

```js
function render() {
  const { location } = Spicetify.Platform.History;

  // If page state set to display readme, render it
  // (This location state data comes from your Spicetify.Platform.History.push() call
  if (location.pathname === '/marketplace/readme') {
    return react.createElement(ReadmePage, {
      title: 'Spicetify Marketplace - Readme',
      data: location.state.data,
    });
  } // Otherwise, render the main Grid
  else {
    return react.createElement(Grid, { title: 'Spicetify Marketplace' });
  }
}
```
