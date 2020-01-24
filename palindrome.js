function Palindrome (entree)
{
  //prompt permet entree la valeur de ton choix 
  // toLowerCase(), on convertit toutes les entrées de l’utilisateur en minuscule
      var entree = prompt("Veillez saisir votre mot").toLowerCase();
          entree_1 = [...entree].reverse().join('');
          if (entree === "") {
            console.log('Veuillez saisir un mot d\'abord');
        }
        
        else if (entree === entree_1) {
            console.log(entree + ' est un palindrome');
        }
        
        else {
            console.log(entree + ' n\'est pas un palindrome');
        }
}
Palindrome();