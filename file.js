const fs=require("fs")
const quote="hello world"
fs.writeFile("./hello.html",quote,(err)=>{
    console.log("complted!!")
})
// //loop method
for(var i = 1;i<=10;i++){
    fs.writeFile(`./backup/welcome-${i}.html`,quote,(err)=>{
        console.log("complted!!")
    })
}
// //loop panni panrathu terminal la
for(var i = 1;i<=(process.argv[2]);i++){
    fs.writeFile(`./backup/welcome-${i}.html`,quote,(err)=>{
        console.log("complted!!")
    })
}

//read the file 
fs.readFile("./cool.txt","utf-8",(err,data)=>{
    console.log(data)
})

//error handling read file
fs.readFile("./cool.txt","utf-8",(err,data)=>{
    if(err){
        console.log("❌",err)
    }
    else{
        console.log(data)
    }
    
})

//add data on file
quote2="vanakamungooo"
fs.appendFile("./hello.html","\n"+quote2,(err)=>{
           console.log("complted!!")
        })

//delete file 
fs.unlink("./ruby.css",(err)=>[
    console.log("deleting completed")
])