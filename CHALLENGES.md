# Challenges

For **frontend** changes (JS, CSS, and templates in `src`), the Webpack server will rebuild changes automatically, and all you need to do is **reload the browser**.

For **backend** changes (`server.js`), you'll need to **restart the server**. Use `ctrl + C` to stop the server, and then start it again using `npm start`. After it's started, you can **reload the browser**.

## Change the source of the posts being displayed

**Note:** These are backend changes that will require you to restart the server and refresh the browser to see your changes.

1. Change the Tumblr API call to take posts from your own blog (or anything else you think is interesting!) instead of [the staff blog](https://staff.tumblr.com).
2. Change the Tumblr API call to find posts tagged with something you're really interested in, like "puppies." You may notice that using the tagged posts endpoint breaks the app. That's because the format of the API response isn't the same, so you'll need to tweak the data to fit in the templates OR update the templates to handle this API response.

## Change the way things look

**Note:** For these challenges, you can just edit the files, save, and reload the page. The Webpack server will automatically rebuild.

1. Whoa! There's a lot of junk at the top of the post. Let's hide it so that it starts looking more Tumblr-y.
2. Don't like blue and white? Change the color of the page by modifying `styles.scss`!
3. You can use styles to do animations. Add some CSS to make posts wiggle when you hover over them with your mouse.
4. That header is kind of lame. Modify  `templates/posts.html` to make it more interesting, maybe by using some of the blog info!

## Add support for new types of posts

**Note:** For these challenges, you can just edit the files, save, and reload the page. The Webpack server will automatically rebuild.

1. Photo posts can have up to 10 images, but we're only showing the first one. Modify `templates/posts.html` to show all of the images in a photoset.
2. Add support for audio posts.
3. Add support for video posts.

## Extra super hard challenge

1. There are obviously tons more posts on Tumblr than the single page displayed in this demo. Add support for scrolling through and loading more posts! You'll need to keep track of the page you're on using the timestamp of the last post and use that to choose which posts to load from the Tumblr API.
