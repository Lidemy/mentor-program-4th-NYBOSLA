const request = require('request');

const baseUrl = 'https://restcountries.eu';
const args = process.argv;
const name = args[2];

request(`${baseUrl}/rest/v2/name/${name}`, (error, Response, body) => {
  if (error) {
    console.log('抓取失敗', error);
  }

  const data = JSON.parse(body);
  if (data.status === 404) {
    console.log('找不到國家資訊');
  }
  // console.log(data)
  for (let i = 0; i < data.length; i += 1) {
    console.log('國家'`${data[i].name}`);
    console.log('首都'`${data[i].capital}`);
    console.log('貨幣'`${data[i].currencies[0].code}`);
    console.log('國碼'`${data[i].callingCodes[0]}`);
  }
});
