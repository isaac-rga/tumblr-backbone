define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'model/post'
], function(
    $,
    _,
    Backbone,
    Config,
    Post
){

    'use strict';

    return Backbone.Collection.extend({

        model: Post,

        url: function(){
            return Config.API_URL;
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
