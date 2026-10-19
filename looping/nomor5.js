let jumlah = 0;
let hasil = "";

for (let i = 1; i <= 5; i++) {
    jumlah += i;
    hasil += i + (i < 5 ? " + " : "");
}

console.log(hasil + " = " + jumlah);