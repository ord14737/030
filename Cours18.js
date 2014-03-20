//Programmation orientée-objet (POO)

/*

C'est quoi une classe d'objet? C'est une structure (type de donnée) qui regroupe:
	- des variables, appelées ATTRIBUTS, qui décrivent ou caractérisent l'objet. Ce sont les bases de notre structure. 
	- méthodes : fonctions qui permettront d'agir sur cet objet.

	Exemple: Soit une classe 'Ordinateur'

		Attributs:

		fréquence
		cpu
		disqueDur
		fanSpeed

		Méthodes:
		
		démarrer() - démarre l'ordinateur
		augmenterRAM(ram) - augmente la mémoire vive
		showStats() - renvoyer/imprimer les spécifications en détail de l'ordinateur.

		var monOrdinateur = new Ordinateur('100Hz', '33.3GHZ', '100 TB', '120%');
		
		var monOrdi = new Ordinateur();
		monOrdi.cpu = '33.3 GHZ';

		et ainsi de suite

		monOrdinateur.démarrer();

		monOrdianteur.showStats();
*/

//En utilisant la classe Array

var tableauVide = new Array();
var tableauVide2 = [];

var nouveauTableau = ['A', 'B', 'C', 'D'];
var longueurDuTableau = nouveauTableau.length;
console.log('Longueur du tableau: ' + longueurDuTableau);

//Puisque la longueur (fixe?) est 5, comment ajouter des éléments a ce tableau a ce tableau?
//On utilise la méthode push pour ajouter (dynamiquement) un élément au tableau

var nouvelObjet = { prop1 : 'rien', prop2 : 'tout', prop4 : 'tout', prop5 : 'tout', prop3 : 'tout'};



nouveauTableau.push('E');
nouveauTableau.push({ prop1 : 'rien', prop2 : 'tout'});
nouveauTableau.push(2);
nouveauTableau.push(null);

console.log('Avant suppression' + JSON.stringify(nouveauTableau));

//array.splice(index,howmany,item1,.....,itemX)
var indexDeD = nouveauTableau.indexOf('D');
nouveauTableau.splice(indexDeD,1);



console.log('D Supprimée' + JSON.stringify(nouveauTableau));

/*RÉCAPITULATION
	
	1. Classe : c'est un modèle, une définition d'une 'structure', qui elle va posséder des attributs et des méthodes. (ex: Ordinateur, Array, Object)

	2. Instance : exemplaire d'une classe (ex: MacBook PRO est une instance de la classe Ordinateur, la variable nouveauTableau est une instance de la classe Array..)

	3. Objet : selon le sens, il s'agit d'une classe ou d'un objet

	4. Attribut : une variable qui appartient, qui caractérise partiellement ou entièrement, un objet. (ex: L'attribut 'fréquence' de MacBook Pro)

	5. Méthodes : Ce sont les 'hooks', les fonctions qui permettent d'agir sur cet instance de la classe d'objet. (ex: La méthode indexOf ou push de la classe d'objets Array)
	
*/

// Comment ca se passe dans l'ordi quand je crée le tableau de cette manière?
var lazare = new Array();
delete nouvelObjet; //INTERDIT
delete nouvelObjet.prop2; //SUPPRESSION d'une propriété d'objet
/*
	1. L'ordinateur crée le tableau en mémoire. Parce qu'on lui en a donnée l'ordre avec le mot-clé new

	2. L'ordinateur va créer une variable dans sa mémoire (on lui a demandé avec var)

	3. L'ordinateur, au lieu de 'mettre' le tableau dans la variable lazare, on va dire à la variable OÙ (addresse 20348572340578dkh234897249) se situe notre tableau dans la mémoire de l'ordinateur.

	Javascript possède un 'Garbage Collector' (ramasse-miettes)
	Ce mécanisme est responsable pour la destruction automatique de ce qui se retrouve 'perdu', ou plutôt lorsqu'il n'y a plus de lien vers un objet, ce dernier sera détruit.

	Une façon explicite de supprimer non un objet (interdit), mais une PROPRIÉTÉ de cet objet, c'est en utilisant le mot-clé delete 

*/

var x = document.getElementById('buddy');
console.log('Body '+x.innerHTML);



