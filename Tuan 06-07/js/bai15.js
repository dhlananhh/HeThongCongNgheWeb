function checkEmailAddress() {
    var input = document.getElementById("text-input").value;
    var pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    var temp = "The email address are valid.";
    if (!pattern.exec(input)) {
        temp = "The email address are invalid. Please retype !";
    }
    var output = document.getElementById("text-output").value = temp;
}