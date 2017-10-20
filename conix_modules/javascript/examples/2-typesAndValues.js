var results = document.querySelectorAll("p.result");
var age = 35;
var test = "";
var breakItem = "<br/>";
var space = " ";

results[0].innerHTML = "<span>Resultat age :</span><br />";
test = test.concat( "age == \"35\"",    space,  "("+ (age == "35") +")",  breakItem,
                    "age === \"35\"",   space,  "("+ (age === "35") +")", breakItem,
                    "age == 35",        space,  "("+ (age == 35) +")",      breakItem,
                    "age === 35",       space,  "("+ (age === 35) +")", breakItem,
                    "isNaN(\"35\")", space , "("+ (isNaN("35") +")"), breakItem,
                     "isNaN(\"Nicolas\")", space , "("+ (isNaN("Nicolas") +")"), breakItem,
                    "isNaN(35)", space , "("+ (isNaN(35)) +")", breakItem,
                    "typeof \"35\" != NaN", space , "("+ (typeof "35" != NaN) +")", breakItem,
                    "typeof NaN == NaN)", space , "("+ (typeof NaN == NaN) +")", breakItem,
                    "typeof NaN == \"number\")", space , "("+ (typeof NaN == "number") +")", breakItem,
                    "typeof 35", space , "("+ (typeof 35) +")", breakItem
                     );


results[0].innerHTML += test;

/********************************************* */
var prenom = "Nicolas";
var test = "";
var breakItem = "<br/>";
var space = " ";

results[1].innerHTML = "<span>Resultat prénom : \""+ prenom  +"\"</span><br /> ";
test = test.concat( "prenom[0] == \"N\"",    space,  "("+ (prenom[0] == "N") +")",  breakItem,
                    "prenom[1] == \"A\"",   space,  "("+ (prenom[1] == "A") +")", breakItem,
                    "prenom[0] == \"n\"",        space,  "("+ (prenom[0] =="n") +")",      breakItem,
                    "prenom[0] === \"N\"",        space,  "("+ (prenom[0] === "N") +")",      breakItem,
                    "prenom[0] === \"n\"",       space,  "("+ (prenom[0] === "n") +")");


results[1].innerHTML += test;


/********************************************* */
var test = "";

results[2].innerHTML = "<span>Resultat :</span> <br /> ";
test = test.concat( "null == undefined",    space,  "("+ (null == undefined) +")",  breakItem,
                    "null === undefined",   space,  "("+ (null === undefined) +")", breakItem,
                    "null === \"undefined\"",   space,  "("+ (null == "undefined") +")", breakItem,
                    "null == 0",        space,  "("+ (null == 0) +")",      breakItem,
                    "false == 0",        space,  "("+ (false == 0) +")",      breakItem,
                    "false === 0",        space,  "("+ (false === 0) +")",      breakItem,
                    "false === 0",        space,  "("+ (false === 0) +")");


results[2].innerHTML += test;


/*******************************/

var elements = new Array("Jean","Paul","Pierre","Simon", "Antoine"); //ou []
var test = "";

results[2].innerHTML = "<span>Resultat Array:</span> <br /> ";

test = test.concat(elements[0], breakItem,
                    elements[1], breakItem,
                    elements[2], breakItem,
                    elements[3], breakItem,
                    elements[4], breakItem);

results[2].innerHTML += test;


/***********************************/
var elements = [
                    {prenom : "Nicolas"},
                    {prenom : "Paul"},
                    {prenom : "Pierre"},
                    {prenom : "Simon"},
                    {prenom : "Antoine"}
                ]; //JSON object
var test = "";

results[3].innerHTML = "<span>Resultat Array:</span> <br /> ";

test += test.concat(   "is Object elements[0] => " + typeof elements[0],breakItem,
                        elements[0].prenom, breakItem,
                        elements[1].prenom, breakItem,
                        elements[2].prenom, breakItem,
                        elements[3].prenom, breakItem,
                        elements[4].prenom, breakItem);

results[3].innerHTML += test;

/***********************************/
var Personne = (function(){
    function Personne()
    {

    }

    Personne.prototype.bonjour = function(){
        
    }
})()
