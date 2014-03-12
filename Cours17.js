// Rappels sur les fonctions
/* Une fonction est une suite d'instructions ayant un rôle précis 
	
	on lui donne des arguments/paramètres en parenthèses (facultatifs) - on peut avoir une fonction qui ne prend aucun paramètre.

	Certaines fonctions nous renvoient une valeur. On peut par exemple enregistrer cette valeur renvoyée dans une variable

*/

// Voici une fonction qui ne prend aucun paramètre et ne retourne aucune valeur
function conversion(){/*toutes mes opérations de conversions*/};

var xyz = conversion();

function quelEstVotreNom(){
	var nom;
	nom = prompt('Entrez votre nom');
	alert('Votre nom est : ' + nom)
}

/*Exercice 1: Créer une fonction qui demande a l'utilisateur d'entrer une valeur en Dollars canadiens. 
	-Convertissez cette valeur en dollars Américains. 
	-Faire une sortie de console montrant la valeur Convertie
	-Alertez la valeur
	-La fonction doit retourner cette valeur.
	-Hors de cette fonction, enregistrer cette valeur RENVOYÉE dans une autre variable nommée retVal. Faites une sortie de console montrant la valeur de cette variable */

	//Les variables suivantes sont des variables qui sont globales. Elles ne sont pas déclarées à l'intérieur d'une procédure/fonction.  DONC, leur portée est globale.

	var ratioDeConversion = 0.9;

	function convertir(){

		var usd;
		var cad; //représenter la valeur saisie

		cad = prompt('Entrez un montant');
		//Assomption. 1 CAD = 0.90
		//usd = cad * 0.9; //MAUVAISE PRATIQUE: La valeur 0.9 est hardcodée

		usd = cad * ratioDeConversion;
		alert('La valeur convertie en $ americains: ' + usd);

		return usd;

	}

	//var valeurConvertie = convertir();
	//console.log('La valeur convertie est ' + valeurConvertie);

	//xyz = 5;

/*Exercice 2: Créer un tableau avec 20 entrées. 
	a.En utilisant une boucle (for ET while), remplissez chaque case du tableau avec une valeur numérique incrémentée a partir de 0
	
	b. Créer une instance d'un Objet qui aura les propriétés suivantes. Nommez cet objet cours17:
		
		- Le tableau (rempli) a la question précédente
		- Un nombre aléatoirement générée (random - consulter la documentation)


	*/

	var monTableau = new Array(20);

	for (var index = 0; index <= monTableau.length - 1; index++)
	{	
		monTableau[index] = index;
	}

	var cours17 = new Object();
	cours17.tableauDuCours17 = monTableau;
	cours17.randomNumber = Math.random();

	console.log('Contenu de cours17' + JSON.stringify(cours17));
