const $hour = document.querySelector('#hrs');
const $min = document.querySelector('#min');
const $sec = document.querySelector('#sec');
const $btnStart = document.querySelector('.btn-start');
const $btnReset = document.querySelector('.btn-reset');

let time = 0;
let timeHour = 0;
let timeMin = 0;
let timeSec = 0;

// 시간 00으로 세팅해주기
$hour.textContent = timeHour.toString().padStart(2, '0');
$min.textContent = timeMin.toString().padStart(2, '0');
$sec.textContent = timeSec.toString().padStart(2, '0');

// btn 비활성화
// 왜 0 아니여도 죽어있냐구.....ㅜ
if (timeHour === 0 && timeMin === 0 && timeSec === 0) {
  $btnStart.disabled = true;
  $btnReset.disabled = true;
}

if (timeSec !== 0) {
  $btnStart.disabled = false;
  $btnReset.disabled = false;
}

// sec: 클릭하면 10단위로 증가시켜주기
$sec.addEventListener('click', () => {
  timeSec += 10;
  $sec.textContent = timeSec;

  if ($sec.textContent > 50) {
    timeSec = 0;
    $sec.textContent = timeSec.toString().padStart(2, '0');
  }
});

// hour, min 클릭하면 1씩 증가시켜주기
$min.addEventListener('click', () => {
  timeMin += 1;
  $min.textContent = timeMin.toString().padStart(2, '0');

  if ($min.textContent > 59) {
    timeMin = 0;
    $min.textContent = timeMin.toString().padStart(2, '0');
  }
});

$hour.addEventListener('click', () => {
  timeHour += 1;
  $hour.textContent = timeHour.toString().padStart(2, '0');
});
