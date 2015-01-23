// config ideas from 
// http://bocoup.com/weblog/effective-unit-testing-with-amd/
requirejs.config({
    // we are using the same baseUrl as the app...
    baseUrl:'../js',
    // these need to be relative to the app
    paths:{
        'test': '../test/',
        'spec' : '../test/spec/'
    } 
});

require(['require-config'], function(){
    mocha.setup('bdd');
    require(['spec/model/post'],function(){
        mocha.run(); 
    });
});
