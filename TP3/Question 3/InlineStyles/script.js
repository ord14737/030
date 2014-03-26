/*
    * Dans cette énoncé, L'élément 'xyz' = L'élément dont l'attribut id == xyz
    
    Question 3.
    Dans cet exercice, vous allez créer une animation qui fera un <div> traverser la page
    Le <div> en question est l'élément 'join' de la page 'mission.htm'

*/

/* 
    3a.     Initialiser les deux variables -globales- suivantes: 
            -   positionActuelle : affectez une valeur initiale de 0;
            -   minuteurIntervalle;
*/
    
function declencherAnimation() {

    /*
        3b. Dans cette fonction, vous allez affecter les valeurs de la position initiale puis ensuite
            déclencher son animation. Le minuteurIntervalle invoquera la fonction animerBoite à chaque 50 ms.

            Assigner les valeurs suivantes (propriétés de style) à l'élément 'join' :
            -   position : absolue
            -   left : 0 pixels
            -   top : 100 pixels

            Pour déclencher l'animation, invoquer la méthode setInterval (consulter la documentation)
            en lui passant en arguments:
                -   la fonction animerBoite (implémentée à la question 3b). N'oubliez pas de passer cette   
                    fonction en référence et non en l'invoquant!
                -   50 millisecondes

            La fonction setInterval renvoie une valeur. Affecter cette valeur à 
            la variable minuteurIntervalle.

    */

}

function animerBoite() {
    /*
        3c.  Implémenter l'animation ici, elle se fait en 4 étapes:
                i.      Incrémenter la valeur de positionActuelle par 5;
                ii.     Affecter la valeur de positionActuelle à la propriété 'left' de l'élément 'join'.
                        N'oubliez pas de concaténer cette avec "px" car la propriété CSS doit être en pixels.
                iii.    Lorsque la position actuelle atteint 900: 
                            -   arrêter le minuteurIntervalle. À vous de trouver la fonction à invoquer 
                                (voir la doc);
                            -   remetter à zéros les propriétés 'position', 'left', 'top', en leur affectant la 
                                valeur "" (chîne de caractères vide);

    */

}

window.onload =  function() {
	setTimeout(declencherAnimation,2);
};

