console.log(process.argv)

console.log("celcius to faranheat")
console.log((process.argv[2] *9)/5+(32))

const celciustofaranheat =(celcius)=>{
    return (celcius*(9/5)+32).toFixed(2)
}
const[ , ,celcius]=process.argv
console.log( celciustofaranheat(celcius))