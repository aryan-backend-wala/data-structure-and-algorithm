export function decimal2Binary(n, memo={}){
  if(n === 0 || n === 1) {
    return n;
  }

  if(memo[n] !== undefined){
    return memo[n]
  }

  const bits = []
  bits.push((n % 2), decimal2Binary(Math.floor(n / 2), memo));
  memo[n] = bits.reverse().join('')
  return memo[n];
}