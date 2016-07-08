const express = require('express');
const proxy = require('express-http-proxy');
const util = require('util');

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const credentials = require('./credentials.json');
const tumblr = require('tumblr.js');
const client = tumblr.createClient(credentials);

// Frontend server
const server = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/public',
    hot: true,
    compress: true,
    stats: {
        colors: true,
    },
    proxy: {
        '/': {
            target: 'http://localhost:8080',
            secure: false,
        },
        '/posts': {
            target: 'http://localhost:8080',
            secure: false,
        },
    },
});

server.listen(3000, 'localhost', function() {
    console.log('Frontend server listening on port 3000!');
    setTimeout(function() {
        console.log('');
        console.log('Go to http://localhost:3000 in your web browser');
        console.log('');
    }, 100);
});

// Backend server
const app = express();
app.listen(8080, function() {
    console.log('Backend server listening on port 8080!');
});

app.get('/', function(req, res) {
    res.redirect('/main');
});

app.get('/posts', function(req, res) {
    client.blogPosts('staff', { // this is the name of the blog to grab posts from
        filter: 'safe', // this filters the HTML
    }, function(err, resp) {
        if (err) {
            throw new Error(err);
        } else {
            console.log('Tumblr API response:');
            console.log(util.inspect(resp, {
                showHidden: true,
                depth: null,
                colors: true,
                maxArrayLength: null,
            }));
            console.log('');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(resp));
        }
    });
});

module.exports = {
    server: server,
    app: app,
};
