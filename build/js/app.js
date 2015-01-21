define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
){

    console.log('hey!');

        'use strict';
        // go to https://www.tumblr.com/oauth/apps and create an app in order to get an api key
        var TUMBLR_API_KEY = 'YOU NEED TO REQUEST THIS'; 
        var TumblrPost = Backbone.Model.extend();

        var TumblrPosts = Backbone.Collection.extend({
            model: TumblrPost,
            url: function(){
                return 'http://api.tumblr.com/v2/blog/wowgreat.tumblr.com/posts?api_key=' + TUMBLR_API_KEY;
            },
            // jsonp
            sync: function(method, model, options) {
                return $.ajax(_.extend({
                    type: 'GET',
                    dataType: 'jsonp',
                    url: this.url(),
                    processData:true
                }, options));
            },

            parse:function(r){
                return r.response.posts;
            }
        });

        var TumblrBlog = Backbone.Model.extend({
            POSTS_FETCHED: 'tumblrBlog:postsFetched',
            initialize:function(){
                _.bindAll(this, 'onPostsFetched');
                this.posts = new TumblrPosts();
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

        var TumblrView= Backbone.View.extend({
            el:'body',
            initialize:function(options){
                // this should go to the app model. views are dumb
                this.model.on(this.model.POSTS_FETCHED, this.onPostsFetched,this);
            },

            onPostsFetched:function(){
                this.createPostViews();
                this.render();
            },

            createPostViews:function(){
                this.postViews = _.map(this.model.getPosts(), this.createPostView ,this);
            },

            createPostView:function(p){
                return new PostView({model:p});
            },

            appendPost:function(pv){
                this.$el.append(pv.el);
            },

            render:function(){
                _.each(this.postViews, this.appendPost,this);
            }
        });

        var PostView = Backbone.View.extend({
            initialize:function(){
                var caption = $(this.model.get('caption')).text();
                // we're only displaying photos
                if (this.model.has('photos')){
                    var photo = this.model.get('photos')[0]; // grabbing only the first one to start with
                    var photoSizes = photo.alt_sizes;
                    photo = photo.alt_sizes[photoSizes.length-1].url;
                    var content = '<h2>' + caption + '</h2>';
                    content += '<img src="'+ photo+'" alt="" />';
                    this.el= $(content);
                }
            }
        });

        // this is our 'app model'
        var t = new TumblrBlog();
        var v = new TumblrView({model:t});
        //t.fetch();
        t.fetch();
});
