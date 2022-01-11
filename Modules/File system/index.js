// this module is the file system class conclusion:
const fs = require('fs');

const readDirSync = fs.readdirSync('./')
console.log(readDirSync);

fs.readdir('./',(err,res)=>{
if(err) console.log(err);
else console.log(res);
})

