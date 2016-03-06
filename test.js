var emoji_replace = require('./index');

//the string containing emoticons
var str = 'my ;-) and :heart: :) ';

//now some replacements.
//Notice this function returns a promise so you can resolve without async hell :-)
emoji_replace(str).then(function(response) {

  //return replaced text
  //if you would rather return an object containing both odl and new string, then call 'emoji_replace(str,true)'
  console.log( JSON.stringify(response,0,4) );

});
