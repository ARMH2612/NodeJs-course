const os = require('os');

let totalMemo = os.totalmem();
let freeMemo = os.freemem();
console.log(`Total memory: ${totalMemo}\nFree memory: ${freeMemo}`);