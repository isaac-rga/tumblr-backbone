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
    });

});
