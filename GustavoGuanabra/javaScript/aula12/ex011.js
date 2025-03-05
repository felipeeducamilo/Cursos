var year = 15;

if (year < 16) {
    console.log("Você não tem idade mínima para votar");
} else if (year < 18 || year >= 65) {
    console.log("Seu voto é opcional");
} else if (year < 65) {
    console.log("Seu voto é obrigatório")
}