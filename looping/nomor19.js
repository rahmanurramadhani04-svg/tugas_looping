const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah nilai: ", (input) => {
    const n = Number(input);

    if (!Number.isInteger(n) || n <= 0) {
        rl.close();
        return;
    }

    let jumlah = 0;
    let i = 1;

    function inputNilai() {
        if (i > n) {
            console.log("Jumlah =", jumlah);
            console.log("Rata-rata =", jumlah / n);
            rl.close();
            return;
        }

        rl.question(`Nilai ke-${i}: `, (nilai) => {
            const angka = Number(nilai);

            if (!Number.isFinite(angka) || nilai.trim() === "") {
                inputNilai();
                return;
            }

            jumlah += angka;
            i++;
            inputNilai();
        });
    }

    inputNilai();
});