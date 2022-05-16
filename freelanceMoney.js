function CalculGain(){
  // on vérifie les inputs
  CheckInputs();

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




  // on remplis les champs de résultat

  document.getElementById("totalBrut").innerText = totalBrut.toFixed(2)+" €";  
  document.getElementById("totalCharges").innerText = totalCharges.toFixed(2)+" €";  
  document.getElementById("totalNet").innerText = totalNet.toFixed(2)+" €";  
};

function CheckInputs(){
  let mesInputs = document.querySelectorAll('#formCalculGain input.form-control');
  mesInputs.forEach(monInput =>{
    // vérifier si supèrieur à 0, sinon mettre à 0
    if(monInput.value < 0){
      monInput.value = 0;
    }
  });  
};

function saveFormInCookies(FormData){
  
}


let btn = document.getElementById("btnValidation");
btn.addEventListener('click', CalculGain);

let mesInputs = document.querySelectorAll('#formCalculGain input.form-control');

mesInputs.forEach(monInput =>{
  monInput.addEventListener('keyup', CalculGain);
  monInput.addEventListener('change', CalculGain);
});