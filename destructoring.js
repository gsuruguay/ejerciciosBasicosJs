const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

({ a, c } = original);
sinB = { a, c };

({ c } = original);
valorDeC = { c };

console.log(sinB);
console.log(valorDeC);