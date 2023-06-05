# Mock client

Start server using

```zsh
npm start
```

Should show the following on the console:

```zsh
> apitest@1.0.0 start
> nodemon app.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server is up and running at http://localhost:3000 ...
```

You can test the server is running by:

1.  opening in your browser
2.  typing `curl http://localhost:3000` in your terminal
3.  sending an empty HTTP GET request to `http://localhost:3000` from your preferred API tool 
    (e.g. Postman)

