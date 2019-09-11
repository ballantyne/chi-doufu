"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isChinese = require('contains-chinese');
const pinyin = require('pinyin');
const Segment = require('segment');
var segment = new Segment();
segment.useDefault();
function pronounce(word, options = {}) {
    if (options.pronunciation == undefined) {
        options.pronunciation = 'mandarin';
    }
    switch (options.pronunciation) {
        case 'cantonese':
            var cantonese = require('cantonese');
            return word.split('').map((character) => {
                return cantonese.toLatin(character);
            }).join('');
        default:
            return pinyin(word);
    }
}
function pinyinify(original, options) {
    if (isChinese(original)) {
        var parts = segment.doSegment(original, { simple: true });
        return parts.map((word) => {
            return pronounce(word, options);
        }).join(' ');
    }
    else {
        return original;
    }
}
exports.pinyinify = pinyinify;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGluZXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDOUMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUluQyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQzVCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUVyQixTQUFTLFNBQVMsQ0FBQyxJQUFXLEVBQUUsVUFBa0MsRUFBRTtJQUNsRSxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksU0FBUyxFQUFFO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO0tBQ3BDO0lBRUQsUUFBTyxPQUFPLENBQUMsYUFBYSxFQUFFO1FBRTVCLEtBQUssV0FBVztZQUNkLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBZ0IsRUFBRSxFQUFFO2dCQUM3QyxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRWI7WUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFHRCxTQUFnQixTQUFTLENBQUUsUUFBZSxFQUFFLE9BQWlDO0lBQzNFLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7UUFDdkQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO1NBQU07UUFDTCxPQUFPLFFBQVEsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFURCw4QkFTQyIsImZpbGUiOiJjaGluZXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNDaGluZXNlID0gcmVxdWlyZSgnY29udGFpbnMtY2hpbmVzZScpO1xuY29uc3QgcGlueWluID0gcmVxdWlyZSgncGlueWluJyk7XG5jb25zdCBTZWdtZW50ID0gcmVxdWlyZSgnc2VnbWVudCcpO1xuXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBpbmdzJztcblxudmFyIHNlZ21lbnQgPSBuZXcgU2VnbWVudCgpO1xuc2VnbWVudC51c2VEZWZhdWx0KCk7XG5cbmZ1bmN0aW9uIHByb25vdW5jZSh3b3JkOnN0cmluZywgb3B0aW9uczp0eXBlcy5QYXJhbWV0ZXJpemVPcHRpb25zPXt9KSB7XG4gIGlmIChvcHRpb25zLnByb251bmNpYXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucy5wcm9udW5jaWF0aW9uID0gJ21hbmRhcmluJztcbiAgfVxuICBcbiAgc3dpdGNoKG9wdGlvbnMucHJvbnVuY2lhdGlvbikge1xuICBcbiAgICBjYXNlICdjYW50b25lc2UnOlxuICAgICAgdmFyIGNhbnRvbmVzZSA9IHJlcXVpcmUoJ2NhbnRvbmVzZScpO1xuICAgICAgcmV0dXJuIHdvcmQuc3BsaXQoJycpLm1hcCgoY2hhcmFjdGVyOnN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gY2FudG9uZXNlLnRvTGF0aW4oY2hhcmFjdGVyKTtcbiAgICAgIH0pLmpvaW4oJycpXG4gICAgICBcbiAgICBkZWZhdWx0OiBcbiAgICAgIHJldHVybiBwaW55aW4od29yZCk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGlueWluaWZ5IChvcmlnaW5hbDpzdHJpbmcsIG9wdGlvbnM6dHlwZXMuUGFyYW1ldGVyaXplT3B0aW9ucyk6c3RyaW5nIHtcbiAgaWYgKGlzQ2hpbmVzZShvcmlnaW5hbCkpIHtcbiAgICB2YXIgcGFydHMgPSBzZWdtZW50LmRvU2VnbWVudChvcmlnaW5hbCwge3NpbXBsZTogdHJ1ZX0pXG4gICAgcmV0dXJuIHBhcnRzLm1hcCgod29yZDpzdHJpbmcpID0+IHsgXG4gICAgICByZXR1cm4gcHJvbm91bmNlKHdvcmQsIG9wdGlvbnMpO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb3JpZ2luYWw7XG4gIH1cbn1cbiJdfQ==
