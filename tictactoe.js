var c1r1 = document.getElementById('box1');
var c2r1 = document.getElementById('box2');
var c3r1 = document.getElementById('box3');

var c1r2 = document.getElementById('box4');
var c2r2 = document.getElementById('box5');
var c3r2 = document.getElementById('box6');

var c1r3 = document.getElementById('box7');
var c2r3 = document.getElementById('box8');
var c3r3 = document.getElementById('box9');

var reset = document.getElementById("Reset")
var placeHolder = "X";

var gameWon = false

reset.addEventListener('click', function() {
    gameWon = false
    c1r1.innerHTML = ''
    c2r1.innerHTML = ''
    c3r1.innerHTML = ''
    c1r2.innerHTML = ''
    c2r2.innerHTML = ''
    c3r2.innerHTML = ''
    c1r3.innerHTML = ''
    c2r3.innerHTML = ''
    c3r3.innerHTML = ''
}
);

c1r1.addEventListener('click',function(){
  // add another condition here that prevents
  // the box from changing if the game is over
  if (!gameWon) {
    if (c1r1.innerHTML == ''){
      if (placeHolder == "X"){
          c1r1.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
       } else {
          c1r1.innerHTML = "O"
          placeHolder = "X"
          getWinner()
       }

    } else {
          alert ("Box full")
    }
  }
}
);

c2r1.addEventListener('click',function(){

  if (!gameWon) {
    if (c2r1.innerHTML == ''){
      if (placeHolder == 'X'){
        c2r1.innerHTML = 'X';
        placeHolder = "O"
        getWinner()
      } else {
        c2r1.innerHTML = "O"
        placeHolder = "X"
        getWinner()
      }

      } else {
          alert ("Box full")
    }
  }
}
);

c3r1.addEventListener('click',function(){

    if (!gameWon) {
      if (c3r1.innerHTML == ''){
        if (placeHolder == 'X'){
          c3r1.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c3r1.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

c1r2.addEventListener('click',function(){

    if (!gameWon) {
      if (c1r2.innerHTML == ''){
        if (placeHolder == "X") {
          c1r2.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c1r2.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

c2r2.addEventListener('click',function(){

    if (!gameWon) {
      if (c2r2.innerHTML == ''){
        if (placeHolder == "X") {
          c2r2.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c2r2.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

c3r2.addEventListener('click',function(){

    if (!gameWon) {
      if (c3r2.innerHTML == ''){
        if (placeHolder == "X") {
          c3r2.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c3r2.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

c1r3.addEventListener('click',function(){

    if (!gameWon) {
      if (c1r3.innerHTML == ''){
        if (placeHolder == "X") {
          c1r3.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c1r3.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

c2r3.addEventListener('click',function(){

    if (!gameWon) {
      if (c2r3.innerHTML == ''){
        if (placeHolder == "X") {
          c2r3.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c2r3.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

c3r3.addEventListener('click',function(){

    if (!gameWon) {
      if (c3r3.innerHTML == ''){
        if (placeHolder == "X") {
          c3r3.innerHTML = 'X';
          placeHolder = "O"
          getWinner()
        } else {
          c3r3.innerHTML = "O"
          placeHolder = "X"
          getWinner()
        }

      } else {
        alert ("Box full")
    }
  }
}
);

function getWinner(){
    if ( c1r1.innerHTML == c2r1.innerHTML
          && c1r1.innerHTML == c3r1.innerHTML
          && c1r1.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
        }


    if ( c1r2.innerHTML == c2r2.innerHTML
        && c1r2.innerHTML == c3r2.innerHTML
        && c1r2.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }


  if ( c1r3.innerHTML == c2r3.innerHTML
        && c1r3.innerHTML == c3r3.innerHTML
        && c1r3.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }

  if ( c1r1.innerHTML == c1r2.innerHTML
        && c1r1.innerHTML == c1r3.innerHTML
        && c1r1.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }

  if ( c2r1.innerHTML == c2r2.innerHTML
        && c2r1.innerHTML == c2r3.innerHTML
        && c2r1.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }

  if ( c3r1.innerHTML == c3r2.innerHTML
        && c3r1.innerHTML == c3r3.innerHTML
        && c3r1.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }

  if ( c1r1.innerHTML == c2r2.innerHTML
        && c1r1.innerHTML == c3r3.innerHTML
        && c1r1.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }


  if ( c3r1.innerHTML == c2r2.innerHTML
        && c3r1.innerHTML == c1r1.innerHTML
        && c3r1.innerHTML !== ""){
            alert ("Winner")
            gameWon = true
    }
}
