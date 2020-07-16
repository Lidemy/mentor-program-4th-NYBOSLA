## 交作業流程

1. 開一個branch week1
2. master切換到branch，輸入git checkout week1
3. 開始寫作業
4. 把更改的log加入git管理，輸入 add.
5. 加入commit ，輸入git commit -am "week1"
6. 將檔案push上去github ，輸入git push origin week1 
7. 到github裡的repo，點選pull request
8. 把Pull request的連結放在學習系統繳交作業
9. 有什麼問題可以在下面留言

10. compare & pull request 若沒有出現可以輸入 new pull request，將 branch 選成自己要的再點擊 Creat pull request
11. 進入 https://learning.lidemy.com/ 的作業列表
點擊新增作業，選擇作業當週並輸入 pull request 連結
確認檢查過作業以及自我檢討修正錯誤。
12. 助教收到 pull request 並改完之後會 merge week(n) 到 master
13. 把local 端的檔案切換到master，輸入git checkout master
14. 把merger後的檔案pull下來，輸入git pull origin master
15. 記得刪除自己local端的branch -d week1 