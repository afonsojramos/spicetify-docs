---
title: Platform
description: A vast collection of internal APIs used throughout the Spotify client.
---

Spicetify provides a vast collection of internal APIs used throughout the Spotify client. These APIs are used to interact with the Spotify client and modify its behavior.

Explore all available methods in DevTools:

```js
Spicetify.Platform
```

:::warning

Because these APIs are internal, they are not guaranteed to be stable and may *drastically* change in the future. Use them at your own risk.

:::

## Usage

Since these APIs differs between each versions of the Spotify client, we cannot provide a complete list of all available APIs. Instead, we provide a list of APIs that are may prove useful for extension developers and generally hasn't changed much over the years.

:::note

If a method is not listed here, it could be that:
  - It is objectively complicated to use.
  - It is not well documented.
  - It is generally not useful/convenient for extension developers.
  - It is not stable and may change/has changed drastically throughout versions.

:::

:::tip

Feel free to reach out to the developers' community on [**Discord**](https://discord.gg/VnevqPp2Rr) if you need help with any of these methods.

:::

### ClipboardAPI

The Spotify client doesn't allow users to copy directly from the client (say `Ctrl + C`), but it does provide an API to copy text to the clipboard.

```ts
interface ClipboardAPI {
    copy: (text: string) => void;
    paste: () => string;
};
```

#### `copy`

Copy text to clipboard.

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `string` | Text to copy. |

Example:

```ts
Spicetify.Platform.ClipboardAPI.copy("Hello World!");
```

#### `paste`

Paste text from clipboard.

Example:

```ts
Spicetify.Platform.ClipboardAPI.copy("Hello World!");
Spicetify.Platform.ClipboardAPI.paste(); // "Hello World!"
```

### History

Spotify has their own router API that allows you to navigate to different pages within the client. You can use it to navigate within your custom apps or push new pages to the history stack and display them for the users.

```ts
interface History {
    push: (path: Location | string) => void;
    replace: (path: Location | string) => void;
    goBack: () => void;
    goForward: () => void;
    listen: (listener: (location: Location) => void) => () => void;
    entries: Location[];
    location: Location;
};
```
Their `Location` object is a simple object that contains the `pathname` of the current page as well as the relevant query parameters and state. It looks roughly like this:

```ts
interface Location {
    pathname: string;
    search: string;
    hash: string;
    state: Record<string, any>;
};
```

#### `push`

Push a new location to the history stack.

You can pass either a `Location` object or a `pathname` string to this method.

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `Location` &#124; `string` | Location to push. |

#### `replace`

Replace the current location in the history stack.

You can pass either a `Location` object or a `pathname` string to this method.

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `Location` &#124; `string` | Location to replace. |

#### `goBack`

Go back to the previous location in the history stack.

#### `goForward`

Go forward to the next location in the history stack.

#### `listen`

Listen to changes in the history stack. Fires whenever the user navigates to a new page.

| Parameter | Type | Description |
| --- | --- | --- |
| `listener` | `(location: Location) => void` | Callback to fire when the user navigates to a new page. |

Example:

```ts
Spicetify.Platform.History.listen((location) => {
    // Log the current pathname every time the user navigates to a new page.
    console.log(location.pathname);
});
```

#### `entries`

An array of all locations in the history stack.

#### `location`

The current location in the history stack.

### LocalStorageAPI

Spotify provides a simple API to interact with the browser's local storage. All keys are stored using the current user's username as the namespace.

Inside `localStorage`, the keys are stored using the following format:

```ts
`${namespace}:${key}`
```

```ts
interface LocalStorageAPI {
    items: Record<string, any>;
    namespace: string;
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
    clearItem: (key: string) => void;
};
```

#### `items`

An object containing all the keys and values stored in the local storage.

All keys in `items` are stored using the aforementioned format, with it's value pair being the value stored in the local storage parsed using `JSON.parse`.

Example:

```ts
Spicetify.Platform.LocalStorageAPI.items; // { "username:foo": "bar" }
```

#### `namespace`

The namespace used to store all keys in the local storage. Usually the current user's username.

#### `getItem`

Get a value from the local storage. Returns a parsed value using `JSON.parse`.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | Key to get. |

Example:

```ts
// This is equivalent to Spicetify.Platform.LocalStorageAPI.items["username:foo"]
// or localStorage.getItem("username:foo")
Spicetify.Platform.LocalStorageAPI.getItem("foo"); // "bar"
```

#### `setItem`

Set a value in the local storage. The value will be stringified using `JSON.stringify`.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | Key to set. |
| `value` | `any` | Value to set. Can be any type. |

Example:

```ts
Spicetify.Platform.LocalStorageAPI.setItem("foo", { bar: "baz" });
// localStorage.getItem("username:foo") === '{"bar":"baz"}'
```

#### `clearItem`

Clear a value from the local storage.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | Key to clear. |

Example:

```ts
Spicetify.Platform.LocalStorageAPI.clearItem("foo");
// localStorage.getItem("username:foo") === null
```

### PlatformData

Contains data about the current platform, such as the current Spotify client version, operating system, and more.

```ts
interface PlatformData {
    app_platform: string;
    client_capabilities: Record<string, any>;
    client_version_triple: string;
    client_version_quadruple: string;
    client_version_quintuple: string;
    event_sender_context_information: Record<string, any>;
    os_name: string;
    os_version: string;
}
```

#### `app_platform`

The current Spotify client platform.

Example:

```ts
Spicetify.Platform.PlatformData.app_platform; // "win32"
```

#### `client_capabilities`

An object containing the current client capabilities. This usually contains information relating to functionality inside the Spotify client, such as whether or not the client can autostart.

#### `client_version_triple`, `client_version_quadruple`, `client_version_quintuple`

The current Spotify client version. Usually in the format `1.2.8`, `1.2.8.923`, or `1.2.8.923.g4f94bf0d`.

#### `event_sender_context_information`

An object containing information about the current operating system, used for analytics throughout the Spotify client.

Example:

```ts
Spicetify.Platform.PlatformData.event_sender_context_information; // { "platform_type:"windows", "os_version": "10.0.19042" }
```

This could also help you diagnose issues with your custom apps. For example, if you're using a custom app on Windows and you're getting an error, you can check the `event_sender_context_information` object to see if the `platform_type` is `windows` or `macos`.

#### `os_name`

The current operating system.

Example:

```ts
Spicetify.Platform.PlatformData.os_name; // "windows"
```

#### `os_version`

The current operating system version.

Example:

```ts
Spicetify.Platform.PlatformData.os_version; // "10.0.19042"
```

### Session

Contains data about the current user session, such as the current user's access token, locale, and more.

```ts
interface Session {
    accessToken: string;
    accessTokenExpirationTimestampMs: number;
    locale: string;
}
```

#### `accessToken`

The current user's access token. This is used to authenticate requests to the Spotify API.

#### `accessTokenExpirationTimestampMs`

The timestamp in milliseconds when the current user's access token expires.

#### `locale`

The current user's locale.

Example:

```ts
Spicetify.Platform.Session.locale; // "en"
```

### Translations

Contains translation strings used throughout the current Spotify client.

```ts
interface Translations {
    [key: string]: string;
}
```