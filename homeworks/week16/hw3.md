**Hoisting**
```
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)

```
**執行環境**
每個執行環境(Execution Content)裡面都有scope chain,
在E.C裡面有一個Variable Object(V.O)

**變數生存範圍**
生存範圍可以分成block scope及global scope
在ES6以前變數是以function為單位之生存範圍(那時只有var)，
ES6以後增加了const與let這兩個變數規則後，則多了以block為生存範圍。
？？

E.C{


    V.O:{
        a:
        fucntion
    }
}

首先，變數a賦值為 1 ，在執行環境裡面的變數物件裡會有
1. a
2. function
   
然而var a =1 則
E.C{


    V.O:{
        a:10
        fucntion fn:{
            V.O{
                a:6
                function fu2:{
                    
                 }
            }
        
        }
    }
}

執行fn()之function，進入fu function
由於第一行console.log(a)，找不到變數a，因此它會往上一層找，
會找到global variable的a(var a =1)

// a=1 印出1

進入下行，funcion fn裡的v.o增加一個變數a,並且將他賦值給5,
// a=5 印出5

進入下行a++
5+1=6

進入下行 var a，在這行並沒有賦值任何數值，然而在function fn裡，已經有var a了，
因此這邊並不會有任何改變
進入下一行，執行funcion fn2,產生一個新的執行環境，
第一行console.log(a)，在這個執行程序裡面找不到變數a，
因此他會往上一層執行程序找，會找到var a = 6
// a=6 印出6
下一行 a=20 
由於只有宣告會提升，賦值不會，因此這裡的a=20，這個function裡面沒有變數a，因此什麼事情都不會發生
下一行 b=100
由於只有宣告會提升，賦值不會，因此這裡的b=100，這個funcion裡面沒有變數b，因此什麼事情都不會發生
結束funcion fn
下一行console.log(a)
//印出 1
下一行a=10
原先a=1的值，賦值為10
//印出 10
下一行console.log(b)
這個執行程序裡面沒有變數b，因此
//印出undefined

