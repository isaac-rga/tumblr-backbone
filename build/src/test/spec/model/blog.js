define([
    'model/blog'
],function(
    BlogModel
){

    'use strict';

    describe('blog model', function(){
        it('should exist', function(){
            expect(new BlogModel()).to.exist();
        });

        describe('getPosts', function(){
            beforeEach(function(){
                // stub out jquery ajax to return 2 posts
                sinon.stub($, "ajax").yieldsTo('success', {
                    response:{
                        posts:[{id:1}, {id:2}]
                    }
                });
            });

            it('returns the correct number of posts', function(){
                var bm = new BlogModel();
                bm.fetch();
                expect(bm.getPosts().length).to.equal(2);
            });

            afterEach(function(){
                $.ajax.restore();
            });
        });
    });

});
