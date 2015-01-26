define([
    'model/post',
    'view/post'
],function(
    PostModel,
    PostView
){

    'use strict';

    describe('blog view', function(){
        var view, model;

        beforeEach(function(){
            model = new PostModel({
                caption: '<p>this is a caption</p>',
                photos:[{alt_sizes:[{url:'test.jpg'}]}]
            });
            view = new PostView({model:model});
        });

        it('exists', function(){
            expect(PostView).to.exist();
        });

        it('shows a thumbnail of the post', function(){
            expect($(view.el).find('img').attr('src')).to.equal('test.jpg');
        });

        it('shows the caption of the post', function(){
            expect($(view.el).find('h2').text()).to.equal('this is a caption');
        });
    });

});
