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
    initialize() {
        if (this.map != undefined) {
            return;
        }
        this.map = {};
        this.chars = [];
        for (var i in MAPS) {
            var mapping = MAPS[i];
            for (var character in mapping) {
                this.map[character] = mapping[character];
                this.chars.push(character);
            }
        }
        this.regex = new RegExp(this.constructRegex(), 'g');
    }
    constructRegex() {
        return ["[", this.chars.join(''), ']|[^', this.chars.join(''), ']+'].join('');
    }
}
var downcoder = new Downcoder();
module.exports = function (original) {
    downcoder.initialize();
    var downcoded = "";
    var parts = original.match(downcoder.regex);
    if (parts) {
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].length == 1) {
                var mapped = downcoder.map[parts[i]];
                if (mapped != null) {
                    downcoded += mapped;
                    continue;
                }
            }
            downcoded += parts[i];
        }
    }
    else {
        downcoded = original;
    }
    return downcoded;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb3duY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCRTtBQUVGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVuRCxNQUFNLFNBQVUsU0FBUSxNQUFNO0lBSTVCLFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxPQUFPLEdBQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pCLEtBQUssSUFBSSxTQUFTLElBQUksT0FBTyxFQUFDO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBRTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUU7YUFDN0I7U0FDRjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFFO0lBQ3RELENBQUM7SUFDRCxjQUFjO1FBQ1osT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQy9FLENBQUM7Q0FDRjtBQUVELElBQUksU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLFFBQWU7SUFDdkMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFFO0lBQ3hCLElBQUksU0FBUyxHQUFVLEVBQUUsQ0FBQztJQUMxQixJQUFJLEtBQUssR0FBaUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUQsSUFBSSxLQUFLLEVBQUU7UUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN4QixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFO2dCQUN0QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7b0JBQ2xCLFNBQVMsSUFBSSxNQUFNLENBQUM7b0JBQ3BCLFNBQVU7aUJBQ1g7YUFDRjtZQUNELFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7S0FDRjtTQUFNO1FBQ0wsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQSIsImZpbGUiOiJkb3duY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9kamFuZ28vZGphbmdvL2Jsb2IvbWFzdGVyL2RqYW5nby9jb250cmliL2FkbWluL3N0YXRpYy9hZG1pbi9qcy91cmxpZnkuanMgIFxuXG5cbiAgQ29weXJpZ2h0IChjKSBEamFuZ28gU29mdHdhcmUgRm91bmRhdGlvbiBhbmQgaW5kaXZpZHVhbCBjb250cmlidXRvcnMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4gICAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gICAgICAgICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4gICAgICAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICAgICAgMy4gTmVpdGhlciB0aGUgbmFtZSBvZiBEamFuZ28gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkXG4gICAgICAgICB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dFxuICAgICAgICAgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORFxuICBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1JcbiAgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTXG4gIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUztcbiAgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OXG4gIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXG4gIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBNQVBTID0gcmVxdWlyZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnbWFwcycpKTtcblxuY2xhc3MgRG93bmNvZGVyIGV4dGVuZHMgT2JqZWN0IHtcbiAgbWFwOmFueTtcbiAgY2hhcnM6QXJyYXk8c3RyaW5nPjtcbiAgcmVnZXg6YW55O1xuICBpbml0aWFsaXplKCkge1xuICAgIGlmICh0aGlzLm1hcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tYXAgPSB7fTtcbiAgICB0aGlzLmNoYXJzID0gW107XG4gICAgZm9yKHZhciBpIGluIE1BUFMpIHtcbiAgICAgIHZhciBtYXBwaW5nOmFueSA9IE1BUFNbaV1cbiAgICAgIGZvciAodmFyIGNoYXJhY3RlciBpbiBtYXBwaW5nKXtcbiAgICAgICAgdGhpcy5tYXBbY2hhcmFjdGVyXSA9IG1hcHBpbmdbY2hhcmFjdGVyXSA7XG4gICAgICAgIHRoaXMuY2hhcnMucHVzaChjaGFyYWN0ZXIpIDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWdleCA9IG5ldyBSZWdFeHAodGhpcy5jb25zdHJ1Y3RSZWdleCgpLCdnJykgO1xuICB9XG4gIGNvbnN0cnVjdFJlZ2V4KCkge1xuICAgIHJldHVybiBbXCJbXCIsIHRoaXMuY2hhcnMuam9pbignJyksICddfFteJywgdGhpcy5jaGFycy5qb2luKCcnKSwgJ10rJ10uam9pbignJylcbiAgfVxufVxuXG52YXIgZG93bmNvZGVyID0gbmV3IERvd25jb2RlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsOnN0cmluZyl7XG4gIGRvd25jb2Rlci5pbml0aWFsaXplKCkgO1xuICB2YXIgZG93bmNvZGVkOnN0cmluZyA9IFwiXCI7XG4gIHZhciBwYXJ0czpBcnJheTxzdHJpbmc+ID0gb3JpZ2luYWwubWF0Y2goZG93bmNvZGVyLnJlZ2V4KTtcbiAgICBcbiAgaWYgKHBhcnRzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcGFydHMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICBpZiAocGFydHNbaV0ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdmFyIG1hcHBlZCA9IGRvd25jb2Rlci5tYXBbcGFydHNbaV1dIDtcbiAgICAgICAgaWYgKG1hcHBlZCAhPSBudWxsKSB7XG4gICAgICAgICAgZG93bmNvZGVkICs9IG1hcHBlZDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvd25jb2RlZCArPSBwYXJ0c1tpXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG93bmNvZGVkID0gb3JpZ2luYWw7XG4gIH1cbiAgcmV0dXJuIGRvd25jb2RlZDtcbn1cblxuIl19
