// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();


// const birthdayEventListener = (name) => {
//     console.log(`happy birthday ${name}`);
// }

// const emiter = ({name}) =>{
//     birthdayEventListener(name);
// }

// myEventEmitter.on('dadang', emiter);
// myEventEmitter.emit('dadang',{ name : 'Dudung'});

const fs = require('fs');

const fileReadColback = (error,data) => {
    if(error){
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(data);
}

fs.readFile('note.txt','utf8',fileReadColback);
