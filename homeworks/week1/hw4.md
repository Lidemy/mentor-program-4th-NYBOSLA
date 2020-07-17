## 跟你朋友介紹 Git

git是一個在做版本控制的程式，透過git版本控制創建一個新的紀錄，這個新的紀錄是將原本的主程式（master），拉出多個分支檔案(branch)，在這些分支檔案去修改新增code，確認沒問題後，再merge回主要的master主檔案裡。

## 安裝git
1. 安裝方法網站有寫：
https://git-scm.com/
2. 安裝完成後，查看git版本， `git  --version`，
3. 設定你的帳戶，連結到 Github 
設定帳號 `git config —global user.name “<Your Name> `
設定信箱 `git config —global user.email "<your@gmail.com>" `
檢查使用者：`git config --list`
## 使用git的基礎方法
使用 command line切換到想要加入版本控制的資料夾
1. 初始化版本  輸入`git intit`，這樣這個資料夾加上版本控制這個功能。
2. 後續若有新增檔案到這個有加入git功能的資料夾，這些檔案在還沒新增進去git前，他的狀態是無法追蹤（會顯示untracked），因此要使用`git add `把檔案加入到版本控制功能裡，若是已經`add`過的檔案則會顯示該檔案已經staged。。
3. 想要掌握git使用狀態可以輸入 `git status`，可以查看git控制狀況
4. `git branch`這個指令是在master主程式以外加入一個分支來編輯code，可以避免更改到重要的程式，更改後再merge回主程式
5. `git checkout`在不同版本與分支間切換
6. 加入`add`後只是單純把檔案加上版本控制這個功能，但並未創建一個新的版本，因此要把檔案加上`git commit`，這時會建立一個版本，每個版本都會有一組獨一無二的流水號，這樣也不擔心會有一樣的檔案出現，也可以在這個commit打上檔案的敘述，紀錄修改內容。
7. 刪除 git 則使用`rm -r git` ，就可以把原本資料夾裡面的git版本控制刪除
8. `git log`可以查看修改過的 git 歷史紀錄，

9. pull 是把在github 上面的資料拉下來，與local端同步
10. push 是把自己本地端的資料，推上去github

#####  重要註解每次修改都要將檔案使用`add`加入，然後等code寫到一個段落，則使用 `commit`建立版本