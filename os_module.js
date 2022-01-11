const os = require('os'); // Operating System ile ilgili fonksiyonları verir.

//Current user information
const user = os.userInfo();
console.log(user); //Kullanıcı bilgilerini verir.

const cpu = os.cpus();
console.log(cpu); //İşlemcileri verir

const host = os.hostname(); //host'u verir.
console.log(host);



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS); // Şu anki işletim sistemi bilgisini verir.