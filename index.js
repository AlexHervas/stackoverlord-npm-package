const readline = require('readline');

function ageNpm() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter your age: ", (answer) => {
        const age = parseInt(answer);
        if (age >= 18) {
            console.log(`So you have ${age}, then you are adult`);
        } else {
            console.log(`So you have ${age}, then you aren't adult`);
        }
        rl.close();
    });
}

module.exports = ageNpm