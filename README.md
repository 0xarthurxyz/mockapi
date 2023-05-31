

Create new directory

```zsd
mkdir apiptest
cd apitest
npm init
code .
```

Add `.gitignore` file

```ini
# Source: gitignore/Node.gitignore 
# Link: https://github.com/github/gitignore/blob/main/Node.gitignore

# Dependency directories
node_modules/

# Environments
.env

# VS Code specific
.vscode

# Mac specific
.DS_Store
```


Install MVP dependencies

```zsh
npm install express
npm install nodemon 
npm install body-parser
```

+   [`body-parser`][npm body-parser], which provides the application 
    with functionality to parse HTTP responses.
+   [`express`][npm express], which provides the application with the 
    necessary web server functionality.
+   [`nodemon`][npm nodemon], which helps restart the Node.js application 
    every time a relevant change occurs to simplify the development of the app locally.


To make use of the functionality in the `nodemon` library, I updated the `package.json` file as follows:

```json
"scripts": {
  "start":"nodemon app.js"
}
```

Using JSDoc decorator 

Source: [jsdoc.app @use JSDoc][jdoc @description]

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @description Add two numbers.
 */
function add(a, b) {
    return a + b;
}
```

Create `app.js` file and start wih minimal imports

```js
// Imports libraries

// Provides the application with the necessary web server functionality.
const express = require('express')

// Restarts Node.js application every time a relevant change occurs to simplify local development.
const { restart } = require('nodemon')

// Provides the application with functionality to parse HTTP responses.
const bodyParser = require('body-parser') 
```

Currently request fails in Postman with `400 Bad request` error 
"The request cannot be fulfilled due to bad syntax."

Endpoint: http://localhost:3000/webhooks/


Body:

```json
{
    "text": "hello world",
    "date": "Wed, May 31"
}
```

Response

```json
{
    "message": {}
}
```

Changing to `GET` works 

Endpoint: http://localhost:3000/webhooks

Response:

```txt
Success
```


<!-- Hyperlinks -->

[jdoc @description]: https://jsdoc.app/tags-description.html
[npm body-parser]: https://www.npmjs.com/package/body-parser
[npm express]: https://www.npmjs.com/package/express
[npm nodemon]: https://www.npmjs.com/package/nodemon