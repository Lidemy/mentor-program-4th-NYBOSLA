const request = require('request');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';
const args = process.argv;
const enter = args[2];
const params = args[3];


// 印出前二十本書名的id與書名

function listBooks() {
  request(`${baseUrl}/books?_limit=20`, (error, Response, body) => {
    if (error) {
      console.log('抓取失敗', error);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  });
}

// listBooks();

function readBooks(id) {
  request(`${baseUrl}/books/${id}`, (error, Response, body) => {
    if (error) {
      console.log('抓取失敗', error);
    }
    const data = JSON.parse(body);
    console.log(data);
  });
}
// 測試呼叫
// readBooks(1);

function deleteBooks(id) {
  request.delete(`${baseUrl}/books/${id}`, (error, Response, body) => {
    if (error) {
      console.log('刪除失敗', error);
      console.log(body, Response);
    }
    console.log('刪除成功');
  });
}
// 測試呼叫
// deleteBooks(1);

function createBooks(name) {
  request.post({
    url: `${baseUrl}/books`,
    form: {
      name,
    },
  }, (error, Response) => {
    if (error) {
      console.log('新增失敗', error);
      console.log(Response);
    }
    console.log('新增成功');
  });
}
// 測試呼叫
// createBooks('name');

function update(id, name) {
  request.patch({
    url: `${baseUrl}/books/${id}`,
    form: {
      name,
    },
  }, (error, Response) => {
    if (error) {
      console.log('更新失敗', error);
      console.log(Response);
    }
    console.log('更新成功');
  });
}
// 測試呼叫update(21, 'newbook');

switch (enter) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks(params);
    break;
  case 'delete':
    deleteBooks(params);
    break;
  case 'create':
    createBooks(params);
    break;
  case 'update':
    update(params, args[4]);
    break;
  default:
    console.log('顯示結果 list,read,delete,create and update');
}
