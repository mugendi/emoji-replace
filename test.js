var emoji_replace = require('./index');

//the string containing emoticons
var str = 'When a boy winks at you :girl: fear not, ;-) back and give him a broad :-)';

//now some emoji replacements.
var str = emoji_replace(str);

console.log(str); // >> When a boy winks at you � fear not, � back and give him a broad �
