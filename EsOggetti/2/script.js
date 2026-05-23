let nome;
let telefono;

let check = Number(prompt('premi 1 se vuoi eliminare o aggiungere un contatto, \n premi 2 se vuoi modificare un contatto'))

let rubrica = {
      contacts: [
      {nome: 'Nicola', telefono: '3331111111'},
      {nome: 'Lorenzo', telefono: '3332222222'},
      {nome: 'Paola', telefono: '3333333333'},
      {nome: 'Jenny', telefono: '3334444444'}
    ],
    
    mostratutti: function(){
        this.contacts.forEach(contacts =>{
            console.log(`${contacts.nome} : ${contacts.telefono}`);
        })
    },
    mostrauno: function(nome){
        let contatto = this.contacts.find(contacts => contacts.nome == nome)
    if(contatto){
        console.log(`contatto trovato: ${contatto.nome}: ${contatto.telefono}`);
    }else{
        console.log('contatto non trovato');
    }
    },
    elimina: function(nome, telefono){
        let contatto = this.contacts.find(contacts => contacts.nome == nome)
        let index = this.contacts.indexOf(contatto)
        if(contatto){
            this.contacts.splice(index, 1)
            console.log('contatto eliminato')
        }else{
            this.contacts.push({nome: nome, telefono: telefono})
            console.log('contatto aggiunto')
        }
    },
    modifica: function(nome, nuovonumero){
        let contatto = this.contacts.find(contacts => contacts.nome == nome)
        if(contatto){
            console.log('contatto modificato')
            contatto.telefono = nuovonumero
        }else{
            console.log('contatto non trovato');
        }
    }
}


rubrica.mostrauno(nome)

switch(check){
    case 1:
        nome = prompt('inserisci il nome del contatto')
        telefono = prompt('inserisci il numero del contatto')
        rubrica.elimina(nome, telefono)
    break;
    case 2:
        nome = prompt('inserisci il nome del contatto')
        telefono = prompt('inserisci il numero del contatto')
        rubrica.modifica(nome, telefono)
}

rubrica.mostratutti()