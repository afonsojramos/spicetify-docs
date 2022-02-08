---
title: Create Extensions
sidebar_position: 2
---

Notes:
- This tutorial assumes you chose to generate an example in Create Spicetify App.

After creating a new Spicetify Creator project and choosing "Extension" as your app's type, your project's structure should look like this (With the generated example):
```
my-app/
  .gitattributes
  .gitignore
  package.json
  README.md
  tsconfig.json
  yarn.lock
  src/
    ...    
  node_modules/
    ...
```

For now, we only care about the `src/` folder, which structure's look like this
```
src/
  app.tsx
  settings.json
  types/
    ...
```

`app.tsx` exports a function that will be executed every time Spotify starts up.
It comes with an example that says "Hello!" to the user at when Spotify starts up.  
`settings.json` is a simple json file containing 1 key:
  ```json
  {
    "nameId": "my-app"  // The id of your app
  }
  ```