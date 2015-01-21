# Tumblr Backbone
This is a simple demonstration of how to use Tumblr as the backend for a backbone.js single-page app, as used in [adidas originals][ao], [g-star raw for the oceans][gs] and others.

## Notes
This example focuses on grabbing data from the api. We're only displaying photo posts and the data is shown without styling. 

For this example to work, you need to get a tumblr API key. Go to [https://www.tumblr.com/oauth/apps][register] and create an app. Since we're only retrieving content, the urls are not terribly important (anything will work as long as it is a valid url). Once the app is created, duplicate the file build/js/auth.sample.js and rename it to auth.js. Then grab the OAuth Consumer Key you've been given and replace it in the variable `API_KEY` in that file 

## TODO

- [ ] AMDification
- [ ] Add tests
- [ ] Pagination, additional queries
- [ ] Parse/display different types of posts
- [ ] Tags & tags prefixes
- [ ] Tumblr like button
- [ ] Implement oauth so it can work with private blogs

## Useful info
[Tumblr api docs][docs]

## Issues, contact
If you run into problems feel free to open an issue, or contact me on twitter ([@jesusgollonet][tw]) or my email (available in my [github profile][gh])

[ao]: http://adidasoriginals.tumblr.com/
[gs]: http://rawfortheoceans.g-star.com/
[register]: https://www.tumblr.com/oauth/apps
[docs]: https://www.tumblr.com/docs/en/api/v2
[tw]: https://twitter.com/jesusgollonet 
[gh]: https://github.com/jesusgollonet
