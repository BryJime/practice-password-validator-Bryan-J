const readlineSync = require(`readline-sync`);


let isValid = false;

while (!isValid){

let userPassword = readlineSync.question("Enter Password: ");

let isLongEnough = userPassword.length >= 8;
let hasUpperCase = false;
let hasNumber = false;



for (let char of userPassword){
    if (char === char.toUpperCase() && char !== char.toLowerCase()){
        hasUpperCase = true;
    }
}

for (let char of userPassword){
    if (!isNaN(char)){
        hasNumber = true;
    }
}

if (!isLongEnough){
    console.log("Password must be at least 8 characters long.")
}

if (!hasUpperCase){
    console.log("Password must contain at least one uppercase letter")
}

if (!hasNumber){
    console.log("Password must contain at least one number")
}

if (hasNumber && hasUpperCase && isLongEnough){
    console.log("Password meets all the requirements!")
    isValid = true;
}


}



