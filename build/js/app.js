define([
    'model/blog',
    'view/blog'
], function(
    TumblrBlog,
    TumblrView
){

    'use strict';

    var t = new TumblrBlog();
    var v = new TumblrView({model:t});
    t.fetch();

});
