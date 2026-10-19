const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah perkalian: ", (input) => {
    const n = Number(input);

    if (!Number.isInteger(n) || n <= 0) {
        rl.close();
        return;
    }

    console.log("Output:");
    console.log("Masukkan Jumlah Perkalian:", n);

    let header = "   ";

    for (let j = 1; j <= n; j++) {
        header += String(j).padStart(5);
    }

    console.log(header);

    for (let i = 1; i <= n; i++) {
        let baris = String(i).padStart(3);

        for (let j = 1; j <= n; j++) {
            baris += String(i * j).padStart(5);
        }

        console.log(baris);
    }

    rl.close();
});