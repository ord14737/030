
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
<title>Question 2</title>
<meta charset="UTF-8"/>

<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
<script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/boostrap.min.js"></script>

<link rel="stylesheet" href="main.css" type="text/css"/>
</head>
<body>

<?php include('inc/entete.php') ?>

<?php include('nadine/isabelle/lazare.php') ?>

<?php include('inc/menu.php') ?>

<!-- Le corps -->
 
<div id="corps">
    <h1>Mon super site</h1>
 
    <p>
        Bienvenue sur mon super site !<br>
         

         <?php 

         //Le professeur a 23 ans

         $ageDuProf = 23; //Type: int
         $quan = 'Quan Shing Phung'; //Type: string
         $monDecimal = 2.0; //float

         $isOldEnough = $ageDuProf > 18; //returns true
         $is23greaterThan2 = 23 > 2.0;



         echo 'Le professeur a ';
         echo $ageDuProf;
         echo ' ans (fait avec 3 echos)';

         echo "Le professeur a $ageDuProf ans (fait avec un echo)";

         echo 'Le professeur a' . $ageDuProf . 'ans (fait avec un echo)';

         //Afficher les rangées de la table Addresse
         //Il faudra se connecter à la base de données

         // mysql_ deprecated : obsolète/désuet, c
         // mysqli -
         //Assurez-vous que le module/extension php_pdo_mysql est activée 

         /*
            1. nom de l'hôte (hostname)
            2. nom de la base de données (test)
            3. le login (root)
            4. le mot de passe ('')

         */
echo "<h1>Addresses recueillie par mySQL </h1>";
// Étape 1 : On crée un objet qui représente la connexion avec la base de données.

$connexionBD = new PDO('mysql:host=localhost;dbname=test','root','');

// Étape 2 : Execution de la requête. On va utiliser l'objet $connexion pour faire une requête a notre BD

$reponse = $connexionBD->query('SELECT * FROM addresse');

// Étape 3 : Afficher nos données **
// Ce qui est renvoyé par query n'est pas utilisable
// On utilise fetch() pour traduire chaque rangée en un objet PHP qui est exploitable.
//3a. recupérer les entrées (rangées) une par une avec la méthode fetch()

// Ce qui renvoyé par fetch(), c'est un objet/tableau
// notreAddresse['unit_number']

// Pour chaque invocation de fetch(), on passe dans la boucle à l'entrée suivante. Donc, la boucle aura combien d'itérations? n itérations, n étant le nombre de rangées renvoyées par votre requêtes.
while($notreAddresse = $reponse->fetch())
{

?>

<!-- On écrit du HTML pour CHAQUE itération de la boucle -->
    <p>
        Unit number: <strong><?php echo $notreAddresse['unit_number']; ?></strong>  <br/>
        Street name: <strong><?php echo $notreAddresse['street_name']; ?></strong>  <br/>
        Postal code: <strong><?php echo $notreAddresse['postal_code']; ?></strong>  <br/>
        City: <strong><?php echo $notreAddresse['city']; ?></strong>  <br/>
        Province: <strong><?php echo $notreAddresse['province']; ?></strong>  <br/>
        Country: <strong><?php echo $notreAddresse['country']; ?></strong>  <br/>
    </p>
^}{}
<?php
}

$reponse->closeCursor();

?>



































         ?>
    </p>
</div>
 
<?php include("inc/pieddepage.php") ?>



</body>
</html>
