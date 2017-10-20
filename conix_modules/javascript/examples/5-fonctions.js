var result = document.querySelectorAll("p.result");
var produits = [
    {id:1, ref:"AB100", description : "clavier", prix : 100.50},
    {id:2, ref:"AB200", description : "Souris", prix : 89},
    {id:3, ref:"AB300", description : "Ecran", prix : 346.99},
    {id:4, ref:"AB400", description : "Gamepad", prix : 69},
    {id:5, ref:"AB500", description : "Joystick", prix : 30},
    {id:6, ref:"AB600", description : "tablette", prix : 399.99},
    {id:7, ref:"AB700", description : "Imprimante", prix : 89.99}, 
];

//Tous les produits
function calcul_Prix_TTC_Produits()
{
    var sortie = "";
    var prixTTC = 0;
    var formatPrix = 0;

    for(var i = 0 ; i < produits.length ; i++)
    {
        prixTTC = produits[i].prix * 1.2;
        formatPrix = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(prixTTC);
        sortie = sortie.concat(produits[i].ref,  " - ", produits[i].description , " - ", formatPrix, "<br />")
        result[0].innerHTML = sortie;
    }
}

//appel
calcul_Prix_TTC_Produits();


/******************************/

sortie = "";
function calcul_Prix_TTC_Produit(prixHT, taux = 0.2)
{
    var prixTTC = prixHT * (1 + taux);
    return new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(prixTTC);
}

for(var i = 0 ; i < produits.length ; i++)
{
    var formatPrix = calcul_Prix_TTC_Produit(produits[i].prix)
    var sortie = sortie.concat(produits[i].ref,  " - ", produits[i].description , " - ", formatPrix, "<br />")
    result[1].innerHTML = sortie;
}

/******************************/
function un_Produit(id)
{
    var produit = produit_Exist(id);
    var sortie = "";
    //debugger
    if(null != produit)
    {
        var formatPrix = calcul_Prix_TTC_Produit(produit.prix)
        var sortie = sortie.concat(produit.ref,  " - ", produit.description , " - ", formatPrix, "<br />")
        result[2].innerHTML += sortie;
    }
    else{
        result[2].innerHTML += "<span>Produit inexistant ! => id : "+id+"</span> <br/>";
    }
}

function produit_Exist(id)
{
    for(var i = 0 ; i < produits.length ; i++)
    {
        if (produits[i].id === id)
        {
            return produits[i];
            //break;continue
        }        
    }

    return null;
}


un_Produit(2);
un_Produit(0);
un_Produit(4);