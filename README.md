# Electron Update Server

This sample Express server code is for use as an endpoint for Electron's AutoUpdate Module.

`$ npm install`

## Running locally
`$ NODE_ENV=development PORT=3000 node app.js`

The code will look in releases/darwin/x.x.x/ to find the latest release, and return either the JSON response or an HTTP 204 if there is no update.

Open your browser to http://localhost:3000/updates/latest?v=X.X.X to see the results.

## Pushing to Heroku
`$ git push heroku master`

Then use the Heroku dashboard to control the server. 
https://dashboard.heroku.com/apps