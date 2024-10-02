function kubusBerekenen(lengte, breedte, hoogte) {
    var inhoudKubus = (lengte * breedte * hoogte)
    return inhoudKubus
}
console.log(kubusBerekenen(10, 10, 10))

function cylinderBerekenen(straal, hoogte) {
    var oppCirkel = (Math.PI * straal ** 2)
    var inhoudCylinder = (oppCirkel * hoogte)
    return inhoudCylinder
}
console.log(cylinderBerekenen(5, 10))

function driehoekSchuineZijde(rhz1, rhz2) {
    var pythagoras = (rhz1 ** 2 + rhz2 ** 2)
    var pythagoras2 = (Math.sqrt(pythagoras))   
    return pythagoras2
}
console.log(driehoekSchuineZijde(5, 5))

function gemiddelde(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {
    var optelling = (getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7)
    var aantalNummers = 7
    var gemiddeldeVanGetallen = (optelling / aantalNummers)
    return gemiddeldeVanGetallen
}

console.log(gemiddelde(12, 22, 32, 42, 52, 62, 72))