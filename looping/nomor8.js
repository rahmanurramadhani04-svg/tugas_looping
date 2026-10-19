let jumlah = 0;
let hasil = "";

for (let i = 2; i <= 10; i += 2) {
    jumlah += i;
    hasil += i + (i < 10 ? " + " : "");
}

console.log(hasil + " = " + jumlah);