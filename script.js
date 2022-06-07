var n1 = parseInt(prompt("digite um número"));
var n2 = parseInt(prompt("digite outro número"));

document.write("entre os números ", n1, " e ", n2, "<br/>");

if (n1 > n2){
    document.write("O maior número é o ", n1);
} else {
    document.write("O maior número é o ", n2);
}
