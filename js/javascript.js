
let mobile = document.getElementById('identification');

mobile.addEventListener('mouseup', function(){
   let numero = (prompt('Quel est ton Numéro de mobile ?'));

    let number = Number(numero);

   if(numero === null) {
       alert("Annulation");
   } 
   else {
       alert("Merci nous avons enregistrer ton numéro : " + numero);
   }
   
});

