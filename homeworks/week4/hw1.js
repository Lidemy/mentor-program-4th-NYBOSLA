const request = require('request');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';

request(`${baseUrl}/books?_limit=10`, (error, response, body) => {
// json
  let data = '';
  console.log('body:', body);
  // 把json轉成陣列
  data = JSON.parse(body);
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`);
  }
});
