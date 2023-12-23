function checkCreditCard() {
    var input = document.getElementById("text-input").value;
    var pattern = /([\d]{4}[\s|-]){3}[\d]{4}$/;
    var temp = "The credit card numbers are valid.";
    if (!pattern.exec(input)) {
        temp = "The credit card numbers must have the format: xxxx-xxxx-xxxx-xxxx or xxxx xxxx xxxx xxxx";
    }
    // alert(temp);
    var output = document.getElementById("text-output").value = temp;
}