function calculIMC() {
    var P = document.getElementById("poids").value;
    var T = document.getElementById("taille").value;
    var IMC = P/((T/100)**2)
    IMC = IMC.toFixed(2)
    //alert("Valeur de l'IMC : "+IMC);
    document.getElementById("results").value = IMC;
}
