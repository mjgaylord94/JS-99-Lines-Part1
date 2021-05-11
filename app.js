let friends = [`Darren`, `Rachel`, `Zoe`, `Kenzie`, `Emily Mountain`];

function song(name) {
    for (let i = 99; i > 1; i--) {
        console.log(`${i} lines of code in the file, ${i} lines of code; ${name} strikes one out, clears it all out, ${i-1} lines of code in the file.`)
    };
    console.log(`1 line of code in the file, 1 line of code; ${name} strikes one out, clears it all out, 0 lines of code in the file.`)
};

for (i = 0; i < friends.length; i++) {
    song(friends[i])
}