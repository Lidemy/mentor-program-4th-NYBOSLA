let num = 1;
let todoCount = 0;
let incompleteTodoCount = 0;
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e)
  const content = document.querySelector('input[name=content]').value;

  // 以下這是錯的寫法
  // let content = input[name = content].value
  // console.log("顯示內容" + content)
  // console.log(content)
  if (!content) {
    console.log('請輸入值');
  } else {
    const div = document.createElement('div');
    div.classList.add('content');
    div.setAttribute('data-value', num);
    // console.log(num)
    div.innerHTML = `
        <input class="checkbox" name="checkbox" type="checkbox">
        <div class="border">
        ${escapeHtml(content)}</div>
        <button class="delete pure-button">刪除</button>`;
    document.getElementById('content').appendChild(div);
    todoCount++;
    incompleteTodoCount++;
    updateCounter();
  }

  num++;

  document.querySelector('input[name=content]').value = '';
  // console.log(content)
}, true);
// 跳脫字元
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 刪除功能，綁定在上層，這樣就可以抓到content底層所有的東西
document.getElementById('content').addEventListener('click', (e) => {
  // console.log(alert('hi'))
  // 這邊可以看到各項點擊的事件
  // console.log(e.target)
  const { target } = e;
  if (target.classList.contains('delete')) {
    target.parentNode.remove();
    todoCount--;
    incompleteTodoCount--;
    if (!target.checked) {
      // console.log('uncheck')
      incompleteTodoCount - 1;
      updateCounter();
    } else {
      console.log('check');
      incompleteTodoCount++;
      updateCounter();
    }

    return;
  }
  if (target.classList.contains('checkbox')) {
    // console.log(target.checked)
    if (target.checked) {
      // 加上class 家在整個content裡面
      target.parentNode.classList.add('done');
      todoCount--;
      incompleteTodoCount--;
    } else {
      target.parentNode.classList.remove('done');
      incompleteTodoCount++;
    }
  }


  // 可以check寫在這邊

  // var checkbox = document.querySelector("input[name=checkbox]");

  // checkbox.addEventListener('change', function() {
  //     if (this.checked) {
  //         console.log('checked')
  //             // Checkbox is checked..
  //     } else {
  //         // Checkbox is not checked..
  //         console.log('unchecked')
  //     }
  // });
});
// 也可以寫在這邊

document.getElementById('content').addEventListener('change', (e) => {
  // console.log(e.target)
  const { checked } = e.target;
  console.log(`${checked}測試點選`);
  deleteAll();
  if (checked) {
    console.log(e.target);
    // console.log('checked')
    // 找出所有已完成的代辦事項input checke是true or classname加上checked
    const { target } = e;
    target.classList.add('checked');
    // 寫錯的寫法
    // document.querySelector(
    //         'input[name = checkbox').classList.add('checked')
    // document.querySelector('.undo').textContent = incompleteTodoCount
    updateCounter();
  } else {
    console.log('unchecked');
    document.querySelector(
      'input[name = checkbox',
    ).classList.remove('checked');
    console.log(e.target);
    document.querySelector('.undo').textContent = incompleteTodoCount + 1;
  }
});

function updateCounter() {
  document.querySelector('.undo').textContent = incompleteTodoCount;
}

function deleteAll() {
  document.querySelector('.clear_all').addEventListener('click', () => {
    const input = document.querySelectorAll(
      'input[name = checkbox]',
    );
    const inputLen = input.length;
    console.log(inputLen);
    for (i = 0; i < inputLen; i++) {
      console.log(input[i]);
      if (input[i].classList.contains('checked')) {
        input[i].parentNode.remove();
      }
    }
  });
}


document.querySelector('.selector').addEventListener('click', (e) => {
  // console.log(e)
  // console.log(e.target.getAttribute('data-filter'));
  const { target } = e;
  const filter = target.getAttribute('data-filter');
  if (filter === 'all') {
    const input = document.querySelectorAll(
      'input[name = checkbox]',
    );
    const inputLen = input.length;
    console.log(inputLen);
    for (i = 0; i < inputLen; i++) {
      console.log(input[i]);
      input[i].parentNode.classList.remove('hide');
    }
  } else if (filter === 'incompleted') {
    const input = document.querySelectorAll(
      'input[name = checkbox]',
    );
    const inputLen = input.length;
    console.log(inputLen);
    for (i = 0; i < inputLen; i++) {
      console.log(input[i]);
      if (input[i].classList.contains('checked')) {
        input[i].parentNode.classList.add('hide');
      } else {
        input[i].parentNode.classList.remove('hide');
      }
    }
  } else {
    const input = document.querySelectorAll(
      'input[name = checkbox]',
    );
    const inputLen = input.length;
    console.log(inputLen);
    for (i = 0; i < inputLen; i++) {
      console.log(input[i]);
      if (input[i].classList.contains('checked')) {
        input[i].parentNode.classList.remove('hide');
      } else {
        input[i].parentNode.classList.add('hide');
      }
    }
  }
});


// 儲存按鈕
const todo = [];


document.querySelector('.btn_save').addEventListener('click', () => {
  const todos = document.getElementById('content');
  console.log(todos);
  // getAttribute('data-filter')
});
