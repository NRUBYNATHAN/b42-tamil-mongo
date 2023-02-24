const os=require("os");
console.log("free momory in KB : ",os.freemem())
console.log("free memory in GB:",(os.freemem() /1024/1024/1024).toFixed(2),"GB")
console.log("TOTAL memory in GB:",(os.totalmem() /1024/1024/1024).toFixed(2),"GB")
//template litral
console.log(`TOTAL memory in GB:${(os.totalmem() /1024/1024/1024).toFixed(2)}GB`)
console.log("version",os.version())
console.log("cpus",os.cpus())