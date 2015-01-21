requirejs.config({

    paths: {
        'backbone':'lib/backbone', 
        'underscore':'lib/underscore',
        'jquery':'lib/jquery'
    },

    shim:{
        'jquery': {exports: 'jQuery'},
        'underscore': { exports: '_' },
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
    }
});

require(['app'], function(){
    console.log('app!');
});
