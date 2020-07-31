## 什麼是 DOM？
DOM是Document Object Model，
是瀏覽器提供給程式語言來操控html的方式，
當網頁在載入的時候，瀏覽器會創建一個文件的物件模型，
，將HTML裡面的tag，看成一個節點（node），
瀏覽順序從上到下渲染，而透過DOM，可以讓Javascript來操控DOM，
改變或新增html的元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
  `
  <div class="out">
    <div class="inner">
        <button class="click">點擊</button>
    </div>
  </div>
 `
 ```<script>
    addEven('.out');
    addEven('.inner');
    addEven('.click');
    function addEven(classname){
    document.querySelector(classname).addEventListener('click',function(){
    console.log(classname)
    },false)
}
    </script>
 ```
 這邊設定false ，

 點擊click後，會觸發監聽的冒泡順序為：
 click->inner->out

指dom裡面事件傳遞的順序，
事件順序分為兩種：
1. 冒泡：事件再往上從子節點一路逆向傳回去根節點，這時候就叫做冒泡階段BUBBLING_PHASE ;
2. 捕獲： 從根節點傳到子節點，為捕獲階段CAPTURING_PHASE。

然而要決定要先捕獲還是冒泡，可以在
`addEventListener`事件設定中，設定第三個參數false or true，若是沒有設定第三個參數，
預設是false 冒泡。

## 什麼是 event delegation，為什麼我們需要它？

事件代理機制，是指不需要在每一個addEventListener
裡面設定事件監聽的順序，可以將監聽綁在最外層，透過事件傳遞的方法，去做監聽事件的執行順序。
這樣就不需要設定多個addEventListener

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()

元素都會有預設行為，例如超連結<a>的預設行為是link連結
點選則會自動執行預設，有的時候是為了語意的表達，不一定需要此預設行為，若是加上事件監聽，則會觸發他的預設
因此可以使用preventDefault() ，終止這個預設行為。

若是在
`
  <div class="out">
    <div class="inner">
        <a>我是連結<a>
        <button class="click">點擊</button>
    </div>
  </div>
 `

 `
    <script>
    addEven('.out');
    addEven('.inner');
    addEven('.click');

    window.addEventListener('click',function(e){
    e.preventDefault();
        },true)

    function addEven(classname){
    document.querySelector(classname).addEventListener('click',function(){
    console.log(classname)
    },fasle)}
    </script>
  `


event.stopPropagation() 
不想往上回報，
在html裡面寫了三個div，
分別為以下這樣
在最內層的click下了 stopPropagation()
就不會在其他地方觸發監聽。

 `
  <div class="out">
    <div class="inner">
        <button class="click">點擊</button>
    </div>
  </div>
 `
 `
    <script>
    addEven('.out');
    addEven('.inner');
    
    function addEven(classname){
    document.querySelector(classname).addEventListener('click',function(){
    console.log(classname)
    },fasle)}

    document.querySelector('.click').addEventListener('click',function(e){
    e.stopPropagation()
    console.log('click冒泡')
    },false)}
     </script>
 `
   



 