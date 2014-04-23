/*
Pour JS, tous les éléments HTML sont des objets (images, liens, etc.) : on va donc pouvoir s'en servir pour en connaître ou en modifier les caractéristiques (comme l'adresse de l'image ou ses dimensions).
Cela se révèlera particulièrement pratique, notamment dans le cas des formulaires
*/


/*

En JS, la plupart des fonctions qu'on utilise sont en fait... des méthodes de certains objets !

Prenons nos trois fonctions qui font apparaître des boîtes de dialogues, alert(), prompt() et confirm().

Pourtant, on ne retrouve pas la syntaxe objet.methode() !
En fait, si on voulait tout écrire, il faudrait employer window.alert(), window.prompt() et window.confirm()... ce sont donc bel et bien des méthodes, d'un certain objet appelé "window" !

L'objet window "représente" la fenêtre de votre navigateur. Ça va être un objet très utilisé, car il possède de nombreux sous-objets.
Vous verrez qu'on l'utilisera souvent, car c'est un objet de base, pour ne pas dire l'objet de base : c'est pour cela qu'il est facultatif de préciser son nom, comme vous l'avez toujours fait en écrivant alert() 
Notez que c'est le seul objet qu'on peut ne pas écrire quand on l'utilise.

*/

/*

L'objet document

L'objet document est un sous-objet de window. Cet objet représente la page HTML affichée dans le navigateur. C'est un objet assez important, qu'il est impératif d'écrire ! On ne peut pas l'omettre comme window.


*/

/*
getElementById("id")

Cette méthode permet d'accéder très facilement à l'élément dont l'id est id.
Cette fonction nous donne (ou renvoie) donc bien un (et un seul) élément.

getElementsByTagName("balise")

Cette méthode retourne sous forme de tableau tous les éléments HTML dont on donne la balise en argument.

*/


/*
 le tableau retourné peut astucieusement être utilisé avec une boucle, de manière à récupérer des éléments particuliers repérés par exemple par leur attribut class ; on pourra ainsi appliquer des changements (comme les masquer) uniquement à ces éléments là.

*/


//Attributs
monImage = document.getElementsByTagName("img")[0];
monImage.src = "banniere.jpg";
monImage.width = "800";
monImage.height = "200";

//Utilisation
Leur utilisation

/*La première façon de déclencher un script lors d'un évènement, c'est d'utiliser l'attribut HTML, comme nous l'avons vu dans l'un des premiers chapitres :*/

/*<img src="azerty.png" alt="" onclick="alert('Oui ?');" />
Mais il est également possible d'indiquer cet évènement directement en JS.
Voici une image (qu'on va repérer grâce à son id) :

<img src="azerty.png" alt="" id="uneImage" /> */

//Et voici le même exemple que ci-dessus, mais directement en JS :
document.getElementById("uneImage").onclick = function()
{
     alert("Oui ?");
}


/*  
	Il existe cependant un cas où accéder à un élément est particulièrement simple : c'est lorsque le code se trouve dans la balise HTML de l'objet en question. On utilise dans ce cas le mot-clé this, qui désigne cet élément (d'où son nom).

	Un exemple : changer d'image lorsqu'on clique dessus.

	<img src="photo.jpg" alt="" onclick="this.src='image.jpg'" />
*/


/*
Commençons par l'objet form, qui représente le formulaire lui-même : tous les éléments du formulaire en sont des sous-objets.
Nous allons présenter deux évènements qui lui sont associés : onReset et onSubmit.

onSubmit

Cet évènement se produit lorsque le formulaire est envoyé. Il est particulièrement intéressant, car il va nous permettre de vérifier si les champs sont bien remplis avant d'envoyer le formulaire ; si ce n'est pas le cas, on pourra annuler l'envoi.

Pour rappel, l'envoi d'un formulaire en HTML se fait par un clic sur un élément input de type submit :

<input type="submit" value="Envoyer" />
Il est possible de bloquer l'envoi d'un formulaire, et ce, de cette manière :

1<form method="post" action="page.php" onsubmit="return x;">
Si x vaut true, le formulaire est envoyé normalement.

En revanche, si x vaut false, alors le formulaire n'est pas envoyé (il ne se passe rien).

On va donc créer une fonction, nommée verifier dans l'exemple qui suit, qui va vérifier le contenu du formulaire, pour éventuellement en bloquer l'envoi.

<form method="post" action="page.php" onsubmit="return verifier(this);">
     <!-- ici, le contenu du formulaire -->
     <input type="submit" value="Envoyer" />
</form>
Et notre fonction ressemblera schématiquement à ceci :
*/
function verifier(f) {
     if( /* le formulaire est bien rempli */ )
          return true;
     else
     {
          alert('Le formulaire est mal rempli');
          return false;
     }
}


/*
	onReset
		onReset

Le second évènement typique des formulaires se nomme onReset, et est appelé lorsque le formulaire est remis à zéro par un bouton de type reset.

OnReset s'utilise assez facilement, de manière semblable à onSubmit. Voyez plutôt:

<form method="post" action="page.php" onreset="return confirm('Vraiment ?');">
Dans ce cas, si l'utilisateur veut réinitialiser le formulaire, il devra le confirmer. Si il confirme son action, true est renvoyé, et le formulaire est alors réinitialisé ; s'il annule, c'est false qui est retourné, et rien ne se passe.

Notez qu'on peut bien sûr exploiter à la fois onSubmit et onReset pour un même formulaire.
*/


