const request = require('request');

const ClientID = 'ehhjoz8rqvphbxsnmhzf31fmwz8eyk';
const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': ClientID,
    Accept: 'application/vnd.twitchtv.v5+json',

  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    // console.log(body)
    const info = JSON.parse(body);
    // console.log(info)
    const topGames = info.top;
    // console.log(topGames+'最受歡迎遊戲');

    for (let i = 0; i < topGames.length; i += 1) {
      console.log(`觀看人數${topGames[i].viewers}頻道名稱${topGames[i].game.name}`);
    }
  } else {
    console.log(`${error}錯誤回報`);
  }
}

request(options, callback);
