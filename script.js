function queenout() {
    var btnqueen = document.getElementById('queen');
    var btnjack = document.getElementById('jack');
    var btndunce = document.getElementById('dunce');

    var toqueen = btnjack.textContent
    var tojack = btndunce.textContent

    btnqueen.textContent = toqueen ;
    btnjack.textContent = tojack;  
    btndunce.textContent = ""; 

    var e = document.getElementById("chooseplayers");
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
    var btndunce = document.getElementById('dunce');

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
      var e = document.getElementById("chooseplayers");
      var strUser = e.options[e.selectedIndex].text;
      btndunce.textContent = strUser;
       
    } else { 
      btndunce.textContent = todunce ;
    }
}


function doeverything(){
  var btnking = document.getElementById('king');
  var btnqueen = document.getElementById('queen');
  var btnjack = document.getElementById('jack');
  var btndunce = document.getElementById('dunce');

  var kingusable = btnking.textContent
  var queenusable = btnqueen.textContent
  var jackusable = btnjack.textContent
  var dunceusable = btndunce.textContent

  var firstplayer = document.getElementById("firstplayer");
  var firstplayerusable = firstplayer.options[firstplayer.selectedIndex].text;

  var secondplayer = document.getElementById("secondplayer");
  var secondplayerusable = secondplayer.options[secondplayer.selectedIndex].text;
  
  var event = document.getElementById("events");
  var choosenevent = event.options[event.selectedIndex].text;

  // if the event is aces
  if (choosenevent === "Aces"){
    // if king selected is king
    if (kingusable === firstplayerusable){
      // if dunce selected is dunce
      if (dunceusable === secondplayerusable) {
        //adds ace count to king
        acesperperson[kingusable] = 1
        //this chunk puts first player in line in
        var e = document.getElementById("chooseplayers");
        var strUser = e.options[e.selectedIndex].text;
        btndunce.textContent = strUser;
      }
      // if dunce doens't go out then check if jack does
      else if(jackusable === secondplayerusable) {
        //adds ace count to king
        acesperperson[kingusable] += 1
        //this chunk puts first player in line in
        var e = document.getElementById("chooseplayers");
        var strUser = e.options[e.selectedIndex].text;
        btndunce.textContent = strUser;
      }
      // if both dont go out check if queen does
      else if(queenusable === secondplayerusable) {
        //adds ace count to king
        acesperperson[kingusable] = 1
        //this chunk puts first player in line in
        var e = document.getElementById("chooseplayers");
        var strUser = e.options[e.selectedIndex].text;
        btndunce.textContent = strUser;
      }
    }
  }

  if (choosenevent === "Gets out"){

    if (firstplayerusable === kingusable || firstplayerusable === queenusable || firstplayerusable === jackusable || firstplayerusable === dunceusable){
      if (secondplayerusable === kingusable){
        
        kingout.call();

        //gets the og value for first user
        var firstuserbefore = document.getElementById(firstplayerusable + "kills").innerHTML;
        //turns it to int
        firstuserbefore = parseInt(firstuserbefore);
        //adds 1 
        firstuserbefore += 1;
        //puts it back
        document.getElementById(firstplayerusable + "kills").innerHTML = firstuserbefore;
      }
      else if (secondplayerusable === queenusable){
        queenout.call();

        //gets the og value for first user
        var firstuserbefore = document.getElementById(firstplayerusable + "kills").innerHTML;
        //turns it to int
        firstuserbefore = parseInt(firstuserbefore);
        //adds 1 
        firstuserbefore += 1;
        //puts it back
        document.getElementById(firstplayerusable + "kills").innerHTML = firstuserbefore;

        // gets og deaths value
        var seconduserrbefore = document.getElementById(secondplayerusable + "deaths").innerHTML;
        //turns it to int
        seconduserrbefore = parseInt(seconduserrbefore);
        //adds 1 
        seconduserrbefore += 1;
        //puts it back
        document.getElementById(secondplayerusable + "deaths").innerHTML = seconduserrbefore;
      }
      else if (secondplayerusable === jackusable){
        jackout.call();

        //gets the og value for first user
        var firstuserbefore = document.getElementById(firstplayerusable + "kills").innerHTML;
        //turns it to int
        firstuserbefore = parseInt(firstuserbefore);
        //adds 1 
        firstuserbefore += 1;
        //puts it back
        document.getElementById(firstplayerusable + "kills").innerHTML = firstuserbefore;

        // gets og deaths value
        var seconduserrbefore = document.getElementById(secondplayerusable + "deaths").innerHTML;
        //turns it to int
        seconduserrbefore = parseInt(seconduserrbefore);
        //adds 1 
        seconduserrbefore += 1;
        //puts it back
        document.getElementById(secondplayerusable + "deaths").innerHTML = seconduserrbefore;
      }
      else if (secondplayerusable === dunceusable){
        dunceout.call();

        //gets the og value for first user
        var firstuserbefore = document.getElementById(firstplayerusable + "kills").innerHTML;
        //turns it to int
        firstuserbefore = parseInt(firstuserbefore);
        //adds 1 
        firstuserbefore += 1;
        //puts it back
        document.getElementById(firstplayerusable + "kills").innerHTML = firstuserbefore;

        // gets og deaths value
        var seconduserrbefore = document.getElementById(secondplayerusable + "deaths").innerHTML;
        //turns it to int
        seconduserrbefore = parseInt(seconduserrbefore);
        //adds 1 
        seconduserrbefore += 1;
        //puts it back
        document.getElementById(secondplayerusable + "deaths").innerHTML = seconduserrbefore;
      }
    }

  }
}

function placeking() {
  //get the king
  var btnking = document.getElementById('king');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btnking.textContent = strUser

}

function placequeen() {
  //get the queen
  var btnqueen = document.getElementById('queen');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btnqueen.textContent = strUser

}

function placejack() {
  //get the jack
  var btnjack = document.getElementById('jack');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btnjack.textContent = strUser

}

function placedunce() {
  //get the dunce
  var btndunce = document.getElementById('dunce');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btndunce.textContent = strUser
}


