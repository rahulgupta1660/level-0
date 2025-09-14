const arr = ["Dosa", "Pepsi", "Samosa", "Namkeen"];

const key = "Dosa";

console.log(
  linearSearch(arr, key) === -1
    ? "Not found"
    : `${key} Found at index ${linearSearch(arr, key)}`
);

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}
