**題目Event Loop**
```
console.log(1)
setTimeout(()=>{
    console.log(2)

},2)
console.log(3)
setTimeout(()=>{
    console.log(4)
},0)
console.log(5)
```


**解釋程式**
程式是由上到下執行，
- step 1 : 印出 1
- step 2 : 執行 setTimeout 函式，2 秒後印出 2
- step 3 : 印出3
- step 4 : 執行 setTimeout 函式，0 秒後印出 4
- step 5 ：印出 5