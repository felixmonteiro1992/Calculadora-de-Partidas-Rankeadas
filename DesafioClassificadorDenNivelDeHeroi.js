function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function obterNivel(saldoVitorias) {
    if (saldoVitorias < 10)
        return "Ferro";
        
    else if (saldoVitorias <= 20)
        return "Bronze";
        
    else if (saldoVitorias <= 50)
        return "Prata";
        
    else if (saldoVitorias <= 80)
        return "Ouro";
        
    else if (saldoVitorias <= 90)
        return "Diamante";

    else if (saldoVitorias <= 100)
        return "Lendário";
        
    else
        return "Imortal";
}

const vitorias = 15;
const derrotas = 5;

const saldoVitorias = calcularSaldo(vitorias, derrotas);
const nivel = obterNivel(saldoVitorias);

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
