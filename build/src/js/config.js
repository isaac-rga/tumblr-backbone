define(['auth'],function(Auth){
    return {
        API_URL:'http://api.tumblr.com/v2/blog/wowgreat.tumblr.com/posts?api_key=' + Auth.API_KEY
    };
});
