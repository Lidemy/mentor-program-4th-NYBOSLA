## 什麼是 DOM？
DOM是Document Object Model，
是瀏覽器提供給程式語言來操控html的方式，
當網頁在載入的時候，瀏覽器會創建一個文件的物件模型，
，將HTML裡面的tag，看成一個節點（node），瀏覽順序從上到下渲染，而透過DOM，可以讓Javascript來操控DOM，改變或新增html的元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

指dom裡面事件傳遞的順序，例如，加上eventListener後哪一個元素先執行呢？
事件順序分為兩種：
1. 冒泡：事件再往上從子節點一路逆向傳回去根節點，這時候就叫做冒泡階段BUBBLING_PHASE ;
2. 捕獲： 從根節點傳到子節點，為捕獲階段CAPTURING_PHASE。

然而要決定要先捕獲還是冒泡，可以在
`addEventListener`

設定時第三個參數設定，false or true，若是沒有設定第三個參數，
預設是false 冒泡。

## 什麼是 event delegation，為什麼我們需要它？

事件代理機制，是指不需要在每一個
```
addEventListener
```
裡面設定事件監聽的順序，可以將監聽綁在最外層，透過事件傳遞的方法，去做監聽事件的執行順序。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

```
<a>

`
event.addEventListener('click',fn );
`

event.preventDefault() 
event.stopPropagation()