var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * stuff.length ) ];

console.log("the computer picked" + random_value);
var cnt = 1;


function binarySearch(inputArray, searchParam){
  var length = inputArray.length;
  console.log("cnt:", cnt);
  cnt++;

  while(length>1){
    var midpoint = Math.floor(length/2);

  if(searchParam > inputArray[midpoint -1]){
    return binarySearch(inputArray.splice(midpoint, length), searchParam);
   } else {
    return binarySearch(inputArray.splice(0, midpoint), searchParam);
   }
  }
    console.log("the answer is" + inputArray[0]);
} 

binarySearch(stuff, random_value)