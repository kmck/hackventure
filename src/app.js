const request = require('browser-request');

const styles = require('./styles.scss');
const postsTemplate = require('./templates/posts.html');
const postTemplate = require('./templates/post.html');

request({
    method: 'GET',
    url: '/posts',
    json: true,
}, function(err, response, body) {
    if (err) {
        console.error(err);
    } else {
        document.body.innerHTML = postsTemplate({
            blog: body.blog,
            posts: body.posts,
            total_posts: body.total_posts,
            postTemplate: postTemplate,
        });
    }
});
