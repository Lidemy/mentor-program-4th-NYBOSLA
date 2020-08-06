// ajax連線
const request = new XMLHttpRequest();
request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    // console.log(request);
    const containerPrize = document.querySelector('.answer__container');
    const response = request.responseText;
    const json = JSON.parse(response);
    console.log(json.prize);
    // const users = json.data;
    // console.log(users)
    const result = json.prize;
    // console.log(result)
    if (result === 'FIRST') {
      const div = document.createElement('div');
      const answerContainer = document.querySelector('.answer__container');
      // console.log(answerContainer);

      div.classList.add('title__container');
      div.innerHTML = `<h3 class="price__title">抽獎結果!! 您抽中頭獎了${json.prize}！日本東京來回雙人遊</h3><div class="price__item"><button class="price__btn"><a href="answer.html">我要抽獎</a></button></div>`;
      containerPrize.appendChild(div);
      // 改變圖片dom
      answerContainer.style.backgroundImage = "url('./image/first.jpg')";
    } else if (result === 'SECOND') {
      const div = document.createElement('div');
      const answerContainer = document.querySelector('.answer__container');
      // console.log(answerContainer);

      div.classList.add('title__container');
      div.innerHTML = `<h3 class="price__title">抽獎結果!! 您抽${json.prize}二獎了！二獎！90 吋電視一台！</h3><div class="price__item"><button class="price__btn"><a href="answer.html">我要抽獎</a></button></div>`;
      containerPrize.appendChild(div);
      // 改變圖片dom
      answerContainer.style.backgroundImage = "url('./image/second.jpg')";
      answerContainer.style.color = 'white';
    } else if (result === 'THIRD') {
      const div = document.createElement('div');
      const answerContainer = document.querySelector('.answer__container');
      // console.log(answerContainer);

      div.classList.add('title__container');
      div.innerHTML = `<h3 class="price__title">抽獎結果!! 您抽中${json.prize}三獎！知名 YouTuber 簽名握手會入場券一張，bang！</h3><div class="price__item"><button class="price__btn"><a href="answer.html">我要抽獎</a></button></div>`;
      containerPrize.appendChild(div);
      // 改變圖片dom
      answerContainer.style.backgroundImage = "url('./image/third.jpg')";
      answerContainer.style.color = 'white';
    } else {
      const div = document.createElement('div');
      const answerContainer = document.querySelector('.answer__container');
      // console.log(answerContainer);

      div.classList.add('title__container');
      div.innerHTML = `<h3 class="price__title">抽獎結果!! 您抽中${json.prize}銘謝惠顧！</h3><div class="price__item"><button class="price__btn"><a href="answer.html">我要抽獎</a></button></div>`;
      containerPrize.appendChild(div);
      // 改變圖片dom
      answerContainer.style.backgroundColor = 'black';
      answerContainer.style.color = 'white';
    }
  } else {
    console.log('err');
  }
});

/* request.addEventListener('load',function(){

}); */

request.onerror = function error() {
  console.log('error');
};

request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery');
request.send();


/* eslint-disable dot-notation */
const open = document.querySelectorAll('p.click');
// console.log(open);
for (let i = 0; i < open.length; i += 1) {
  open[i].addEventListener('click', () => {
    const show = document.querySelectorAll('.show');
    // console.log(show);
    show[i].style['display'] = 'block';
  });
}
