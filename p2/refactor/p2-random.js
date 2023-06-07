/*
    CIT 281 Project 2
    Name: Jevon OWen-Kennedy
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//returns a random string of letters between 5 and 25 charecters
function randomLetters(){
        let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log("random letters",result);
}

//retturns a random letter
function getRandomLetter(){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    result = alphabet[getRandomInteger(0,25)];
    //console.log('random let',result);
    return result;
}

getRandomLetter();

// returns a random string;
function getRandomString(minLength, maxLength) {
    let result = '';
    for ( let i = 0; i < getRandomInteger(minLength,maxLength+1);i++){
        //console.log(result)
        result = result+getRandomLetter();
        //console.log(i)
    }
    //console.log('rand string',result)
    return result;
    
}
//console.log(getRandomString(10,20))

// sorts the inputed string alphabeticaly
function getSortedString(string) {
    return string.split('').sort().join('');
    }

/*
for (let i =0; i<5;i++){
    console.log(getSortedString(getRandomString(10,20))) 
}
*/

//console.log(getSortedString(getRandomString(10,20)))