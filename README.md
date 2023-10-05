<h1 align="center">term-align</h1>
<h4 align="center">Align text based on terminal's width.</h4>

<img align="center" src="https://raw.githubusercontent.com/mrozio13pl/term-align/main/assets/example.png" alt="Example">

**NOTE**: This does not use methods such as [`writeStream#cursorTo`](https://nodejs.org/api/tty.html#writestreamcursortox-y-callback). Instead, it returns a string that can be then used in the console, using, e.g. [`console#log`](https://nodejs.org/api/console.html#consolelogdata-args) or [`writeStream#write`](https://nodejs.org/api/process.html#process_process_stdout).


## API

#### `align(input, options)` or `align(input, alignment, options)`

Aligns given input.

- `input` **{String}** - Text to be aligned.
- `options` - Alignment options to configure how the string should be displayed:
    - `align` - Alignment of the text (`'left`, `'center'`, `'right'`). Default is `'left'`.
    - `offset` **{Number}** - Offset to adjust the alignment. Can be a number or a percentage string. Default is `0`.
    - `textAlign` - Text alignment within the alignment width (`'left'`, `'center'`, `'right'`). Should be used only if your input has multiple lines. Default is the same as `align`.
- `alignment` - Alignment of the text (`'left`, `'center'`, `'right'`). Default is `'left'`.
- Returns an aligned `string`.

## Usage

```js
const align = require('term-align');

console.log(align('Hello, world!', 'center')); // <= centered: '      Hello, world!      '
console.log(align('Another example.', { align: 'right', offset: 1 })); // <= '        Another example. '
console.log(align('Multiple lines\nWorks', { align: 'center', textAlign: 'right' }));
// Results:
// '      Multiple lines      '
// '               Works      '
```
Check out more [examples](https://github.com/mrozio13pl/term-align/tree/master/examples).

### License

Released under the [MIT License](https://github.com/mrozio13pl/term-align/blob/main/LICENSE).