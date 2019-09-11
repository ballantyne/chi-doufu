const isChinese = require('contains-chinese');
const pinyin = require('pinyin');
const Segment = require('segment');

import * as types from '../typings';

var segment = new Segment();
segment.useDefault();

function pronounce(word:string, options:types.ParameterizeOptions={}) {
  if (options.pronunciation == undefined) {
    options.pronunciation = 'mandarin';
  }
  
  switch(options.pronunciation) {
  
    case 'cantonese':
      var cantonese = require('cantonese');
      return word.split('').map((character:string) => {
        return cantonese.toLatin(character);
      }).join('')
      
    default: 
      return pinyin(word);
  }
}


export function pinyinify (original:string, options:types.ParameterizeOptions):string {
  if (isChinese(original)) {
    var parts = segment.doSegment(original, {simple: true})
    return parts.map((word:string) => { 
      return pronounce(word, options);
    }).join(' ');
  } else {
    return original;
  }
}
