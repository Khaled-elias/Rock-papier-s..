
const comp_result = document.getElementById('result-comp')
const user_result = document.getElementById('result-user')
const ergebnis = document.getElementById('ergebnis')
const wieder = document.getElementById('wieder')
const rounds = document.getElementById("rounds")

let x5 = document.getElementById("5")
let x10 = document.getElementById("10")
let x15 = document.getElementById("15")
let x20 = document.getElementById("20")



var rules = {
  rock:  { scissors: "beats" },
  paper : { rock:      "beats" },
  scissors: { paper:  "beats"},
  
  
};

var gestures = ["rock", "paper", "scissors",];

var i = 1;
var j = 1;
var z = 1;
 


function play(index) {
  if(x5.checked){
    
    if(i < 5){
      rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 5</h1> `
      
      
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++
        
        

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
        
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
      ergebnis.innerHTML =    a + " " + rules[a][b] + " " + b + " You " + result + ".";

      
    
      if (user === comp){ ergebnis.innerHTML = ("It was a Draw! you both chose " + user + "." );
   
    }

    }


    else if (i === 5){
      
      rounds.innerHTML = `<h1  style="font-size: 2.5;">5 / 5</h1>`
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
       if(z>j){
        ergebnis.innerHTML = `<h1 style="color: green;" >you win</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
      }
      else if(j > z){
        ergebnis.innerHTML = `<h1 style="color: red;" >you lose</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
   
      }
      else{
        ergebnis.innerHTML = `<h1 style="color: gray;" >Draw!</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
      }
      
    }
  }


// _____________10



  else if(x10.checked){
     
    if(i < 10){
      rounds.innerHTML = `<h1 style="font-size:40px;"> ${i++} / 10</h1> `
      
      
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
      ergebnis.innerHTML =    a + " " + rules[a][b] + " " + b + " You " + result + ".";
      
    
      if (user === comp) ergebnis.innerHTML = ("It was a Draw! you both chose " + user + "." );

    }


    else if (i === 10){
      
      rounds.innerHTML = `<h1  style="font-size: 2.5;">10 / 10</h1>`
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
       if(z>j){
        ergebnis.innerHTML = `<h1 style="color: green;" >you win</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
      }
      else if(j > z){
        ergebnis.innerHTML = `<h1 style="color: red;" >you lose</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
   
      }
      else{
        ergebnis.innerHTML = `<h1 style="color: gray;" > Draw!</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
      }
      
    }
  }
  
// __________15



  else if(x15.checked){
    
    if(i < 15){
      rounds.innerHTML = `<h1 style="font-size:40px;"> ${i++} / 15</h1> `
      
      
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
      ergebnis.innerHTML =    a + " " + rules[a][b] + " " + b + " You " + result + ".";
      
    
      if (user === comp) ergebnis.innerHTML = ("It was a Draw! you both chose " + user + "." );

    }


    else if (i === 15){
      
      rounds.innerHTML = `<h1  style="font-size: 2.5;">15 / 15</h1>`
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
       if(z>j){
        ergebnis.innerHTML = `<h1 style="color: green;" >you win</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
      }
      else if(j > z){
        ergebnis.innerHTML = `<h1 style="color: red;" >you lose</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
   
      }
      else{
        ergebnis.innerHTML =`<h1 style="color: gray;" > Draw!</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "}
      
    }
  }

// ________________20




  else if(x20.checked){
     
    if(i < 20){
      rounds.innerHTML =`<h1 style="font-size:40px;"> ${i++} / 20</h1> `
      
      
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
      ergebnis.innerHTML =    a + " " + rules[a][b] + " " + b + " You " + result + ".";
      
    
      if (user === comp) ergebnis.innerHTML = ("It was a Draw! you both chose " + user + "." );

    }


    else if (i === 20){
      
      rounds.innerHTML = `<h1  style="font-size: 2.5;">20 / 20</h1>`
      var user = gestures[index];
      var comp = gestures[Math.floor(3 * Math.random())];
      if ( win = rules[user].hasOwnProperty(comp)){
        
        user_result.innerHTML = z++

        
        
      }
      else if (lose = rules[comp].hasOwnProperty(user)){
        comp_result.innerHTML = j++
      }
      var result = win ? "Win" : "Lose";
      var a = win ? user : comp;
      var b = win ? comp : user;
       if(z>j){
        ergebnis.innerHTML = `<h1 style="color: green;" >you win</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
      }
      else if(j > z){
        ergebnis.innerHTML =`<h1 style="color: red;" >you lose</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "
   
      }
      else{
        ergebnis.innerHTML = `<h1 style="color: gray;" > Draw!</h1>`
        wieder.innerHTML = " klick Restart wieder zu spielen "}
      
      }
    }
}

