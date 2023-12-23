var time = 1000;

function changeImg() {
    var arr = new Array();
    var str = "../../img/";
    arr[0] = str + "daisy.png";
    arr[1] = str + "coneflower.png";
    arr[2] = str + "cosmos.png";
    arr[3] = str + "dianthus.png";
    arr[4] = str + "impatiens.png";
    arr[5] = str + "marigolds.png";
    arr[6] = str + "sunflower.png";
    arr[7] = str + "zinnias.png";
    var i = Math.round(Math.random() * arr.length);
    document.getElementById("image").src = arr[i];
    setTimeout("changeImg()", time);
}

function stopChangeImg() {
    clearTimeout(time);
}