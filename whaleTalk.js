let input = 'Roses are red and violets are blue';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultsArray = [];

for (let i = 0; i < input.length; i++){
  //console.log(i);
  if (input[i] === 'e'){
    resultsArray.push(input[i]);
  }
  if (input[i] === 'u'){
    resultsArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++){
     //console.log(j)
     if (input [i] === vowels[j]){
      resultsArray.push(input[i]);
     }
  }
}
//console.log(resultArray);
const resultString = resultsArray.join(' ') .toUpperCase();
console.log(resultString);