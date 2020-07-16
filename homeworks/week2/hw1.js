
function printStars(n) {
  let star = '';
  let i = 0;
  const starString = '*';
  for (i = 0; i < n; i + 1) {
    star += starString;
  }
  console.log(star);
}

printStars(5);
