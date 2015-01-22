define([
    'backbone'
], function(
    Backbone
){


    'use strict';

    return Backbone.View.extend({

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

});
