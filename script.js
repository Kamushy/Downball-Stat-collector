function kingout() {
  //gets all players on court
  var btnking = document.getElementById('king');
  var btnqueen = document.getElementById('queen');
  var btnjack = document.getElementById('jack');
  var btndunce = document.getElementById('dunce');

  //gets the next places for the players
  var toking = btnqueen.textContent
  var toqueen = btnjack.textContent
  var tojack = btndunce.textContent
  var todunce = btnking.textContent
  
  //puts the players in the right place
  btnking.textContent = toking ;
  btnqueen.textContent = toqueen ;
  btnjack.textContent = tojack ;
  btndunce.textContent = todunce ;

  //adds the people to first form
  document.getElementById("formselectking").innerHTML = toking;
  document.getElementById("formselectqueen").innerHTML = toqueen;
  document.getElementById("formselectjack").innerHTML = tojack;
  document.getElementById("formselectdunce").innerHTML = todunce;
  //adds the people to second form
  document.getElementById("formselectkingsecond").innerHTML = toking;
  document.getElementById("formselectqueensecond").innerHTML = toqueen;
  document.getElementById("formselectjacksecond").innerHTML = tojack;
  document.getElementById("formselectduncesecond").innerHTML = todunce;
}

function queenout() {
  //gets all the players below queen
  var btnqueen = document.getElementById('queen');
  var btnjack = document.getElementById('jack');
  var btndunce = document.getElementById('dunce');

  //gets the next places for the players
  var toqueen = btnjack.textContent
  var tojack = btndunce.textContent

  //put the prevous calculation in full swing
  btnqueen.textContent = toqueen ;
  btnjack.textContent = tojack;  

  //gets next player in line
  var nextplayer = document.getElementById("chooseplayers");
  var nextinline = nextplayer.options[nextplayer.selectedIndex].text;
  //puts next in line in dunce
  btndunce.textContent = nextinline;
  
  //fills out first form
  document.getElementById("formselectqueen").innerHTML = toqueen;
  document.getElementById("formselectjack").innerHTML = tojack;
  document.getElementById("formselectdunce").innerHTML = nextinline;
  //fills out second form
  document.getElementById("formselectqueensecond").innerHTML = toqueen;
  document.getElementById("formselectjacksecond").innerHTML = tojack;
  document.getElementById("formselectduncesecond").innerHTML = nextinline;
}
     
function jackout() {
  //gets jack and players below
  var btnjack = document.getElementById('jack');
  var btndunce = document.getElementById('dunce');

  //dunce goes to jack
  var tojack = btndunce.textContent
  btnjack.textContent = tojack;  

  //gets next player in line
  var nextplayer = document.getElementById("chooseplayers");
  var nextinline = nextplayer.options[nextplayer.selectedIndex].text;
  //puts next in line in dunce
  btndunce.textContent = nextinline;
  
  //adds the people to first form
  document.getElementById("formselectjack").innerHTML = tojack;
  document.getElementById("formselectdunce").innerHTML = nextinline;
  //adds the people to second form
  document.getElementById("formselectjacksecond").innerHTML = tojack;
  document.getElementById("formselectduncesecond").innerHTML = nextinline;
}

function dunceout() {
  //gets dunce position
  var btndunce = document.getElementById('dunce');

  //gets next player in line
  var nextplayer = document.getElementById("chooseplayers");
  var nextinline = nextplayer.options[nextplayer.selectedIndex].text;
  //puts next in line in dunce
  btndunce.textContent = nextinline;

  //puts person in first form
  document.getElementById("formselectdunce").innerHTML =  nextinline;
  //puts person in second form
  document.getElementById("formselectduncesecond").innerHTML =  nextinline;
}

function doeverything() {
  //saves a copy of the page ready for undo
  saveMemento.call()
  //gets the position of all the players
  var kingusable = document.getElementById('king').innerHTML;
  var queenusable = document.getElementById('queen').innerHTML;
  var jackusable = document.getElementById('jack').innerHTML;
  var dunceusable = document.getElementById('dunce').innerHTML;
  // get firstplayer selected in the form
  var firstplayer = document.getElementById("firstplayer");
  var firstplayerusable = firstplayer.options[firstplayer.selectedIndex].text;
  // get secondplayer selected in the form
  var secondplayer = document.getElementById("secondplayer");
  var secondplayerusable = secondplayer.options[secondplayer.selectedIndex].text;
  // gets chosen event
  var event = document.getElementById("events");
  var choosenevent = event.options[event.selectedIndex].text;
  //if middle form is gets out
  if (choosenevent === "Gets out"){

    //gets first player kills
    var firstplayerkills = document.getElementById(firstplayerusable + "kills").innerHTML;
    //turns it to int
    firstplayerkills = parseInt(firstplayerkills);
    //adds 1 
    firstplayerkills += 1;
    //puts it back
    document.getElementById(firstplayerusable + "kills").innerHTML = firstplayerkills;

    // gets second players deaths value
    var secondplayerdeaths = document.getElementById(secondplayerusable + "deaths").innerHTML;
    //turns it to int
    secondplayerdeaths = parseInt(secondplayerdeaths);
    //adds 1 
    secondplayerdeaths += 1;
    //puts it back
    document.getElementById(secondplayerusable + "deaths").innerHTML = secondplayerdeaths;

    //KD for first player
    // gets first player deaths but kills were retrieved earlier
    var firstplayerdeaths = document.getElementById(firstplayerusable + "deaths").innerHTML;
    //turns it to int
    firstplayerdeaths = parseInt(firstplayerdeaths);
    //if death is 0 then the kd should still be right
    if (firstplayerdeaths <= 0){
    kd = firstplayerkills/ 1
    } else {
    kd = firstplayerkills / firstplayerdeaths
    }
    //puts it back
    document.getElementById(firstplayerusable + "KD").innerHTML = kd.toFixed(2);

    // KD for second player
    //gets the kills for the second player
    var secondplayerkills = document.getElementById(secondplayerusable + "kills").innerHTML;
    //turns it to int
    secondplayerkills = parseInt(secondplayerkills);
    //if death is 0 then the kd should still be right
    if (secondplayerdeaths <= 0){
    kd = secondplayerkills/ 1
    } else {
    kd = secondplayerkills / secondplayerdeaths
    }
    //puts it back
    document.getElementById(secondplayerusable + "KD").innerHTML = kd.toFixed(2);       

    //Rounds per player
    //gets round per player 
    var dunceround = document.getElementById(dunceusable + "Rounds"+ " played").innerHTML;
    var jackround = document.getElementById(jackusable + "Rounds"+ " played").innerHTML;
    var queenround = document.getElementById(queenusable + "Rounds"+ " played").innerHTML;
    var kinground = document.getElementById(kingusable + "Rounds"+ " played").innerHTML;
    //turns it into number/int
    dunceround = parseInt(dunceround);
    jackround = parseInt(jackround);
    queenround = parseInt(queenround);
    kinground = parseInt(kinground);
    //adds one per round
    dunceround = dunceround + 1;
    jackround = jackround + 1;
    queenround = queenround + 1;
    kinground = kinground + 1;
    //shows it on graph
    document.getElementById(dunceusable + "Rounds"+ " played").innerHTML = dunceround;
    document.getElementById(jackusable + "Rounds"+ " played").innerHTML = jackround;
    document.getElementById(queenusable + "Rounds"+ " played").innerHTML = queenround;
    document.getElementById(kingusable + "Rounds"+ " played").innerHTML = kinground;

    //Kill per round rating
    //get kills
    var duncekills = document.getElementById(dunceusable + "kills").innerHTML;
    var jackkills = document.getElementById(jackusable + "kills").innerHTML;
    var queenkills = document.getElementById(queenusable + "kills").innerHTML;
    var kingkills = document.getElementById(kingusable + "kills").innerHTML;
    //turns kills in int
    duncekills = parseInt(duncekills);
    jackkills = parseInt(jackkills);
    queenkills = parseInt(queenkills);
    kingkills = parseInt(kingkills);

    //calcs for ratio 
    if (duncekills === 0){
      //if kills are zero then so is rating
      var dunceratio = 0
    } else {
      //get the ratio if its not ratio
      var dunceratio = duncekills / dunceround;
    }

    if (jackkills === 0){
      //if kills are zero then so is rating
      var jackratio = 0
    } else {
      //get the ratio if its not ratio
      var jackratio = jackkills / jackround ;
    }

    if (queenkills === 0){
      //if kills are zero then so is rating
      var queenratio = 0
    } else {
      //get the ratio if its not ratio
      var queenratio = queenkills / queenround ;
    }
    
    if (kingkills === 0){
      //if kills are zero then so is rating
      var kingratio = 0
    } else {
      //get the ratio if its not ratio
      var kingratio = kingkills / kinground;
    }

    //adds it to graph
    document.getElementById(dunceusable + "Kill"+ " per" +" round").innerHTML = dunceratio.toFixed(2);
    document.getElementById(jackusable + "Kill"+ " per" +" round").innerHTML = jackratio.toFixed(2);
    document.getElementById(queenusable + "Kill"+ " per" +" round").innerHTML = queenratio.toFixed(2);
    document.getElementById(kingusable + "Kill"+ " per" +" round").innerHTML = kingratio.toFixed(2);

    //Death per round rating
    //get deaths
    var duncedeaths = document.getElementById(dunceusable + "deaths").innerHTML;
    var jackdeaths = document.getElementById(jackusable + "deaths").innerHTML;
    var queendeaths = document.getElementById(queenusable +"deaths").innerHTML;
    var kingdeaths = document.getElementById(kingusable +"deaths").innerHTML;
    //turns deaths in int
    duncedeaths = parseInt(duncedeaths);
    jackdeaths = parseInt(jackdeaths);
    queendeaths = parseInt(queendeaths);
    kingdeaths = parseInt(kingdeaths);

    //gets ratiooooo
    if (duncedeaths === 0){
      var duncedeathratio = 0
    } else {
      var duncedeathratio = duncedeaths / dunceround;
    }

    if (jackdeaths === 0){
      var jackdeathratio = 0
    } else {
      var jackdeathratio = jackdeaths / jackround ;
    }

    if (queendeaths === 0){
      var queendeathratio = 0
    } else {
      var queendeathratio = queendeaths / queenround ;
    }

    if (kingdeaths === 0){
      var kingdeathratio = 0
    } else {
      var kingdeathratio = kingdeaths / kinground;
    }
    //adds it to graph
    document.getElementById(dunceusable + "Deaths per round").innerHTML = duncedeathratio.toFixed(2);
    document.getElementById(jackusable + "Deaths per round").innerHTML = jackdeathratio.toFixed(2);
    document.getElementById(queenusable + "Deaths per round").innerHTML = queendeathratio.toFixed(2);
    document.getElementById(kingusable + "Deaths per round").innerHTML = kingdeathratio.toFixed(2);
    
    //call the function to move the board
    if (secondplayerusable === kingusable){
      kingout.call();
    }
    else if (secondplayerusable === queenusable){
      queenout.call();
    }
    else if (secondplayerusable === jackusable){
      jackout.call();
    }      
    else if (secondplayerusable === dunceusable){
      dunceout.call();
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
  //puts king in form
  document.getElementById("formselectking").innerHTML = strUser;
  //puts king in form2
  document.getElementById("formselectkingsecond").innerHTML = strUser;
}

function placequeen() {
  //get the queen
  var btnqueen = document.getElementById('queen');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btnqueen.textContent = strUser
  //puts queen in form
  document.getElementById("formselectqueen").innerHTML = strUser;
  //puts queen in form2
  document.getElementById("formselectqueensecond").innerHTML = strUser;
}

function placejack() {
  //get the jack
  var btnjack = document.getElementById('jack');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btnjack.textContent = strUser
  //puts jack in form
  document.getElementById("formselectjack").innerHTML = strUser;
  //puts jack in form2
  document.getElementById("formselectjacksecond").innerHTML = strUser;
}

function placedunce() {
  //get the dunce
  var btndunce = document.getElementById('dunce');
  // get the seleted player
  var e = document.getElementById("chooseplayers");
  var strUser = e.options[e.selectedIndex].text;
  //set the selected player in the position
  btndunce.textContent = strUser
  //puts dunce in form
  document.getElementById("formselectdunce").innerHTML = strUser;
  //puts dunce in form2
  document.getElementById("formselectduncesecond").innerHTML = strUser;
}

function domistake(){
  //get the first player selected 
  var firstplayer = document.getElementById("firstplayer");
  var firstplayerusable = firstplayer.options[firstplayer.selectedIndex].text;
  //gets prevous mistakes
  var mistakes = document.getElementById(firstplayerusable + "mistakes").innerHTML;
  //turns it into int
  mistakes = parseInt(mistakes);
  //adds one 
  mistakes = mistakes + 1;
  //puts it back
  document.getElementById(firstplayerusable + "mistakes").innerHTML = mistakes;
}

function docomplaints(){
  //get the first player selected 
  var firstplayer = document.getElementById("firstplayer");
  var firstplayerusable = firstplayer.options[firstplayer.selectedIndex].text;
  //gets prevous mistakes
  var complaints = document.getElementById(firstplayerusable + "Complaints").innerHTML;
  //turns it into int
  complaints = parseInt(complaints);
  //adds one 
  complaints = complaints + 1;
  //puts it back
  document.getElementById(firstplayerusable + "Complaints").innerHTML = complaints;
}

var pagesaved =  0
function saveMemento() {
  // for every page add one
  pagesaved = pagesaved + 1
  // save it user side on browser client, if they close the tab it goes away
  sessionStorage.setItem(pagesaved, document.body.innerHTML)
}

function undo() {
  //get the pagesaved by numbe 
  let content = sessionStorage.getItem(pagesaved)
  if(content) {
    document.body.innerHTML = content
  }
  //after minus 1 so it resets
  pagesaved = pagesaved -1
}