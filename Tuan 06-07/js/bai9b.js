function bangCuuChuong() {
    document.write("<h1>" + "Bảng cửu chương" + "</h1>");
    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 12; j++) {
            document.write(i + " * " + j + " = " + i * j);
            document.write("<br>");
        }
        document.write("<br>");
    }
}