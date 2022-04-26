// all file system (fs) related command
// write file command
const fs = require('fs')
const quotes= 'dont worry on uncontrolables'
fs.writeFile('./awesomeQuotes.txt',quotes,(err)=>{
                         console.log('Completed writing')
})
// read file command
fs.readFile('./awesomeQuotes.txt','utf-8',(err,contentOfFile)=>{
if(err){
console.log(err)
return;
}
                         console.log(contentOfFile)
})
// appendFiles with add the text or data in existing files
const addQuotes = 'live let live'
fs.appendFile('./awesomeQuotes.txt','\n'+addQuotes,(err)=>{
                         console.log('Completed writing')
})
// unlink command remove data from files

fs.unlink('./delete.txt',(err)=>{
                         console.log('delete sucessfully')
})
fs.readdir('./backup',(err,files)=>{
                         console.log(files)
})
// task deleteting all files from backup
fs.unlink(`./backup/quotes $(i).html`,(err)=>{
                         console.log('delete sucessfully')
})
fs.readdir('./backup',(err,files)=>{
            files.forEach((filesName)=>fs.unlink(`./backup/${filesName}`,(err)=>{
                         console.log('delete sucessfully')
}))          
})