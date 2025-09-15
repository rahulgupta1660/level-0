const arr = [2, 4, 6, 8, 10];

subArray(arr);

function pairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`(${arr[i]},${arr[j]})`);
    }
  }
}

function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      console.log(sum);
    }
  }
}
