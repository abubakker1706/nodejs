

const fs = require('fs');
const quotes="live more worry less"




const[, , noOfFiles]=process.argv
for (let i=1; i<= noOfFiles; i++){
                         fs.writeFile(`./backup/quotes${i}.html`,quotes,(err)=>{
                                                  console.log('writing completed',`quotes-${i}.html`)
                         })                   
}