## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

<figure>
圖片加上圖片解說的說明

<figcaption>
圖片解說的說明

<dd> definition description
解釋標題是什麼


## 請問什麼是盒模型（box modal）
在css中，每個元素像是一個盒子，
可以控制尺寸寬與高，及與其他元素的距離位置，
每個元素都有四個區域範圍，圍繞著元素，
有內向外分別是content ->padding->border->margin
而用來調整這些區域則可使用top,bottom,left,right來控制:

>  例如:
	padding-top:100px，則是指content area向上延伸100px
	border則是指外框的大小，其設定值可使用 border-style來設定線條的樣式
	margin則是指與其他元素的距離


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. display :inline
稱為行內元素，行內元素不可以設定上下margin，但可以與其他元素排列在同一行，不過只能控制左右距離。

2. display :block
稱為區塊元素，區塊元素該行只能有一個區塊元素佔據整行。

3. display :inline-block 
擁有行內與區塊元素的特性，可以設定上下margin也可以與其他元素排列在同一行。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. stactic：是指元素的位置是預設值，不會特別定位在頁面上面，而是依照瀏覽器預設的位置自動排版在網頁上。

2. relative：是指元素的位置是相對定位，若是沒有特別設定，預設值則是會依照瀏覽器預設的位置做相對位置排列，然而設定了top,right,left,bottom，也不會影響其他元素原本所在的位置。

3. absolute：是指絕對定位，會根據父層有下相對定位的元素，來做絕對定位來排列位置，父層必須要設定relative，否則absolute會一直往父層找尋相對定位，若是上一層都沒有做相對定位，則會根據body元素（瀏覽器給的位置）做絕對定位。

4. fixed：固定在頁面上的固定位置，捲動依然會停留在設定的位置。