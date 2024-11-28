function generateBinaryStrings(n) {
  const result = [];

  function backtrack(current) {
    if(current.length === n){
      result.push(current);
      return;
    }
    backtrack(current + "0")
    backtrack(current + "1")
  }

  backtrack("");

  return result;
}


console.log(generateBinaryStrings(4)); 
