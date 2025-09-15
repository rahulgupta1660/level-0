const arr = [1, 2, 3, 4];

console.log(reverse(arr));

function reverse(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    swap(arr, low, high);
    low++;
    high--;
  }
  return arr;
}

function swap(arr, a, b) {
  arr[b] = arr[a] + arr[b];
  arr[a] = arr[b] - arr[a];
  arr[b] = arr[b] - arr[a];
}
