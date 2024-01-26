function myFunction() {
    console.log("Hola món! El meu nom és: Jeicker Fernandez");
    alert("Hola món! El meu nom és: Jeicker Fernandez");

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    document.getElementById("a").innerHTML = "Avui és... " + formattedDate + " i l'hora actual és... " + formattedTime;
}
window.onload = myFunction;
