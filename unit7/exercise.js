// Imihanda dushyiramo connection ziva n'aho zijya
let imihanda = ["kwasam-kwapoul", "kwapoul-kwadavid", "kwapazzop-kwamarks", "kwadesire-kwakeve"];

// Function ifasha guhindura imihanda muri object y'ibyerekezo
function ibyerekezo(ibisanimihanda) {
    let ahajywaKwa = Object.create(null);

    // Function ifasha kongeramo connection hagati y’ahantu
    function jyakwa(mvuye, ngiye) {
        if (mvuye in ahajywaKwa) {
            ahajywaKwa[mvuye].push(ngiye);
        } else {
            ahajywaKwa[mvuye] = [ngiye];
        }
    }

    // Dufata buri muhanda tukawucamo aho uva naho ujya
    for (let [mvuye, ngiye] of ibisanimihanda.map(r => r.split("-"))) {
        jyakwa(mvuye, ngiye);
        jyakwa(ngiye, mvuye);
    }

    return ahajywaKwa;
}

const kwerekeza = ibyerekezo(imihanda);

// Class isobanura aho turi, aho tugiye, n'uko twimuka
class Ahotugiye {
    constructor(ahoturi, ahotugiye1) {
        this.ahoturi = ahoturi;
        this.ahotugiye1 = ahotugiye1; // ni parcels zitaratangwa
    }

    genda(icyerekezo) {
        if (!kwerekeza[this.ahoturi] || !kwerekeza[this.ahoturi].includes(icyerekezo)) {
            return this; // niba aho tujya nta nzira ijyayo, turasubira aho turi
        }

        let ahotugiye1 = this.ahotugiye1.map(p => {
            if (p.ahoturi !== this.ahoturi) return p;
            return { ahoturi: icyerekezo, kwa: p.kwa };
        }).filter(p => p.ahoturi !== p.kwa); // turakuramo parcels zatangiwe

        return new Ahotugiye(icyerekezo, ahotugiye1);
    }
}

// Reba uko dukora aho turi na parcels
let ahohambere = new Ahotugiye("kwasam", [
    { ahoturi: "kwasam", kwa: "kwapoul" },
    { ahoturi: "kwapazzop", kwa: "kwamarks" }
]);

console.log(ahohambere);
console.log(ahohambere.genda("kwapoul"));
