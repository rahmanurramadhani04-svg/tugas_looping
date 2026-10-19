const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah perkalian: ", (input) => {
    const n = Number(input);

    if (Number.isInteger(n) && n > 0) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= 5; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
            console.log("");
        }
    }

    rl.close();
});