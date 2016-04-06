var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * stuff.length ) ];

  console.log("the computer picked" + random_value);

for(var i = 0; i <stuff.length ; i++){
  if (stuff[i] === random_value){
  console.log("We have a match with " + stuff[i]);
}
}