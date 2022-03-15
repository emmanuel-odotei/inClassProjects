let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
const storyWords = story.split(' ');
const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});

let verys = 0;
let reallys = 0;
let basicallys = 0;

for (word of storyWords) {
  if (word === 'very'){
    verys += 1
  } else if (word === 'really') {
    reallys += 1
  } else if (word === 'basically') {
    basicallys += 1
  }
}
let sentenceCount = 0;
storyWords.forEach(word => {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentenceCount += 1;
  }
});

const logInfo = (value1, value2, value3, value4, value5) => {
  console.log (`Word Count: ${value1}`);
  console.log (`Sentence Count: ${value2}`);
  console.log (`really Count: ${value3}`);
  console.log (`very Count: ${value4}`);
  console.log (`basically Count: ${value5}`);
};
console.log (logInfo(storyWords.length, sentenceCount, reallys, verys, basicallys))

console.log(betterWords.join(' '));
