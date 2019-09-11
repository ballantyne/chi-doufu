/*
  https://github.com/fyalavuz/node-parameterize

  The MIT License (MIT)

  Copyright (c) 2013 Fırat Yalavuz

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

var path = require('path');
import * as types from '../typings';
const chinese = require(path.join(__dirname, 'chinese'));
const downcode = require(path.join(__dirname, 'downcode'));

module.exports = function(s:string, options:types.ParameterizeOptions={}) {
  options.delimiter = options.delimiter || '-';

  s = chinese.pinyinify(s, options);
  s = downcode(s);
  
  s = s.replace(/[^-\w\s\u4E00-\u9FA5]/g, '');
  s = s.replace(/^\s+|\s+$/g, '');
  s = s.replace(/[-\s]+/g, options.delimiter);
  s = s.toLowerCase();             
  return s.substring(0, options.num_chars);
}
