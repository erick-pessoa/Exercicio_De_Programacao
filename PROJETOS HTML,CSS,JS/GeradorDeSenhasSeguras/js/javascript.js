// Seleção de elementos
const generatePasswordButtom = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções

/*
{
"31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
"36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
"41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
"46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
"51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
"56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
"61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
"121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
"126": "~",    "127": ""
}
*/
// Cada caractere, corresponde a uma numeração


// Gerando letra pequenas.
const getLetterLowerCase = () => {
    //FromCharCode, você colocar um númer da tabela e ele vai mostra o caractere, exemplo: console.log(String.fromCharCode(65)) = "A"
    // Math.floor, faz com que o número não seja quebra,porque o math.random da um número quebra. exemplo do math.floor: console.log(Math.floor(5.95) = 5
    // Math.random() vai me gera o número aleatório.
    // O 26 é porque temos 26 letra no alfabeto e o mais 97, faz com o math.random, escolha um número de 97 a 123, porque 97+26 é igua a 123
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Letra Grandes.
const getLetterUppCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//Gerando numero.
const getNumber = () => {
    /* No gerador de senha também tem número. Aí a gente gera com math.random de 0 a 10
    e depois converte para string para o usuário ver a senha*/
    return Math.floor(Math.random() * 10).toString()
}

// Gerando simbolos.
const getSymbol = () => {

    const symbol = "[]{}()=<>,.;!@#$%¨&*!!/*-+"

    return symbol[Math.floor(Math.random() * symbol.length)]
}


const generatePassword = (getLetterLowerCase, getLetterUppCase, getNumber, getSymbol) => {

    let password = "";

    const passwordLenght = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUppCase,
        getNumber,
        getSymbol
    ]
    //Aqui vai gera no final 12 caracteres, porque está indo de 4 em 4
    for (i = 0; i < passwordLenght; i = i + generators.length) {

        // Vamos passar um valor aleatório para cada função.
        generators.forEach(() => {

            // Pra cada função dessa, a gente está gerando um valor aleatório.
            // Se coloca um () no final, porque ele é uma função com uma lista de funções.
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        });
    }

    password = password.slice(0, passwordLenght) /* Como estava 12 caracteres, eu deletei os dois ultimos para ficar 10. O passwordLenght é igual a 10, então vai de 0 a 10 */
   
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

//Evento
generatePasswordButtom.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase, getLetterUppCase,
        getNumber,
        getSymbol
    );
});