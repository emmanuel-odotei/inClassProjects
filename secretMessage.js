let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//removing last item
secretMessage.pop();
//checking number of items left in the Array
//console.log(secretMessage.length);
//adding two items to end of list
secretMessage.push ('to', 'Program');
//changing the word 'easily' to 'right' in the array
secretMessage[7] = 'right';
//removing the first string of the Array
secretMessage.shift();
//adding the string 'Programming' to the beginning of the Array
secretMessage.unshift ('Programming');
//removing specific strings in the array and replace with single string 'know'.. .splice(starting index, deletecount, 'replacingword')
secretMessage.splice (6, 5, 'know,');
//console.log(secretMessage);
//Join all strings into a sentence
console.log(secretMessage.join(' '));