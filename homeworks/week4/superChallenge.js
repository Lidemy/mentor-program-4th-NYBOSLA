// 連線的部分
const https = require('https');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';
// 設定args
const args = process.argv;
const enter = args[2];
const params = args[3];

// 列出20本書籍

function listBooks() {
  https.get(`${baseUrl}/books?limit=20`, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n'
                        + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n'
                        + `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // Consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        // console.log(parsedData);
        for (let i = 0; i < parsedData.length; i += 1) {
          console.log(`印出前20本書籍 ${parsedData[i].id} ${parsedData[i].name}`);
        }
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

// 指定id獲取書名
function readBooks(id) {
  https.get(`${baseUrl}/books/${id}`, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n'
                        + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n'
                        + `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // Consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}


switch (enter) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks(params);
    break;
    /*  case 'delete':
    deleteBooks(params);
    break;
  case 'create':
    createBooks(params);
    break;
  case 'update':
    update(params, args[4]);
    break; */
  default:
    console.log('顯示結果 list,read,delete,create and update');
}
