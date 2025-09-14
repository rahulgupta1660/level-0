const arr = [2, 4, 6, 8, 10, 12, 14]; //sorted

const key = 14;

console.log(
  binarySearch(arr, key) === -1
    ? `${key} not found`
    : `${key} found at index ${binarySearch(arr, key)}`
);

function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else if (arr[mid] < key) {
      low = mid + 1;
    }
  }
  return -1;
}
