define([
    'model/post'
],function(
    PostModel
){

    'use strict';

    describe('post model', function(){
        it('should exist', function(){
            expect(new PostModel()).to.exist();
        });
    });

});
