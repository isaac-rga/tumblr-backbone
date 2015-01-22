require([], function(_){

    mocha.setup('bdd');
    var expect = chai.expect;

    describe('sum', function(){
        it('should be correct', function(){
            expect(1 + 1).to.equal(2);
        });
    });
    mocha.run();
});
