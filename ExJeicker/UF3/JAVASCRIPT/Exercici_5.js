function myFunction() {
    const uf1 = prompt("Introduce la nota de la UF1: ", "9");
    document.getElementById("UF1").innerHTML = uf1;

    const uf2 = prompt("Introduce la nota de la UF2: ", "8");
    document.getElementById("UF2").innerHTML = uf2;

    const uf3 = prompt("Introduce la nota de la UF3: ", "7");
    document.getElementById("UF3").innerHTML = uf3;

    const totalHours = 45 + 44 + 43;
    const weightedAverage = (uf1 * 45 + uf2 * 44 + uf3 * 43) / totalHours;

    if (uf1 >= 5 && uf2 >= 5 && uf3 >= 5) {
        document.getElementById("mitjana").innerHTML = Math.round(weightedAverage);
    } 
    else{
        document.getElementById("mitjana").innerHTML = "El estudiante no ha aprobado todas las UF";
    }
}
window.onload = myFunction;