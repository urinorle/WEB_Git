function myFunction() {
    let day = prompt("Por favor introduce el día: ", "14");
    let month = prompt("Por favor introduce el mes: ", "07");
    let year = prompt("Por favor introduce el año: ", "2005");

    document.getElementById("result").innerHTML = "La Suma de los números es: " + (parseInt(day) + parseInt(month) + parseInt(year));
}
window.onload = myFunction;