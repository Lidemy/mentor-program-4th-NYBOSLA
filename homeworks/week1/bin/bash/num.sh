#  輸入數字n，然後產生n個js資料
#--下面這個是寫錯的紀錄
#for number in ${number}.js
#do
#touch "${number}.js";
#echo "檔案建立完成";
#done



for (( i=1; i<=$1; i=i+1 ))
do
  touch "${i}.js";
done
echo "檔案建立完成";