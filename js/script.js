// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


function randomArr() {
  var arr = [];
  var t;
  for (var i = 0; i < 5; i++) {
    t = Math.floor(Math.random() * 100) + 1;
    arr.push(t);
  }
  console.log(arr);
  return arr;
}








function alarm() {
  alert(memoNum);
  timer = setInterval(startPoint, 1000);
}









function startPoint() {
  var result;
  document.getElementById('title').innerHTML = seconds--;
  if (seconds < 0) {
    clearInterval(timer);
    document.getElementById('title').innerHTML = 'VIA!!!';
    result = input();
  }
  return result;
}









function input() {
  var userNumber;
  var userNumbers = [];
  for (var i = 0; i < 5; i++) {
    userNumber = parseInt(prompt('inserisci un numero'));
    userNumbers.push(userNumber);
  }
  return userNumbers;
}









function comparison(arr1, arr2) {
  var arr2Num;
  var test;
  for (var i = 0; i < 5; i++) {
    arr2Num = arr2[i];
    for (var i = 0; i < 5; i++) {
      test = arr1.includes(arr2Num);
      if (!test) {
        return false;
      }
    }
  }
  return true;
}









function result(arr1, arr2) {
  var comp = comparison(userNum, memoNum);
  if (comp) {
    document.getElementById('title').innerHTML = 'risultato: <br> Hai vinto!!!';
  } else {
    document.getElementById('title').innerHTML = 'risultato: <br> Sbagliato!!!';
  }
}









// zona variabili
var seconds = 30;
var memoNum = randomArr();



// chiamata delle funzioni
alarm();

var userNum = startPoint();


result(userNum, memoNum);
