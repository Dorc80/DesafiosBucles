console.log('*** Imprimir impares 1-20 ***');

for (var i = 1; i <= 20; i++) {

    if (i % 2 != 0) {
        console.log(i);
    }

}

console.log('\n*** Disminuir multiplos de 3 ***');

for (var i = 100; i >= 0; i--) {

    if (i % 3 == 0) {
        console.log(i);
    }

}

console.log('\n*** Imprime la secuencia ***');

for(var i=4; i>=-3.5; i-=1.5) {

    console.log(i);

}

console.log('\n*** Sigma ***');

var sum = 0;

for(var i = 1; i<=100; i++) {
    sum += i
}

console.log(sum);

console.log('\n*** Factorial ***');

var product = 1;

for(var i = 1; i<=12; i++) {
    product *= i;
}

console.log(product);