// State 相当の値を準備 (今回の場合は配列)
// ----------------------------------------------------------------------------
var up;    // 空白ピース基準で 1 つ上のピースを記録
var down;  // 空白ピース基準で 1 つ下のピースを記録
var left;  // 空白ピース基準で 1 つ左のピースを記録
var right; // 空白ピース基準で 1 つ右のピースを記録

var peaces = [
  6,  4,  3, 10,
  7,  1,  2,  5,
  9, 13, 11,  8,
 15, 14, 16, 12,
];


// 空白ピースを基準に、上下左右のピースを調べる関数
// ----------------------------------------------------------------------------
function calcAdjacentPeaces() {
  const empty = peaces[15];

  let temp_up    = empty - 4;
  let temp_down  = empty + 4;
  let temp_left  = empty - 1;
  let temp_right = empty + 1;

  if (temp_up   < 1  ) temp_up    = null;
  if (temp_down > 16 ) temp_down  = null;
  if (empty % 4 === 1) temp_left  = null;
  if (empty % 4 === 0) temp_right = null;

  up    = temp_up;
  down  = temp_down;
  left  = temp_left;
  right = temp_right;
}


// Component 相当の関数を準備 (State => View にあたるもの)
// ----------------------------------------------------------------------------
function component() {
  for (let n = 0; n < 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + (n + 1));
  
    piece.style.order = peaces[n];
  }
}


// 初期化処理 (WIP: 全てのピースをランダムに配置する)
// ----------------------------------------------------------------------------
component();
calcAdjacentPeaces();


// ピースがクリックされたときに実行する処理 (関数)
// ----------------------------------------------------------------------------
function pieceClickHandler(event) {
  // event.target からピースの番号 N を特定する (文字になっているので数値に変換もする)
  const N = Number(event.target.innerHTML);

  if (peaces[N - 1] === up   ) console.log('上にいるので、移動して OK');
  if (peaces[N - 1] === down ) console.log('下にいるので、移動して OK');
  if (peaces[N - 1] === left ) console.log('左にいるので、移動して OK');
  if (peaces[N - 1] === right) console.log('右にいるので、移動して OK');
}


// 1 ～ 15 番ピースのクリックを監視し、クリックされたら pieceClickHandler を呼ぶ
// ----------------------------------------------------------------------------
for (let n = 1; n <= 15; n = n + 1) {
  const piece = document.querySelector('.pos-' + n);

  piece.addEventListener('click', pieceClickHandler);
}
