function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middle) ;
  const secondHalf = arr.slice(middle);

  const sortedLeft = mergeSort(firstHalf);
  const sortedRight = mergeSort(secondHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
      
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  } 
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result
}

const unsortedArray = [38, 27, 43, 3];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); 