function checkPrime(num){
  let flag = true
  if(num <=1 ) return false;
  for(let i=2;i*i<=num;i++){
    if(num % i === 0){
      flag = false;
      break
    }
  }
  return flag
}

function checkPrime1(num, div=2) {
  if(num<=1){
    return false
  } 
  if(div > Math.sqrt(num)){
    return true
  }

  if(num % div === 0){
    return false
  }
  else {
    return checkPrime1(num, div+1)
  }
}

function display(num, func){
  if(func(num)){
    console.log(num + ' is Prime')
  } else {
    console.log(num + ' is not Prime')
  }
}

display(4, checkPrime1)
display(5, checkPrime1)