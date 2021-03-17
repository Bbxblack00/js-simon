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
  return arr;
}

function alarm() {
  alert(memoNum);
  timer = setInterval(startPoint, 1000);
}

function startPoint() {
  document.getElementById('title').innerHTML = seconds--;
  if (seconds < 0) {
    clearInterval(timer);
    document.getElementById('title').innerHTML = 'VIA!!!';
    input();
  }
}

function input() {
  var userNumber;
  var userNumbers = [];
  for (var i = 0; i < 5; i++) {
    userNumber = paerseInt(prompt('inserisci un numero'));
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


// zona variabili
var seconds = 0;
var memoNum = randomArr();
var comp = comparison(userNumbers, memoNum);


// ciamata delle funzioni
alarm();

result;
