
const squadre = [
    {
        nome: "juve",
        punti: 0,
        falli: 0
    },
    {
        nome: "roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "fiorentina",
        punti: 0,
        falli: 0
    }

];



for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random() * 70);
    squadre[i].falli = Math.floor(Math.random() * 70);

}

const squadre2 = [];


for (let i = 0; i < squadre.length; i++) {
    let { nome, falli } = squadre[i];
    squadre2[i] = [nome, falli];

    console.log(squadre2[i]);
}