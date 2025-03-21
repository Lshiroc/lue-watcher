# LUE Watcher
LUE watcher is a npm module for watching and saving user actions.

## Features
- Listen to user actions such as mousemove, scroll, click
- Connect a backend with websocket to save your data
- Allows to use auto save or your custom method

## Documentation
### Track
`Track` is an object that defines the current state of the user's action.

| Element | Type | Description |
| --- | --- | --- | 
| `x` | `number` | Position of the mouse on x axis |
| `y` | `number` | Position of the mouse on y axis |
| `isClicked` | `boolean` | Defines wheter user has clicked or not |
| `isScrolling` | `boolean` | Defines wheter user is currently scrolling |
| `scrollX` | `number` | Current position of the horizontal scroll |
| `scrollY` | `number` | Current position of the vertical scroll |
| `timestamp` | `number` | Timestamp of the event |
| `assign()` | `function` | Assign values to to the track |

```js
const track = new Track();
track.assign({
    x: 1200,
    y: 700,
    isClicked: false,
    isScrolling: false,
    scrollX: 0,
    scrollY: 0,
    timestamp: 7498672,
});
```

### LUE
`LUE` is an object that operates the main process of recording user actions.

| Property | Type | Description |
| --- | --- | --- |
| `width` | `number` | Width of the user's browser |
| `height` | `number` | Height of the user's browser |
| `tracks` | `Track[]` | Collection of tracks |
| `connection` | `WebSocket` | The connection that is used to save the track by default |
| `isConnected` | `boolean` | Status of the websocket connection |
| `sessionId` | `string` | Unique Id for the current session of the user |
| `autoSaveInterval` | `number` | The time interval for auto save, in milliseconds. Default is 2000ms. |
| `intervalId` | `number` | Id of the interval for internal use of clearing it when auto save is stopped |

| Method | Parameters | Description |
| --- | --- | --- |
| `connect` | `socketURL: string` | Uses provided socketURL to make a connection with web socket |
| `listen` | `none` | Listen to the mousemove, scroll and click events |
| `autoSave` | `interval: number` | Auto save the tracks by a certain interval |
| `stopAutoSave` | `none` | Stops the auto save process |
| `save` | `customFn: function` | Manually saves the tracks using custom function or by using default web socket connection |
| `getTracks` | `none` | Get the list of tracks |

```js
// LUE gets the browser width and height info when the constructor is called. This will help when you need to replicate the user actions.
const lue = new LUE();

lue.connect("ws://localhost:8000/ws/");
lue.listen();
lue.autoSave(2000); // save every 2000 milliseconds
lue.stopAutoSave();
lue.save();
console.log(lue.getTracks());
```

## Usage
It's very simple to use LUE at its initial version.

```js
import LUE from 'lue-watcher';

const lue = new LUE();
lue.connect("ws://localhost:8000/ws/");
lue.listen();
lue.autoSave();
```
