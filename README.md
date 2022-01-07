# Class Parser
An easy way to styling inline dynamically.

## Installation
Installing `class-parser` with npm.
```bash
npm install class-parser
```

## Usage
### Getting the module
First of all, you need to import the `Parse` function from the module.
```js
// Using require
var Parse = require("class-parser");

// or using import
import Parse from "class-parser";
```
### Parsing variables
Use the `Parse` function to convert variables into a single string.

Any of the basic variables are allowed to be used such as `booleans`, `strings`, `numbers`, `objects` and `arrays` so you can combine them as you need it.

Let's see an example:
```js
var myStyle = {
    visible: true,
    active: false
};

var myClass = Parse("button", myStyle);
// expected string: "button visible"
```
> There's no limit in the arguments the function can receive

#### Strings and Numbers
Both `strings` and `numbers` don't need to be wrapped neither in an `object` nor an `array`, but you can do it if needed.

Les't see some examples:
```js
Parse("This", "will", "work");
// expected string: "This will work"

Parse(["This", "will"], { text1: "work", text2: "too" });
// expected string: "This will work too"

Parse({ one: 1, two: 2, zero: 0 }, [-1, 3, 4]);
// expected string: "1 2 3 4"
```
> **Notice:** The `key` names on the object are ignored and only uses de `value` when parsing if the value is a `string` or a `number`, otherwise the `key` will be used.

#### Booleans
The proper way to use `booleans` is wrapped inside an `object` instead as a single parameter.

So, this won't work:
```js
// wrong way
var active = true;
var myClass = Parse("button", active);
```

The **correct** way is:
```js
// correct way
var active = true;
var myClass = Parse("button", { active });
```

#### Arrays
There's two kinds of `arrays`, the **anonymous**, which is created out of a variable or an object _(as we saw before)_ and the **named**, the last ones has a different behaviour.

Even if the `array` has multiples values, it just create a single string when it's parsed, but, the key is if one or more of those values are `falsy` the string will be empty.

Also, it **must be wrapped** in an `object`.

Let's see how it works:
```js
var will = [true, true, true];
var fail = [true, false];
var work = [1, 2, 3];

var myClass = Parse("This", { will, fail, work });
// expected string: "This will work"
```
> **Falsy**: A value considered "false", for example: `0`, `null`, `""` or `NaN`.
> More info [here](https://developer.mozilla.org/en-US/docs/Glossary/Falsy "here").

It works with mixed `arrays` to:
```js
// This is an example of a form with a button
// which is enabled when all the fields are filled.
var name = "John";
var lastName = "Doe";
var age = 24;

var btnClass = Parse("button", { active: [name, lastName, age] });
// expected string: "button active"
```

### A React.js example
This is a simple example of how to use the `class-parser` in a react component:
```jsx
import Parse from "class-parser";

const Button = ({ active }) => {
    return (
        <button className={ Parse("button", { active }) }>
            Click me!
        </button>
    );
};
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
