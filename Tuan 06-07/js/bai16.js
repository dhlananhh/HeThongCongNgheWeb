function checkIP (ipaddress) {
    var input = document.getElementById("input").value;
    var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm;
    if (regex.test(input) == false || input == "")
        alert("IP không hợp lệ");
    else 
        alert("IP hợp lệ");
}

function checkURL (string) {
    var input = document.getElementById("input").value;
    var regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    if (regex.test(input) == false || input == "") 
        alert("IP không hợp lệ");
    else 
        alert("IP hợp lệ");
}

function checkZipCode() {
    var input = document.getElementById("input").value;
    var regex = /^[0-9]{5}(?:-[0-9]{4})?$/gm;
    // /(^\d{5}$)|(^\d{5}-\d{4}$)/gm

    if (regex.test(input) == false || input == "") 
        alert("ZipCode không hợp lệ");
    else 
        alert("ZipCode hợp lệ");
}