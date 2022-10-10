//Задания-1
let word1 = 'Hello'
let word2 = 'Привет'

function stringСomparisons (a,b){
    if(a.length > b.length){
        return 1
    }else if(a.length < b.length){
        return -1
    }else{
        return 0
    }
}
// console.log(stringСomparisons(word1,word2))
//-------------------------------------------------------------------------------------------------