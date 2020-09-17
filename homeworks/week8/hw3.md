## 什麼是 Ajax？
AJAX全稱為"Asynchronous JavaScript and XML"(非同步JavaScript和XML)，
就是可以透過瀏覽器提供的api，不需要換頁就可以和server做溝通，透過javascript在送出request時不需要等待伺服器回傳的response，就可以先執行後面的程式碼，把前端網頁的渲染跟後端資料傳遞的功能分開。

## 用 Ajax 與我們用表單送出資料的差別在哪？
他的特性與form表單相比較，form表單送出request，等伺服器傳送回response，會再新增一個頁面，而ajax透過api與伺服器溝通時，送回來的資訊只有資料，沒有HTML的內容。

## JSONP 是什麼？
 JSONP是JOSN with padding的縮寫，可以讓網頁透過JSON來獲取別的網域的資料，
 因為網頁有同源政策，利用``<script>``這個元素的開放政策可以讓網頁透過JSON來獲取資，
 這種模式叫做JSONP。

## 要如何存取跨網域的 API？
CORS，全名為 Cross-Origin Resource Sharing，跨來源資源共享，若是想要請求HTTP跨來源，Serve必須在Response裡面的Header加上
Access-Control-Allow-Origin發出請求request。
補充：
有一些 API 會需要 Preflight Request 的方式先驗證 API 有沒有提供 CORS 給發出 request 的 Origin，若是這驗證未通過，後續的request也無法發出成功。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
第八週是使用瀏覽器來發送request，而同源政策會將不是來自同個ip位置的資料擋下，無法回傳response，第四週是使用cli跟javascript來發送request，少了瀏覽器擋下伺服器回傳的response

