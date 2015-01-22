define([
    'jquery',
    'underscore',
    'backbone',
    'auth',
    'model/post'
], function(
    $,
    _,
    Backbone,
    Auth,
    Post
){

    'use strict';

    return Backbone.Collection.extend({

        model: Post,

        url: function(){
            return 'http://api.tumblr.com/v2/blog/wowgreat.tumblr.com/posts?api_key=' + Auth.API_KEY;
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
});
