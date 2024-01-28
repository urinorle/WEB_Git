function holaMundo() {
    console.log("Hola món! El meu nom és Guillem");
    alert("Hola món! El meu nom és Guillem");
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var anio = fechaActual.getFullYear();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    var mensaje = "Avui és " + dia + "-" + mes + "-" + anio + " i l'hora actual és " + hora + ":" + minutos + ":" + segundos;
    document.getElementById("res").innerText = mensaje;
}
window.onload = holaMundo;