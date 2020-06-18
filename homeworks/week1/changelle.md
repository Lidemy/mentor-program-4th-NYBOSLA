### shell script 筆記

放在!bin/bash資料夾裡面

1. 使用shell script的副檔名是`.sh`

2. 新增一個檔案 ` test.sh`
腳本範例：

```
 # 宣告使用 /bin/bash
#!/bin/bash
touch "$1.js";
echo "檔案建立完成";
```

3. `chmod +x test.sh` 將檔案設定可執行

4.  檢視是否有+x執行權限 `ls -l test.sh`

會出現下列訊息
```-rwxr-xr-x  1 Sharon  staff  539  6 18 14:18 test.sh```

5. 執行shell script 檔案
```./test.sh```