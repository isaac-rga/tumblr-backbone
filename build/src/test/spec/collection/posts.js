define([
    'collection/posts'
], function(
    PostsCollection
){

    'use strict';

    describe('posts collection', function(){
        beforeEach(function(){
            // stub out jquery ajax to return 2 posts
            sinon.stub($, "ajax").yieldsTo('success', {
                response:{
                    posts:[{id:1}, {id:2}]
                }
            });
        });

        afterEach(function(){
            $.ajax.restore();
        });

        it('exists', function(){
            expect(new PostsCollection()).to.exist(); 
        });

        it('grabs the post models', function(){
            var pc = new PostsCollection(); 
            pc.fetch();
            expect(pc.models.length).to.equal(2);
        });
    });

});
