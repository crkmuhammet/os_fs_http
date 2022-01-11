const path = require('path');

const filePath = path.join('/os_fs_http', 'deneme.txt'); // String join gibi düşünülebilir. join içine verilen stringleri birleştirir.
console.log(filePath);

const base = path.basename(filePath); // FilePath içindeki en son elemani verir. 
console.log(base);

const absolute = path.resolve(__dirname, 'deneme.txt');
console.log(absolute); // Directoryname ile birlikte deneme.txt dosyasını verir.(Fullpath)