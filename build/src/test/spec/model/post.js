define([
    'model/post'
],function(
    PostModel
){

    'use strict';

    var expect = chai.expect;

    describe('post model', function(){
        it('should exist', function(){
            expect(new PostModel()).to.exist();
        });
    });

});
