"use strict";
var result = document.querySelectorAll("p.result");


var produits = [
    "{\"id\":1, \"reference\":\"AB100\", \"description\" : \"clavier\", \"prix\" : 100.50}",
    "{\"id\":2, \"reference\":\"AB200\", \"description\" : \"Souris\", \"prix\" : 89}",
    "{\"id\":3, \"reference\":\"AB300\", \"description\" : \"Ecran\", \"prix\" : 346.99}",
    "{\"id\":4, \"reference\":\"AB400\", \"description\" : \"Gamepad\", \"prix\" : 69}",
    "{\"id\":5, \"reference\":\"AB500\", \"description\" : \"Joystick\", \"prix\" : 30}",
    "{\"id\":6, \"reference\":\"AB600\", \"description\" : \"tablette\", \"prix\" : 399.99}",
    "{\"id\":7, \"reference\":\"AB700\", \"description\" : \"Imprimante\", \"prix\" : 89.99}", 
];

var Produit = (function(){
    var class_name = "CLASS_Produit";
    var i = 0;

    function Produit(id , reference, description, prixHT)
    {
        i = id;
        this.id = id;
        this.prixHT = prixHT;
        this.description = description;
        this.reference = reference;
    }

    function calcul_TTC(prix)
    {
        return new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(prix);
    }


    Produit.prototype.getCLASS_NAME = function()
    {
        return class_name;
    }

    Produit.prototype.toString = function()
    {
        
        var obj = {
                "id" : this.id,
                "prixTTC" : calcul_TTC(this.prixHT),
                "description" : this.description,
                "reference" : this.reference
        };

        return JSON.stringify(obj);
    }

    Produit.prototype.parse_Produit = function(string_produit)
    {
        var obj = JSON.parse(string_produit);
        this.id = obj.id;
        this.prixHT = obj.prix;
        this.reference = obj.reference;
        this.description = obj.description;

        return this;
    }
    
    return Produit;

})();


var p1 = new Produit(1,"AB100", "clavier", 100.50);
var p2 = new Produit(2,"AB200", "Souris", 89);
var p3 = new Produit(3,"AB300", "Ecran", 346.99);

result[0].innerHTML += "<span>"+p1.getCLASS_NAME()+"</span><br/>";
result[0].innerHTML += "<span>P1 instance de Produit => "+ (p1 instanceof Produit)+"</span><br/>";
result[0].innerHTML += "<span>"+p1.toString()+"</span><br/>";
result[0].innerHTML += "<span>"+p1.parse_Produit(produits[3])+"</span><br/>";

result[1].innerHTML += "<span>"+p2.getCLASS_NAME()+"</span><br/>";
result[1].innerHTML += "<span>P2 instance de Produit => "+ (p2 instanceof Produit)+"</span><br/>";
result[1].innerHTML += "<span>"+p2.toString()+"</span><br/>";
result[1].innerHTML += "<span>"+p2.parse_Produit(produits[4])+"</span><br/>";

result[2].innerHTML += "<span>"+p3.getCLASS_NAME()+"</span><br/>";
result[2].innerHTML += "<span>P3 instance de Produit => "+ (p3 instanceof Produit)+"</span><br/>";
result[2].innerHTML += "<span>"+p3.toString()+"</span><br/>";
result[2].innerHTML += "<span>"+p3.parse_Produit(produits[5])+"</span><br/>";