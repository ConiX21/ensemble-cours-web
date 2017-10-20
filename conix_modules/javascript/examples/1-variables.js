var age = 35;
var nom = "gasquet";
var prenom = "nicolas";
var dateNaissance = new Date(1981,05,21);
var informations = new String();
var espace = " ";
var pResult = document.querySelector("p.result");


nom = nom.toUpperCase();
prenom = prenom.charAt(0).toUpperCase() + prenom.substr(1);
informations = informations.concat(nom, espace, prenom, espace, age, espace, dateNaissance.toLocaleDateString("fr-FR"))


//Comment
//Manipulate the DOM
/*
    D : document
    O : Object
    M : Model
*/
pResult.innerText = informations;


console.info(informations);