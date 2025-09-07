function fibonacci(num) {
  if (num <= 0) return [0]
  if (num == 1) return [0, 1]
 
  let arr = fibonacci(num - 1)
  const newValue = arr[arr.length - 2] + arr[arr.length - 1]
  arr.push(newValue)

  return arr
}

console.log(fibonacci(8))