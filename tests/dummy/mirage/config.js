export default function() {

  this.get('/api/my-posts', 'post');
  this.get('/api/my-posts/:slug', (schema, request) => {
    return schema.posts.findBy({ slug: request.params.slug });
  });

  this.patch('/api/my-posts/:slug', (schema, request) => {
    let post = schema.posts.findBy({ slug: request.params.slug });

    // We could actually update the post, but YAGNI? *shrug*
    return post;
  });

  this.get('/api/posts/:post_id/comments/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
