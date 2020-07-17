function join(arr, concatStr) {
  // 給一個空的陣列，之後要放加好的字串
  // 先撈出arr
  // 然後一個一個把！加上去
  let resultString = '';
  for (let i = 0; i < arr.length; i + 1) {
    resultString += arr[i] + concatStr;
    console.log(resultString);
    // a!
    // a!b!c
  }
}

function repeat(str, times) {
  let result = '';
  for (let i = 0; i <= times; i + 1) {
    result += str;
  }
  console.log(result);
}

join(['a'], '!');
join(['a', 'b', 'c'], '!');
join([1, 2, 3], '');
repeat('a', 5);
repeat('yoyo', 2);
