var age = 41;
var result = document.querySelectorAll("p.result");
var note = 5;
var vote = 1000;
var temperature =  39.5;

if(age > 40)
{
    result[0].innerHTML = "<span>Vous êtes vieux !</span>";
}

/***********************/

if(note >= 5)
{
    result[1].innerHTML = "<span>C'est bon j'ai la moyenne mais peut être pas plus !! !</span><br/>";
}
else{
    result[1].innerHTML = "<span>A revoir !!</span><br/>";
}
result[1].innerHTML += "<br />";

//ou 
result[1].innerHTML += (note >= 5)? "<span>C'est bon j'ai la moyenne mais peut être pas plus !! !</span><br/>" : "<span>A revoir !!</span><br/>";


/***********************/
if(vote <= 200)
{
    result[2].innerHTML = "<span>Aie !!  pas terrible comme score !!</span>";
}
else if(vote > 200 && vote <= 500 ){
    result[2].innerHTML = "<span>Peut être mieux l'année suivante !!</span>";
}
else{
    result[2].innerHTML = "<span>Je suis au top de ma cote !!</span>";
}

/***********************/
 switch(temperature)
 {
     case 37.5 : 
     result[3].innerHTML = "<span>Je me sens bien</span>"
     break;
      case 39.5 : 
     result[3].innerHTML = "<span>Je crois qu'on est plusieurs non ?</span>"
     break;
      case 40.5 : 
     result[3].innerHTML = "<span>pin pon pin pon !!! mais que font les pompiers.</span>"
     break;
     default: 
        result[3].innerHTML = "<span>Il est possible que ne sois plus de ce monde</span>";
 }

 temperature =  41;

 switch(true)
 {
     case temperature == 37.5 : 
        result[4].innerHTML = "<span>Je me sens bien</span>"
        break;
      case temperature == 39.5 : 
        result[4].innerHTML = "<span>Je crois qu'on est plusieurs non ?</span>"
        break;
      case temperature>= 40.5 : 
        result[4].innerHTML = "<span>pin pon pin pon !!! mais que font les pompiers.</span>"
        break;
     default: 
        result[4].innerHTML = "<span>Il est possible que ne sois plus de ce monde</span>";
 }