'use strict';
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.get('/updates/latest', function (req, res) {
    const latest = getLatestRelease();
    const clientVersion = req.query.v;

    if (clientVersion === latest) {
        res.status(204).end();
    } else {
        let baseURL = getBaseUrl();
        let updateURL = baseURL + '/releases/darwin/' + latest + '/electron.zip';

        res.json({
            url: updateURL,
            name: "My Release Name",
            notes: "These are some release notes",
            pub_date: "2017-04-18T12:29:53+01:00"
        });
    }
});

let getLatestRelease = () => {
    const dir = __dirname + '/releases/darwin';

    const versionsDesc = fs.readdirSync(dir).filter((file) => {
        const filePath = path.join(dir, file);
        return fs.statSync(filePath).isDirectory();
    }).reverse();

    return versionsDesc[0];
}

let getBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000';
    } else {
        return 'http://aj-software.com'
    }
}

app.listen(process.env.PORT, () => {
    console.log(`Express server listening on port ${process.env.PORT}`);
});