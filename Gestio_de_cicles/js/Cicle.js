export class Cicle {
    // Constructor de la classe
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.dataEdicio = null;
        this.moduls = [];
    }

    // Métode que afegeix 1 a numEdicions cada vegada que s'edita la classe
    setNumEdicions() { this.numEdicions++; }

    // Métode que afegiex la data actual del sistema a numEdicions, quan la classe s'edita
    setDataEdicio() { this.dataEdicio = new Date(); }

    // Métode que retorna un String amb les dades del cicle
    toString() {
        this.moduls.sort();

        return (`nom: ${this.nom}
categoria: ${this.categoria}
numAlumnes: ${this.numAlumnes}
abreviatura: ${this.abreviatura}
moduls: ${this.moduls}`);
    }

    // Métode que afegeix un mòdul a la classe
    setModul(modul) {
        this.moduls.push(modul);
    }
}