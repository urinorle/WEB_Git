function input() {
    var personm = prompt("Please enter your name: ", "El teu nom");
    if (personm != null) {
        document.getElementById("res").innerHTML =
            "Hola " + personm + "! Com estàs?";
    }
}
window.onload = input;