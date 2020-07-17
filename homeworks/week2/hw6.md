``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行一個 function，function 名稱叫做 isValid
2. 這個 function 的引數是一個陣列，這個這列有 6 個數字
3. 引數傳入 arr 這個參數裡
4. 執行第3行開始跑迴圈
5. 第一圈迴圈開始的起點是 0 ，終點是陣列的長度，arr.length 長度總共 6 ，所以會從arr[0]跑到arr[5]，總共6圈
6. 第一圈 i=0，執行判斷式，若是陣列的第一個數字小於等於 0，回傳 invalid，這邊第一個數字是 3，3沒有小於等於0，因此不會回傳 invalid，繼續跑第二次迴圈。
7. 第二圈 i=1，執行判斷式，若是第二個數字小於等於 0，回傳 invalid，這邊第二個數字是 5，5 沒有小於等於 0，因此不
   會回傳 invalid，繼續跑第三次迴圈。
8. 第三圈 i=2，執行判斷式，若是第三個數字小於等於 0，回傳 invalid，這邊第二個數字是 8，8 沒有小於等於 0，因此不
   會回傳 invalid，繼續跑第四次迴圈。
9. 第四圈 i=3，執行判斷式，若是第二個數字小於等於 0，回傳 invalid，這邊第二個數字是 13，13 沒有小於等於 0，因此不會回傳 invalid，繼續跑第五次迴圈。
10. 第四圈 i=4，執行判斷式，若是第二個數字小於等於 0，回傳 invalid，這邊第二個數字是 22，22 沒有小於等於 0，因此不會回傳 invalid，繼續跑第6次迴圈。
10. 第四圈 i=5，執行判斷式，若是第二個數字小於等於 0，回傳 invalid，這邊第二個數字是 35，22 沒有小於等於 0，因此不會回傳 invalid，但已經跑到arr[5]，因此判斷式結束

11. 執行 6 行，起始值為 i = 2 ，終點為 i < 
12. 執行第 7 行，i=2 若是arr[2]，這邊是8 ， 8 不等於 arr[1] + arr[0] ，返回invalid ，3+5 === 8，因此不返回invalid
13. 執行第 8 行，i=3 若是arr [3]，這邊是13， 13 不等於 arr[2] + arr[1] ，返回invalid，8+5 ===13，因此不返回invalid
14. 執行第 9 行，i=4 若是arr [4]，這邊是22， 22 不等於 arr[3] + arr[2] ，返回invalid，13+8 !== 21，因此跳出迴圈，回傳invalid