let persona = {
    nome : 'Giovanni',
    cognome : 'Rosso',
    anni : '78634',

    presentazione :function(){
        console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.anni} anni`)
    }
}
persona.presentazione()