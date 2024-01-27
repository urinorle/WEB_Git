function Calculos() {
    var notaUF1;
    do {
        notaUF1 = prompt("Introdueix la nota de UF1:", "ex: 8");
        

        if (notaUF1 < 1 || notaUF1 > 10) {
            alert("La nota ha de ser entre 1 i 10!");
        } else{
            notaUF1 = parseInt(notaUF1);
        }
    } while (notaUF1 < 1 || notaUF1 > 10);

    var incluirNotaUF1 = document.getElementById("UF1");
    incluirNotaUF1.textContent = "nota UF1: " + notaUF1;


    var notaUF2;
    do {
        notaUF2 = prompt("Introdueix la nota de UF2:", "ex: 8");
        

        if (notaUF2 < 1 || notaUF2 > 10) {
            alert("La nota ha de ser entre 1 i 10!");
        } else{
            notaUF2 = parseInt(notaUF2);
        }
    } while (notaUF2 < 1 || notaUF2 > 10);

    var incluirNotaUF2 = document.getElementById("UF2");
    incluirNotaUF2.textContent = "nota UF2: " + notaUF2;

    var notaUF3;
    do {
        notaUF3 = prompt("Introdueix la nota de UF3:", "ex: 8");
        

        if (notaUF3 < 1 || notaUF3 > 10) {
            alert("La nota ha de ser entre 1 i 10!");
        } else{
            notaUF3 = parseInt(notaUF3);
        }
    } while (notaUF3 < 1 || notaUF3 > 10);

    var incluirNotaUF3 = document.getElementById("UF3");
    incluirNotaUF3.textContent = "nota UF3: " + notaUF3;

    var incluirMitjana = document.getElementById("mitjana");

    if (notaUF1 < 5 || notaUF2 < 5 || notaUF3 < 5) {
        incluirMitjana.textContent = "Per arobar has de treure més d'un 5 en totes les UF's. Ho sentim.";
    } else {
        var resultadoConDecimales = ((45 * notaUF1) + (44 * notaUF2) + (43 * notaUF3)) / (45 + 44 + 43);
        var entero = Math.floor(resultadoConDecimales);
        var decimal = resultadoConDecimales - entero;

        if (decimal > 0.5) {
            incluirMitjana.textContent = "La teva mitjana és de: " + (entero + 1);
        } else {
            incluirMitjana.textContent = "La teva mitjana és de: " + entero;
        }
    }
}

window.onload = Calculos;
