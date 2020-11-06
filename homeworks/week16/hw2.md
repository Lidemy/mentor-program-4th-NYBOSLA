**程式Event Loop + Scope**
```
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}

```
**程式解釋**
**註解**
- 1秒=1000 毫秒

execution content執行環境，每個執行環境都有一個scope chain
它的執行環境會互相堆疊（stack），
每個execution conten 都有一個variable object(V.O)，
然而每個宣告的變數都會被一個一個的加入在V.O裡面的物件中，

step1: 建立一個迴圈，初始值為變數i=0，
變數i=0會被被放入V.O物件裡面，

vo:{
    i=0
}

step2: 印出字串i為 0 , 檢查i=0是否 <5 ，答案是 進入block
step3: 執行setTimeout的函式，時間為0*1000=0秒後，印出 0
step4: 返回迴圈 i+1=1 , 檢查i=1 是否 <5 ，答案是 進入block
原本v.o裡的物件i=0 改為值賦1
vo:{
    i=1
}

step5: 執行setTimeout的函式，時間為1*1000 = 1000毫秒 = 1秒後印出 1
step6: 返回迴圈 i=1 , 1+1=2 ,檢查i=2 是否 <5 ，答案是，進入block
原本v.o裡的物件i=1 改為值賦為2
vo:{
    i=2
}
step7: 執行setTimeout的函式，時間為2*1000 = 2000毫秒 = 2秒後印出 2
step8: 返回迴圈 i=2 , 2+1=3 ,檢查i=3 是否 <5 ,答案是，進入block
原本v.o裡的物件i=2 改為值賦為1
vo:{
    i=3
}

step9: 執行setTimeout的函式，時間為3*1000 = 3000毫秒 = 3秒後印出 3
step10: 返回迴圈 i=3 , 3+1=4 ,檢查i=4 是否 <5 ,答案是，進入block
原本v.o裡的物件i=3 值賦為4
vo:{
    i=4
}
step11: 執行setTimeout的函式，時間為4*1000 = 4000毫秒 = 4秒後印出 4

step12: 返回迴圈 i=4 ,4+1=5 ,檢查i=5 是否 <5 ,答案否，跳出迴圈
原本v.o裡的物件i=4，因為條件式的範圍i=5沒有小於5，因此v.o的值不變。
vo:{
    i=4
}

