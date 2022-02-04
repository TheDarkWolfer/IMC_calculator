function calculIMC() {
    var P = document.getElementById("poids").value;
    var T = document.getElementById("taille").value;
    var IMC = P/((T/100)**2)
    IMC = IMC.toFixed(2)
    if (IMC > 30) {
        document.getElementById("results").style.background = "red";
    }
    else if (IMC < 15) {
        document.getElementById("results").style.background = "red";
    }
    else if (15<IMC<30) {
        document.getElementById("results").style.background = "green";
    }
    document.getElementById("results").value = IMC;
     if (IMC>100) {
        document.getElementById("results").value = "Ha ! fat !";
    }
}
