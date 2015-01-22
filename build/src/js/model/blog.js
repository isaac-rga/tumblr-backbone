define([
    'underscore',
    'backbone',
    'collection/posts'
], function(
    _,
    Backbone,
    PostCollection
){

    'use strict';

    return Backbone.Model.extend({
        POSTS_FETCHED: 'tumblrBlog:postsFetched',
        initialize:function(){
            _.bindAll(this, 'onPostsFetched');
            this.posts = new PostCollection();
        },

        fetch:function(){
            this.posts.fetch({
                data:$.param({}),
                success:this.onPostsFetched
            });
        },

        onPostsFetched:function(){
            this.trigger(this.POSTS_FETCHED);
        },

        getPosts:function(){
            return this.posts.models;
        }
    });

});
