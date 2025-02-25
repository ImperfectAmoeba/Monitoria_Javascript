//1 - Plus Minus
function plusMinus(arr) {
    let negativo = 0;
    let positivo = 0; 
    let zero = 0;
     for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        positivo ++;
    }
    else if (arr[i] < 0){
        negativo ++;
    }
    else{
        zero++;
        }
     }
    console.log((positivo/arr.length).toFixed(6));
    console.log((negativo/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}


//2 - Simple Array Sum
function simpleArraySum(ar) {
    // Write your code here
    let soma = 0;
    for(let i=0; i < ar.length; i++){
        soma = soma + ar[i];
    }
    return soma;
    }

//3 - Compare the triplets
function compareTriplets(a, b) {
// The task is to calculate their comparison points by comparing each category:
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
    let resultA = 0;
    let resultB = 0;
    for(let i=0; i < a.length; i++){
        if(a[i] > b[i]){resultA++;}
        else if(a[i] < b[i]){resultB++;}
    }
    return [resultA, resultB];
}

//4 - A Very Big Sum (PERGUNTAR!)
function aVeryBigSum(ar) {
    // Write your code here
    let soma = 0;
    for (let i = 0; i < ar.length; i++) {
        soma = soma + ar[i];
    }
}


//5 - Birthday Cake Candles
function birthdayCakeCandles(candles) {
    let maior = candles[0];
    let velaG = 0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > maior ){
            maior = candles[i];
        }
    }
    
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maior) {
            velaG++;
        }
    }
    return velaG;
}