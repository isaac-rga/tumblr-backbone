define([
    'underscore',
    'backbone',
    'view/post'
], function(
    _,
    Backbone,
    PostView
){

    'use strict';

    return Backbone.View.extend({

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

});
