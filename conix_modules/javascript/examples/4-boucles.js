var result = document.querySelectorAll("p.result");
var jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
var personnes = [
                    {prenom : "Nicolas"},
                    {prenom : "Paul"},
                    {prenom : "Pierre"},
                    {prenom : "Simon"},
                    {prenom : "Antoine"}
                ]; //JSON object
var nbNotes = 0;

for(var i = 0; i < jours.length; i++)
{
    result[0].innerHTML += jours[i].concat("<br />");
}

/**************************/

var cpt = 0;
while(cpt < personnes.length)
{
    result[1].innerHTML += personnes[cpt].prenom.concat("<br />");
    cpt++; // ++cpt ou avec le --
}

/**************************/

do {
    result[2].innerHTML += Math.ceil(Math.random() * 10);
}while(nbNotes > 0);


/**********************************/
for (var key in personnes) {
    if (personnes.hasOwnProperty(key)) {
        var element = personnes[key].prenom.concat("<br />");
         result[3].innerHTML += element;
    }
}