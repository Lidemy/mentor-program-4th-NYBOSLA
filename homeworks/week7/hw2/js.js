/* eslint-disable dot-notation */
const open = document.querySelectorAll('p.click');
console.log(open);
for (let i = 0; i < open.length; i += 1) {
  open[i].addEventListener('click', () => {
    const show = document.querySelectorAll('.show');
    console.log(show);
    show[i].style['display'] = 'block';
  });
}
