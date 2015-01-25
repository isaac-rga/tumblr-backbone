// config ideas from 
// http://bocoup.com/weblog/effective-unit-testing-with-amd/
requirejs.config({
    // we are using the same baseUrl as the app...
    baseUrl:'../js',
    // these need to be relative to the app
    paths:{
        'test': '../test/',
        'spec': '../test/spec/',
        'mocha': '../test/lib/mocha',
        'chai': '../test/lib/chai',
        'sinon': '../test/lib/sinon'
    },

    shim:{
        'mocha':{exports:'mocha'}
    }
});

require([
    'mocha',
    'chai',
    'sinon',
    'require-config'
], function(
    mocha, 
    chai,
    sinon
){
    mocha.setup('bdd');
    expect = chai.expect;
    require([
        'spec/model/post',
        'spec/model/blog',
        'spec/collection/posts'
    ],function(){
        mocha.run(); 
    });
});
