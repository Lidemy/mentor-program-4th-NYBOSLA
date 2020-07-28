/* eslint no-underscore-dangle: 0 */
const request = require('request');

const clientId = 'ehhjoz8rqvphbxsnmhzf31fmwz8eyk';
const args = process.argv;
const gameName = args[2];


const options = {
  url: `https://api.twitch.tv/kraken/search/channels?query=${gameName}&limit=100`,
  headers: {
    'Client-Id': clientId,
    Accept: 'application/vnd.twitchtv.v5+json',

  },
};
function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    // console.log(body)
    const info = JSON.parse(body);
    console.log(info);
    const { channels } = info;

    for (let i = 0; i < channels.length; i += 1) {
      console.log(`頻道名稱${channels[i].display_name}頻道id${channels[i]._id}`);
    }
  } else {
    console.log(`${error}錯誤回報`);
  }
}

request(options, callback);
