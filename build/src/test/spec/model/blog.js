define([
    'model/blog'
],function(
    BlogModel
){

    'use strict';

    describe('blog model', function(){

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

        it('triggers POSTS_FETCHED when posts have been retrieved', function(){
            var onPostsFetchedSpy = sinon.spy();
            var bm = new BlogModel(); 
            bm.on(bm.POSTS_FETCHED, onPostsFetchedSpy);
            bm.fetch();
            expect(onPostsFetchedSpy.calledOnce).to.be.true();
        });

        it('returns the correct number of posts', function(){
            var bm = new BlogModel();
            bm.fetch();
            expect(bm.getPosts().length).to.equal(2);
        });
    });

});
