/* 
	
	Question 1: 

	* Dans cette énoncé, L'élément 'xyz' = L'élément dont l'attribut id == xyz
	
	a. 	Compléter la fonction prepareEventHandlers, qui sera appliquée au formulaire de la page contact.htm:

		-	Assigner une fonction à l'événement 'onsubmit' du formulaire 'frmContact' (atteindre le 
			formulaire et affecter la fonction programmatiquement)

			Dans cette fonction, appliquer la logique de validation selon les conditions suivantes:
				o 	Si le champ de saisie 'email' est vide:
						-	changer le texte de l'élément 'errorMessage' à 'Please provide an email address'

						-	changer l'arrière-plan de ce champ de saisie ('email') à une couleur de votre choix
						
						-	N'oubliez pas d'empêcher la soumission/envoi du formulaire si le champ de 
							saisie 	'email' est vide
		
				o 	Empêcher la soumission du formulaire si le champ de saisie 'e-mail' ne contient pas un 
					'@' (** un, et un seul! **). Dans un même temps, afficher le message 'Please enter a valid e-mail address' dans l'élément 'errorMessage' 	

				o 	Si le champ de saisie 'phone' a plus de 10 chiffres:
						-	afficher le texte 'Phone number must be 10 digits' dans l'élément 'errorMessage'

						-	affecter une bordure rouge pointilllée de 2 pixels au paragraphe* qui contient 
							ce 	champ de saisie ('phone'). 
							Indice: consulter la documentation pour voir comment saisir la balise parente
							d'un élément

						-	empêcher la soumission/envoi du formulaire si le champ de saisie 'phone' est vide

				o 	Si les conditions ci-haut ne sont pas satisfaites, permettre la soumission du
					formulaire en renvoyant la valeur appropriée

	b.	Pour l'événement onload de l'objet window, faites une invocation à la fonction
	 	prepareEventHandlers(). Cette fonction sera donc invoqué au chargement de la page.
	
*/

// Question 1a
function prepareEventHandlers() {
	/*
		Ici, assigner votre fonction de validation à l'événement de soumission du formulaire
		et implémenter la logique selon l'énoncé.
}

// Question 1b
// Au chargement de la page...
window.onload =  function() {
	//invoquer la methode prepareEventHandlers ici
};

