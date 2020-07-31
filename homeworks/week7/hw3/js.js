
const itemList = document.querySelector('.itemList');
const enter = document.getElementById('enter');
const inputContent = document.querySelector('input[enter]');
// 新增
enter.addEventListener('click', () => {
  const num = 1;
  const addItem = document.createElement('div');
  addItem.classList.add('item');
  addItem.setAttribute('data-value', num);


  itemList.appendChild(addItem);
  addItem.innerHTML = `
  <p>${inputContent.value}</p>   

<div class="mark far fa-check-square">標記</div>
<div class="del far fa-trash-alt">刪除</div>`;
});
// 刪除

document.querySelector('.itemList').addEventListener('click', (e) => {
  if (e.target.classList.contains('del') === true) {
    document.querySelector('.itemList').removeChild(e.target.closest('.item'));
  } else {
    const style = document.querySelectorAll('.item p');
    for (let i = 0; i < style.length; i += 1) {
      console.log(style);
      style[i].style.background = 'yellow';
    }
  }
});
