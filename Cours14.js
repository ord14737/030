//Le code de scriptage Javascript est incorporé dans la page par l'entremise de la balise script

//Noter que les commentaires en Javascript sont délimités par un double bar oblique // ou /* vos commentaires */

//Javascript est un langage qui est sensible à la case (aux majuscules/minuscules)
//Donc, en Javascript deux variables ayant les noms var1 et VAR1 NE REPRÉSENTENT PAS la même variable

//Mots clés en Javascript
//en javascript, la bonne pratique indique de toujours finir chaque déclaration avec un point-virgule. Par contre, Javascript est BEAUCOUP plus flexible et pardonnant quant aux point-virgules. Si vous oubliez un ; le navigateur assume que la déclaration se finit au prochain saut de ligne
//La syntaxe de Javascript ressemble beaucoup aux autres langages inspirés de la syntaxe fondamentale du langage C (Java est un de ces langages). Il y a donc beaucoup de similarités syntaxiques entre les deux. 


/***************************************************

Exercice: Pour chaque type primitif de Javascript:
	1. Créer une variable représentant ce type 
	2. Affecter une valeur à cette variable
	3. Imprimer, en utilisant le mot-clé typeof, le type de cette variable.

***************************************************/


//Le mot-clé var déclare une variable.
var maVariableNumerique;
var maVariableString;
var maVariableObjet;
var maVariableArray;
var maVariableUndefined;
var maVariableNull;
var maVariableBoolean;

//Affectation d'une valeur à ma variable.
maVariableNumerique = 5;
maVariableString = 'Voici un String';

//Index des tableaux est a base zero
maVariableArray = new Array();
maVariableArray[0] = 'Honda';
maVariableArray[1] = 'Subaru';

//Pour trouver l'index (0..n) de 'Deuxieme Valeur'
//n : Puisque les index fonctionnent a base zero, la longueur du tableau peut etre calculee en retranchant 1 de l'index maximum du tableau. Autrement dit, votreTableau.length - 1 : ca represente votre dernier index
var indexDeHonda = maVariableArray.indexOf('Honda');
var indexDeSubaru = maVariableArray.indexOf('Subaru');

//Je peux maintenant utiliser ces index pour faire reference directe aux valeurs dans le tableau

var copieDeHonda = maVariableArray[indexDeHonda];
var copieDeSubaru = maVariableArray[indexDeSubaru];

console.log('Index de Honda dans mon tableau ' + indexDeHonda);
console.log('Index de Subaru dans mon tableau ' + indexDeSubaru);


console.log('La longueur de ce tableau est : ' + maVariableArray.length + maVariableArray[2]);



maVariableObjet = new Object();
maVariableObjet.coteDeCours = 'ORD 14737';


maVariableNull = null;
maVariableBoolean = true;


//Quels sont les TYPES de valeur en Javascript?
//L'équivalent de System.out.println('xyz');
console.log('Voici une sortie de console à partir de mon doc JS. Utiliser cette fonction pour afficher des valeurs (debugging)');
console.log('Le type primitif de maVariableNumérique est : ' + typeof maVariableNumerique);
console.log('Le type primitif de maVariableString est : ' + typeof maVariableString);
console.log('Le type primitif de maVariableArray est : ' + typeof maVariableArray);
console.log('Le type primitif de maVariableObjet est : ' + typeof maVariableObjet);
console.log('Le type primitif de maVariableNull est : ' + typeof maVariableNull);
console.log('Le type primitif de maVariableUndefined est : ' + typeof maVariableUndefined);

//Undefined:

alert('Hello world!');

