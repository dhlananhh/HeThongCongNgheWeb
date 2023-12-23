function hour() {
    var D = new Date();
    var m = D.getMinutes();
    if (m < 10) m = "0" + m;
    var h = D.getHours();
    if (h < 10) h = "0" + h;
    document.getElementById("content").innerHTML = h + ":" + m;
    setTimeout("hour()", 1000);
}
hour();