var parameterize = require('../build');
var assert = require('assert');

describe('parameterize', () => {
  
  var tests = [
    {
      name: 'Special Characters',
      source: 'parameterized url with special characters, öçıŞÇ', 
      output: 'parameterized-url-with-special-characters-ocisc',
    },
    {
      name: 'Test length',
      source: 'this is a long text', 
      output: 'this-is-a-l',
      options: {
        num_chars: 11
      }
    },
    {
      name: 'Test Delimiter',
      source: 'this is a long text', 
      output: 'this_is_a_l',
      options: {
        num_chars: 11,
        delimiter: '_'
      }
    },
    {
      name: '米兔',
      source: '米兔',
      output: 'mitu'
    },
    {
      name: '光復香港，時代革命 - 繁',
      source: '光復香港，時代革命',
      output: 'guang-fu-xianggang-shi-dai-geming'
    },
    {
      name: '光复香港，时代革命 - 简',
      source: '光复香港，时代革命',
      output: 'guangfu-xianggang-shidai-geming'
    },
    {
      name: '光復香港，時代革命 - 繁 廣東話',
      source: '光復香港，時代革命',
      output: 'gwong-fuk-heunggong-si-doi-gaakming',
      options: {
        pronunciation: 'cantonese'
      }
    },
    {
      name: '光复香港，时代革命 - 简 广东话',
      source: '光复香港，时代革命',
      output: 'gwongfuk-heunggong-sidoi-gaakming',
      options: {
        pronunciation: 'cantonese'
      }
    },
    {
      name: '我爸是李刚',
      source: '我爸是李刚',
      output: 'wo-ba-shi-ligang'
    }
  ];

  /*
    The word segmentation that is used is dependent on the segment library currently.
    I see that there are discrepancies between how it segments traditional and simplified 
    characters.  I suspect that is because the traditional character word set has fewer words.
    If you want to improve the functionality you should make a pull request to the segment 
    npm module.  I only know a few words in cantonese so I can't say whether that functionality 
    works well.  If you speak cantonese and the test results above make no sense please tell me.
    
    The sentences I used in the tests are not about me.  At least I don't think that they are.  
    It is always interesting to learn new things about myself.  Sorry if that was not immediately 
    understandable.  I was juxtaposing ideas and trying to make clear that there seems to be a 
    double standard.  I guess no matter what I write people are going to decide for themselves 
    what I mean.  Seems like you need to know the context to understand why it seems like there
    are different standards for how justice is applied.  In one situation, the protestors are 
    asking for representation from their elected officials and to have their justice system
    remain autonomous.  In the other situation, the deputy director of public security bureau's 
    son just ran over a little kid with an SUV.  I am open to constructive criticism on this idea.  
    I don't consider myself the originator of this particular insight, but it seems to describe 
    what I see going on.  I am sure their are many examples to consider.  I'm pretty sure I have 
    never backed over anyone with any type of vehicle.  I think that I would remember that happening.
  */
  
  tests.forEach((test) => {
    it(test.name, () => {
      var result;

      if (test.options == undefined) {
        test.options = {};
      }

      result = parameterize(test.source, test.options);
      assert.equal(result, test.output);
    }); 
  })

})
