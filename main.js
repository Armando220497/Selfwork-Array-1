let numeriDecrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

numeriDecrescente.sort(function (a, b) {
    return b - a;
});

console.log(numeriDecrescente);

let numeriCrescente = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

numeriCrescente.sort(function (a, b) {
    return a - b;
});

console.log(numeriCrescente);
