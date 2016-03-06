var emoji_replace = require('./index');

var str = 'my ;-) and :heart: :) ';

emoji_replace(str).then(function(response) {

  console.log( JSON.stringify(response,0,4) );

}, function(error) {
  console.error( error);
});
