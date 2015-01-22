require([], function(){
    mocha.setup('bdd');
    require(['model/post'],function(){
        mocha.run(); 
    });
});
