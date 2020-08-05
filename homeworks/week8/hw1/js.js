// ajax連線
const request = new XMLHttpRequest();
request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    // console.log(request);
    const container = document.querySelector('.container');
    const response = request.responseText;
    const json = JSON.parse(response);

    console.log(json.prize);
    // const users = json.data;
    // console.log(users)

    const div = document.createElement('div');
    div.classList.add('answer__container');
    div.innerHTML = `<h3 class="price__title">抽獎結果你${json.prize}！日本東京來回雙人遊</h3><div class="price__item"><button class="price__btn"><a href="answer.html">我要抽獎</a></button>
      </div>`;
    container.appendChild(div);
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
