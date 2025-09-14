const arr = [23, 45, 67, 89, 12, 14];

console.log(largest(arr), smallest(arr));

function largest(arr) {
  let largest = Math.max();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function smallest(arr) {
  let smallest = Math.min();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
