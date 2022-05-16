function CalculGain(){
  // on récupère le formulaire 
  let myForm = document.getElementById("formCalculGain");
  // on transforme le formulaire HTML en objet FormData
  let formObj = new FormData(myForm);

  // on récupère les imputs de notre formulaire par leur noms
  let tauxHoraire = formObj.get('TH');
  let tauxJournalier = formObj.get('TJM');
  let extras = formObj.get('Extras');

  let qteTauxHoraire = formObj.get('QteTH');
  let qteTauxJournalier = formObj.get('QteTJM');
  let qteExtras = formObj.get('QteExtras');

  let charges = formObj.get('Charges');

  // commence le calcul

  let gainHeure = tauxHoraire * qteTauxHoraire;
  let gainJour = tauxJournalier * qteTauxJournalier;
  let gainExtras = extras * qteExtras;

  let totalBrut = gainHeure + gainJour + gainExtras;
  

  let totalCharges = (totalBrut * (charges/100));


  let totalNet = totalBrut - totalCharges;




  // on remplis les champs de résultat -> ps ça ne fonctionne pas pour l'instant

  document.getElementById("totalBrut").innerText = totalBrut+" €";  
  document.getElementById("totalCharges").innerText = totalCharges+" €";  
  document.getElementById("totalNet").innerText = totalNet+" €";  
}