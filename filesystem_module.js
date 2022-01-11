const { readFileSync, writeFileSync } = require('fs'); //fs içinden direkt olarak readFileSync fonksiyonunun yerini alır.
const fs = require('fs');
// SYNC Çalışır
const first = readFileSync('./deneme.txt', 'utf-8'); // Path'i verilen dosyanın içeriğini okur.
//console.log(first);

const second = writeFileSync('./denemeSync.txt', 'writefilesync ile yazildi.', 'utf-8'); // yeni bir dosya oluşturur ve içeriğini yazar.
const read = readFileSync('./denemeSync.txt', 'utf-8');
//console.log(read);




// ASYNC Çalışır

const { readFile, writeFile } = require('fs');
readFile('./denemeSync.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./deneme.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
    })
});