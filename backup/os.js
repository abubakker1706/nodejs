const os = require('os');
console.log('Total ram available',os.totalmem())
console.log('free ram available',os.freemem())
console.log('Os version',os.version())
console.log('Total ram available in GB',os.totalmem()/1024/1024/1024)
console.log('Processor',os.cpus())