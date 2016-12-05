# preact-tap-event-plugin: `onTouchTap` <sub>_for [Preact]_</sub>

[![NPM](https://img.shields.io/npm/v/preact-tap-event-plugin.svg)](https://www.npmjs.com/package/preact-tap-event-plugin)
[![Travis](https://travis-ci.org/developit/preact-tap-event-plugin.svg?branch=master)](https://travis-ci.org/developit/preact-tap-event-plugin)

`onTouchTap` is a [FastClick]-style instant "click" event, triggered by `touchstart` and `touchend` occurring within a 10-pixel radius.

#### [JSFiddle Demo](https://jsfiddle.net/developit/rq877gp3/)


---


## Usage Example

`npm i -S preact-tap-event-plugin`


```js
import injectTapEventPlugin from 'preact-tap-event-plugin';

injectTapEventPlugin();
```


---


## License

[MIT]


[Preact]: https://github.com/developit/preact
[FastClick]: https://github.com/ftlabs/fastclick
[MIT]: http://choosealicense.com/licenses/mit/
