// var arr = [];
// function display(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i == 1 || i == 2) {
//       arr.push(1);
//     }
//     if (i > 2) {
//       arr.push(arr[i - 3] + arr[i - 2]);
//     }
//   }
// }
// display(100);
// console.log(arr);

var arr = [];
function display(n) {
  for (let i = 1; i <= n; i++) {
    if (i == 1 || i == 2) {
      console.log(1);
      arr.push(1);
    }
    if (i > 2) {
      console.log(arr[i - 3] + arr[i - 2]);
      arr.push(arr[i - 3] + arr[i - 2]);
    }
  }
}
display(100);
