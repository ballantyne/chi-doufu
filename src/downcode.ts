/*
  https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js  


  Copyright (c) Django Software Foundation and individual contributors.
  All rights reserved.

  Redistribution and use in source and binary forms, with or without modification,
  are permitted provided that the following conditions are met:

      1. Redistributions of source code must retain the above copyright notice,
         this list of conditions and the following disclaimer.

      2. Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.

      3. Neither the name of Django nor the names of its contributors may be used
         to endorse or promote products derived from this software without
         specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
  ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var path = require('path');
const MAPS = require(path.join(__dirname, 'maps'));

class Downcoder extends Object {
  map:any;
  chars:Array<string>;
  regex:any;
  initialize() {
    if (this.map != undefined) {
      return;
    }
    this.map = {};
    this.chars = [];
    for(var i in MAPS) {
      var mapping:any = MAPS[i]
      for (var character in mapping){
        this.map[character] = mapping[character] ;
        this.chars.push(character) ;
      }
    }
    this.regex = new RegExp(this.constructRegex(),'g') ;
  }
  constructRegex() {
    return ["[", this.chars.join(''), ']|[^', this.chars.join(''), ']+'].join('')
  }
}

var downcoder = new Downcoder();

module.exports = function(original:string){
  downcoder.initialize() ;
  var downcoded:string = "";
  var parts:Array<string> = original.match(downcoder.regex);
    
  if (parts) {
    for (var i = 0 ; i < parts.length ; i++) {
      if (parts[i].length == 1) {
        var mapped = downcoder.map[parts[i]] ;
        if (mapped != null) {
          downcoded += mapped;
          continue ;
        }
      }
      downcoded += parts[i];
    }
  } else {
    downcoded = original;
  }
  return downcoded;
}

