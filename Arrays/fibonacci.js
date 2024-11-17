function fibonacci() {
  const fibonacci = [0];
  fibonacci[1] = 1;
  fibonacci[2] = 1;
  for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }
  return fibonacci;
}

function fibonacci(n, memo = {}) {
  if(n === 0 || n === 1){
    return n
  } 
  return fibonacci(n-1) + fibonacci(n-2)
}

for(let i=0;i<=10;i++){
  console.log(fibonacci(i))
}