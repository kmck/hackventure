# Tumblr Hackventure

Learn how to grab a slice of Tumblr content and display it on your own!

By the end of this workshop - led by actual tumblr engineers - you will know how to request posts from Tumblr for a specific tag or a blog, and display them on a webpage in a way you like it.

## What we will be doing

We will use Tumblr API to get posts, NodeJS to run our program, and our language of choice will be JavaScript. No prior knowledge of those technologies is necessary. We will get you started with some code, and where you will take it from there is up to your imagination!

## To bring

Bring your laptop! (Or pair up with a friend for pair programming from one laptop, that totally works too). Very limited amount of laptops will be available for the time event for those who don’t have one.

If you are bringing your own laptop, some requirements:

- [Sublime Text](https://www.sublimetext.com/) or other text editor installed
- [NodeJS](https://nodejs.org/en/) installed: This one is important - you won’t be able to run the workshop program without it. It’s super easy to install, just download and follow instructions.
- Git present on the system. If you are not sure if you have it, or don’t know what this is, install [the GitHub app](https://desktop.github.com/)!

# Setup

## Getting the code

The easiest way to get set up is to grab the code from GitHub. In the terminal, do the following.

1. `git clone https://github.com/kmck/hackventure.git` to get the code
2. `cd hackventure`
3. `npm install` to get the various Node dependencies

Now you can open `hackventure` in your text editor or IDE and get to work!

## API Credentials

You'll need to create a `credentials.json` file with your Tumblr API keys to make API requests. During the workshop, you can use [this tool](https://tumblr-hackventure.herokuapp.com/) to generate credentials. The file will end up looking something like this:

```json
{
    "consumer_key": "THE-CONSUMER-KEY",
    "consumer_secret": "THE-CONSUMER-SECRET",
    "token": "YOUR-TOKEN",
    "token_secret": "YOUR-SECRET"
}
```

**If you're feeling especially adventurous**, you can [register your own](https://www.tumblr.com/oauth/apps) OAuth app and generate the keys yourself by [doing the three-legged OAuth dance](https://github.com/kmck/tumblr-oauth).

## Playing with the API

This repository includes the Tumblr REPL, which gives you a command line interface to make API requests and see the output. Type this into the terminal to run it from where you cloned the project:

    ./node_modules/.bin/tumblr

This will automatically use the keys you set up in your `credentials.json` file and is a good way to get familiar with the API on its own before using it to display Tumblr content.

## Running the Server

We'll be using a Webpack Dev Server to get things started quickly so you can focus on getting data and displaying it on the screen. Here's how to get started:

1. Type `npm start` into the terminal and press `<enter>`.
2. Go to [http://localhost:3000/main](http://localhost:3000/main) in your Web Browser to see the app in action!

# Have fun!

Once you're all set up, you can start playing around with things! [Here are some ideas to get started.](CHALLENGES.md)
