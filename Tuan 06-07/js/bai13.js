function checkUppercase() {
    var input = document.getElementById("text-input").value;
    var char = input.charAt(0);
    var pattern = /^[A-Z]/gm;
    var temp = "là ký tự thường";
    if (pattern.exec(char))
        temp = "là ký tự hoa";    
    var output = document.getElementById("text-output").value = temp;
}