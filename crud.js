const fs=require('fs');
const path=require('path');
let dirpath=path.join(__dirname,'crud');
let dir=`${dirpath}/sample.txt`;
fs.writeFileSync(dir,'this is my simple text file'); // creating a file
fs.readFile(dir,'utf-8',(err,item)=> // reading from the file
{
       if(err)
       {
        console.log("error in reading from file");
       }
       else
       {
            console.log(item);
       }
});
fs.appendFile(dir,"we add some content in the sample file",(err)=> //updating the file
{
    if(!err)
    {
        console.log("file updated");
    }
})
fs.unlinkSync(dir);   // deleting the file
