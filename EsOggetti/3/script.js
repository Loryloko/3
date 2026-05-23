let bowling = {
    players: [
        {name: 'Livio', scores: []},
        {name: 'Paola', scores: []},
        {name: 'Filippo', scores: []},
        {name: 'Giuseppe', scores: []}
    ],
    creaPunteggio: function(){
    this.players.forEach(giocatore => {
    for (let i = 1; i <= 10; i++) {
        giocatore.scores.push(Math.floor(Math.random()*(10 - 1 + 1) + 1))
        }
    })
    },
    nuovogiocatore: function(nome){
        let newplayer = {name: nome, scores: []}
         for (let i = 1; i <= 10; i++) {
        newplayer.scores.push(Math.floor(Math.random()*(10 - 1 + 1) + 1))
        }
        this.players.push(newplayer)
    },
    punteggiofinale: function(){
        this.players.forEach(giocatore => {
            let tot = giocatore.scores.reduce((acc, num)=> acc + num)
            giocatore.totale = tot
        })
        this.players.sort((a, b)=> b.totale - a.totale)
    },
    vincitore: function(){
        let vincitore = this.players[0]
        console.log(`il vincitore è ${vincitore.name} con ${vincitore.totale} punti`)
    },
    classifica: function(){
        console.log(`classifica finale`)
        this.players.forEach(giocatore => {
            console.log(`${giocatore.name} con ${giocatore.totale} punti`)
        })
    }
}
bowling.creaPunteggio()
bowling.nuovogiocatore('Alfonso')
bowling.punteggiofinale()
bowling.vincitore()
bowling.classifica()