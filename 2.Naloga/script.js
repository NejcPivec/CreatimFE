// 1. Način
(function () {
  let index;
  const length = 20;
  for (index = 0; index < length; index++) {
    setTimeout(function () {
      console.log(index);
    }, 200 * index);
  }
})();

// 2. Način
/* let index = 0;
const length = 20;
function loop() {
  setTimeout(function () {
    console.log(index);
    index++;
    if (index < length) {
      loop();
    }
  }, 200);
}

loop(); */
