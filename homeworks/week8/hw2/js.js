/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
// 連線的資料
// 開始連線抓取遊戲
const template = `
<div class="content_item">
<div class="content_info">
<img class="game" src="$preview" alt=""></div>
<div class="content_info">
<div class="info_item">
<img class="avatar" src="$logo" alt=""></div>
<div class="info_item">
<div class="title">$title</div>
<div class="accountname">$channel</div></div></div>
</div>

`;

function getGames(cd) {
  const url = 'https://api.twitch.tv/kraken';
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/games/top?limit=5`, true);
  request.setRequestHeader('accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', 'ehhjoz8rqvphbxsnmhzf31fmwz8eyk');
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cd(JSON.parse(this.response));
    }
  };
  request.send();
}

// 拿到某些遊戲的實況列表
function getStreams(name, cd) {
  // encodeURIComponent 跳脫編碼在網址列上放東西串接的時候會讓瀏覽器誤會，因此加上這個可以讓瀏覽器不要誤會game=&a=1(&a=1是遊戲名稱的部分)
  const request = new XMLHttpRequest();
  const url = 'https://api.twitch.tv/kraken';
  request.open('GET', `${url}/streams?game=${encodeURIComponent(name)}`, true);
  request.setRequestHeader('accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', 'ehhjoz8rqvphbxsnmhzf31fmwz8eyk');

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cd(JSON.parse(this.response));
    }
  };
  request.send();
}

getGames((games) => {
  const topGames = games.top.map(game => game.game.name);
  for (const game of topGames) {
    const element = document.createElement('li');
    element.innerHTML = game;
    document.getElementById('nav__list').appendChild(element);
  }


  getStreams(topGames[0], (data) => {
    // console.log(topGames[0])
    console.log(data);
    const streams = data.streams.map((stream) => {
      const element = document.createElement('div');
      const content = template
        .replace('$preview', stream.preview.large)
        .replace('$logo', stream.channel.logo)
        .replace('$title', stream.channel.status)
        .replace('$channel', stream.channel.name);
      document.querySelector('.content_wrap').appendChild(element);
      element.outerHTML = content;
    });
    addPlaceholder();
    addPlaceholder();
  });
});

function addPlaceholder() {
  const placeholder = document.createElement('div');
  placeholder.classList.add('stream-empty');
  document.querySelector('.content_wrap').appendChild(placeholder);
}

document.getElementById('nav__list').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    console.log(e.target);
    const text = e.target.innerHTML;
    console.log(e.target.innerHTML);
    document.querySelector('h2').innerHTML = text;
    document.querySelector('.content_wrap').innerHTML = '';

    getStreams(text, (data) => {
      const streams = data.streams.map((stream) => {
        const element = document.createElement('div');
        const content = template
          .replace('$preview', stream.preview.large)
          .replace('$logo', stream.channel.logo)
          .replace('$title', stream.channel.status)
          .replace('$channel', stream.channel.name);
        document.querySelector('.content_wrap').appendChild(element);
        element.outerHTML = content;
      });
      addPlaceholder();
      addPlaceholder();
    });
  }
});
