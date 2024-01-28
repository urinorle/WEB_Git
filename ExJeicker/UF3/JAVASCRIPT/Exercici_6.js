function myFunction() {
    let uf1 = prompt("Introduce la nota de la UF1: ", "9");
    document.getElementById("UF1").innerHTML = uf1;
    if (uf1 < 0 || uf1 > 10) {
        alert("La nota debe estar entre 0 y 10");
        uf1 = prompt("Introduce la nota de la UF1: ", "9");
        document.getElementById("UF1").innerHTML = uf1;
    }

    let uf2 = prompt("Introduce la nota de la UF2: ", "8");
    document.getElementById("UF2").innerHTML = uf2;
    if (uf2 < 0 || uf2 > 10) {
        alert("La nota debe estar entre 0 y 10");
        uf2 = prompt("Introduce la nota de la UF2: ", "8");
        document.getElementById("UF2").innerHTML = uf2;
    }

    let uf3 = prompt("Introduce la nota de la UF3: ", "7");
    document.getElementById("UF3").innerHTML = uf3;
    if (uf3 < 0 || uf3 > 10) {
        alert("La nota debe estar entre 0 y 10");
        uf3 = prompt("Introduce la nota de la UF3: ", "7");
        document.getElementById("UF3").innerHTML = uf3;
    }
    
    var totalHours = 45 + 44 + 43; 
    var weightedAverage = (uf1 * 45 + uf2 * 44 + uf3 * 43) / totalHours;

    var mitjanaElement = document.getElementById("mitjana");
    if (uf1 >= 5 && uf2 >= 5 && uf3 >= 5) {
        mitjanaElement.innerHTML = Math.round(weightedAverage);
        mitjanaElement.style.fontStyle = "italic";
        mitjanaElement.style.color = "green";
    } 
    else {
        mitjanaElement.innerHTML = Math.round(weightedAverage);
        mitjanaElement.style.fontWeight = "bold";
        mitjanaElement.style.backgroundColor = "red";
    }
}

window.onload = myFunction;