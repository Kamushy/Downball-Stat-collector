function queenout() {
    var btnqueen = document.getElementById('queen');
    var btnjack = document.getElementById('jack');
    var btndunce = document.getElementById('dunce');

    var toqueen = btnjack.textContent
    var tojack = btndunce.textContent

    btnqueen.textContent = toqueen ;
    btnjack.textContent = tojack;  
    btndunce.textContent = ""; 

    var e = document.getElementById("cars");
    var strUser = e.options[e.selectedIndex].text;
    btndunce.textContent = strUser;
   
}
     
function jackout() {
    var btnjack = document.getElementById('jack');
    var btndunce = document.getElementById('dunce');

    var tojack = btndunce.textContent

    btnjack.textContent = tojack;  
    btndunce.textContent = ""; 

    var e = document.getElementById("chooseplayers");
    var strUser = e.options[e.selectedIndex].text;
    btndunce.textContent = strUser;

}

function dunceout() {
    var btnjack = document.getElementById('jack');
    var btndunce = document.getElementById('dunce');

    var tojack = btndunce.textContent
    btnjack.textContent = tojack;  
    btndunce.textContent = ""; 

    var e = document.getElementById("chooseplayers");
    var strUser = e.options[e.selectedIndex].text;
    btndunce.textContent = strUser;

}

function kingout() {
    var btnking = document.getElementById('king');
    var btnqueen = document.getElementById('queen');
    var btnjack = document.getElementById('jack');
    var btndunce = document.getElementById('dunce');

    var toking = btnqueen.textContent
    var toqueen = btnjack.textContent
    var tojack = btndunce.textContent
    var todunce = btnking.textContent
    
    btnking.textContent = toking ;
    btnqueen.textContent = toqueen ;
    btnjack.textContent = tojack ;
    if (btndunce.length === 0) {
        btndunce.textContent = todunce ;
    } else {
        btndunce.textContent = ""; 
        var e = document.getElementById("chooseplayers");
        var strUser = e.options[e.selectedIndex].text;
        btndunce.textContent = strUser;
    }
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
