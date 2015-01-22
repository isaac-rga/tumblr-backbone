define([
    'model/post'
],function(
    PostModel
){

    'use strict';

    var expect = chai.expect;
        describe('sum', function(){
            it('should be correct', function(){
                expect(1 + 1).to.equal(2);
            });
        });
    describe('post model', function(){
        it('should exist', function(){
            expect(new PostModel()).to.exist();
        });
    });

});
