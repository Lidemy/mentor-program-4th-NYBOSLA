// 先抓取到輸入框的數字
document.addEventListener('DOMContentLoaded', () => {
  const enter = document.getElementById('enter');
  // console.log(enter);
  const content = document.getElementById('content');
  // console.log(content);
  const itemList = document.querySelector('.itemList');
  // console.log(itemList);
  // 在itemlist節點下新增div
  const itemself = document.createElement('div');
  itemself.setAttribute('class', 'item');

  enter.addEventListener('click', () => {
    itemList.appendChild(itemself);

    console.log(content.value);

    // 新增到item
    itemList.innerHTML = `<div class="item">
        <input type="checkbox"><p>這邊是記錄</p><i class="far fa-trash-alt">刪除</i></div>`;
  });
});
