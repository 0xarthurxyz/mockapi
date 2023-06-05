# Mock client

## Get started

Start the mock API by typing this into your terminal:

```zsh
npm start
```

You should see a similar output in your terminal:

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

## Use

You can make HTTP POST requests against the `/mock` endpoint with arbitrary payload, e.g.

```JSON
{
    "text": "hello world"
}
```

If your request is successful, you should received a HTTP response with the following text:

```zsh
Mock request successful!
```

## Debugging

If you are not sure the mock API server is running, you can check by:

1.  opening your browser at `http://localhost:3000`
2.  typing `curl http://localhost:3000` in your terminal, or
3.  sending an empty HTTP GET request to `http://localhost:3000` from your preferred API tool 
    (e.g. Postman)

You will know your server is running correctly if you see the following message:

```zsh
Mock API server is running!
```
