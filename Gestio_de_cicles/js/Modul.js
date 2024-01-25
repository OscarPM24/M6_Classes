export class Modul {
    // Constructor de la classe
    constructor(cicle, modul_nom, modul_num, modul_hores) {
        this.cicle = cicle;
        this.modul_nom = modul_nom;
        this.modul_num = modul_num;
        this.modul_hores = modul_hores;
    }

    // Métode que retorna un String amb les dades del mòdul
    toString() {
        return (` MP${this.modul_num}. ${this.modul_nom} (${this.modul_hores}h)`);
    }

}