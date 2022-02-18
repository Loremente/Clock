function setOra() {
    var data = new Date();
    var ore = data.getHours();
    var minuti = data.getMinutes();
    var seconds = data.getSeconds();

    document.getElementById("orario").innerHTML = ore + ":" + minuti + ":" + seconds
}
setInterval(setOra, 1000)