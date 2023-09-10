
// this d6 function generates a random number between 1 and 6
function d6() {
  return Math.floor(Math.random() * 6) + 1;
}


// this getrolls function generates an array with the result of n die rolls
function getRolls(n) {
  const rolls = [];
  for (let i = 0; i < n; i++) {
    rolls.push(d6());
  }
  return rolls;
}

// this sum function adds the elements of an array passed to it
function sum(arr){
  return arr.reduce((prev, cur)=> prev + cur, 0)
}

export {d6, getRolls, sum}