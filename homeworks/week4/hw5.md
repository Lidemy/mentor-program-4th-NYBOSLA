## 請以自己的話解釋 API 是什麼

 api是一個媒介，讓應用程式與應用程式間可以透過共同的規範來傳遞資訊。傳遞這個行為可以分成獲取資訊、傳送資訊、更新資訊、刪除資訊，
 想要表達不同的行為，稱為method方法，在不同方法下有不同的規範規則。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
428 Precondition Required
只客戶端讀取一個資源的狀態時，使用put的方法，但伺服器已經更新，導致客戶端未更新所出現的衝突

508 Loop Detected 
伺服器再處理請求的時候，陷入無窮迴圈


505 不支援的 HTTP 版本

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

1.會有一個BaseUrl 網址
url:https://api.example.com/v1



|    說明     | Method | path    | 參數      | 範例   
| ---------- | ---     | --     | ---       |     --- |---|
| 獲取所有餐廳資料 |   GET   |  /stores     |  _limit:限制回傳資料數量 |     /stores?_limit=5     |  |  
| 回傳單一餐廳資料 |  GET    | /stores/id   |    無                 |        /stores/2  | |
| 刪除餐廳       |  DELETE |  /stores/id   |  無                  |         無       |  
| 新增餐廳       |  POST   | /stores       | name : 店名           |         無     |  
| 更改餐聽       |  PATCH  | /stores/id     |   name：店名          |        無   |  

