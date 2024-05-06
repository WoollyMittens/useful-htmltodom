# htmltodom.js: Convert text to DOM elements.

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Convert imported text into HTML DOM elements.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/requests.js"></script>
<script src="js/htmltodom.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'lib/requests.js',
	'js/htmltodom.js'
], function(requests, HtmlToDom) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {requests = require('lib/requests.js";
@import {HtmlToDom} from "js/htmltodom.js";
```

## How to start the script

```javascript
new HtmlToDom({
	'html': document.getElementById('example-template'),
	'data': {
		'firstname': 'John',
		'lastname': 'Doe'
	},
	'success': function(elements) { return elements },
	'error': function(errorcode) { console.log(errorcode) }
});

new HtmlToDom({
	'url': 'http://www.woollymittens.nl/useful-htmltodom/dist/html/example-template.html',
	'data': {
		'firstname': 'Jane',
		'lastname': 'Doe'
	},
	'success': function(elements) { return elements }
});
```

**'html' : {text}** - Text to be converted into HTML DOM elements.

**'url' : {string}** - Text file to import using AJAX.

**'data' : {object}** - Optional list of key/value pairs to replace in the template.

**'success' : {function}** - Report a successful conversion.

**'error' : {function)** - Optionally, how to report a failure.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary www server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
