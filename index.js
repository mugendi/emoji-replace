var _ = require('lodash');
var EmoticonParser = require('emoticon-parser');
var emoticonParser = new EmoticonParser({
    debug: false,
    emoticons:{},
    emoticon_html: ':{EMOTICON}:'
});

var emoji = require("emojilib");




// console.log(emoji.lib);
// console.log(rs);


function emoji_replace(string, returnObject){
  var str = string,
      m = [],
      obj = {},
      w = '';

  //wrap as a promise
  return new Promise(function(resolve, reject) {

    //first parse common emoticons
    str = emoticonParser.parseText(str);

    m = str.match(/:(.+?):/ig);

    _.each(m, function(v){

        w = v.replace(/:/g,'');

        obj = emoji.lib[w] || _.find(emoji.lib, function(o) {
                                  return (_.indexOf(o.keywords, w )>-1 && o.char);
                                });
        //if character exists
        if(obj.char){
          str = str.replace(v, obj.char);
        }

    });


    if(!returnObject){
      resolve(str);
    }
    else{
      resolve(
          {
            old : string,
            parsed: str
          }
      );
    }

  });

}


module.exports = emoji_replace;
