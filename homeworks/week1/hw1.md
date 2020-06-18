## 交作業流程

1. 開一個branch week1
2. master切換到branch，輸入git checkout week1
3. 開始寫作業
4. 把更改的log加入git管理，輸入 add.
5. 加入commit ，輸入git commit -am "week1"
6. 將檔案push上去github ，輸入git push origin week1 
7. 到github裡的repo，點選pull request
8. 把Pull request的連結放在學習系統繳交作業


改好作業後

1. 把local 端的檔案切換到master，輸入git checkout master
2. 把merger後的檔案pull下來，輸入git pull origin master
3. 記得刪除自己local端的branch -d week1 