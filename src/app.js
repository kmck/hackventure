const request = require('browser-request');
const filter = require('lodash/filter');
const includes = require('lodash/includes');

const styles = require('./styles.scss');
const postsTemplate = require('./templates/posts.html');
const postTemplate = require('./templates/post.html');

/**
 * This function filters out posts that we don't want
 *
 * For this example, we're limiting it to certain post types.
 */
function filterPosts(posts) {
    return filter(posts, function(post) {
        return includes([
            'text',
            'chat',
            'photo',
        ], post.type);
    });
}

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
            posts: filterPosts(body.posts),
            postTemplate: postTemplate,
        });
    }
});
