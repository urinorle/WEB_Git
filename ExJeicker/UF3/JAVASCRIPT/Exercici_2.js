function myFunction() {
    let person = prompt("Por favor introduce tu nombre: ", "Nombre");
    if (person != null) {
        document.getElementById("a").innerHTML =
            "Hola " + person + ", ¿Qué tal estás hoy?";
    }
}