define([
    'model/blog'
],function(
    BlogModel
){

    'use strict';

    describe('blog model', function(){
        beforeEach(function(){
            this.bm = new BlogModel();
            this.bm.posts.models =[1, 2];
            var self = this;
            sinon.stub(this.bm, 'fetch', function(){
                self.bm.onPostsFetched(); 
            }); 
        });

        it('triggers POSTS_FETCHED when posts have been retrieved', function(){
            var onPostsFetchedSpy = sinon.spy();
            this.bm.on(this.bm.POSTS_FETCHED, onPostsFetchedSpy);
            this.bm.fetch();
            expect(onPostsFetchedSpy.calledOnce).to.be.true();
        });

        it('returns the correct number of posts', function(){
            this.bm.fetch();
            expect(this.bm.getPosts().length).to.equal(2);
        });
    });

});
