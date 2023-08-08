const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (expr.indexOf('*') != -1) {
        let arr = expr.split('**********');
        let arr1 = [];
        let morse = [];
        let morse1 = '';
        for (let i=0; i<arr.length; i++) {
            arr1[i] = arr[i].split('')
        }
        for (let i=0; i<arr1.length; i++) {
            for (let j=0; j<arr1[i].length; j++) {
                arr1[i][j] = Number(arr1[i][j]);
            }
        }
        for (let i=0; i<arr1.length; i++) {
            morse1 = '';
            for (let j=0; j<arr1[i].length+1; j++) {
                if (j % 2 == 0) {
                    if (arr1[i][j] == 1 && arr1[i][j+1] == 0) {
                        morse1 += '.'
                    }
                    if (arr1[i][j] == 1 && arr1[i][j+1] == 1) {
                        morse1 += '-'
                    }
                    if (j % 10 == 0 && arr1[i][0] == 0 && j != 0) {
                        morse.push(morse1);
                        morse1 = '';
                    }
                    if (arr1[i][0] != 0 ) {
                        if (j == 8 || j == 18) {
                            morse.push(morse1);
                            morse1 = ''
                        }
                    }
                }
            }
            if (i<arr1.length - 1) {
                morse.push(' ');
            }
        }
        let word = '';
        for (let i = 0; i<morse.length; i++) {
            if (MORSE_TABLE[morse[i]] == undefined) {
                word += ' '
            } else {
                word += MORSE_TABLE[morse[i]]
            }
        }
        return word
    }
    if (expr.indexOf('*') == -1) {
        let arr = expr.split('');
        let arr1 = [];
        let morse = [];
        let morse1 = '';
        for (let i=0; i<arr.length; i++) {
            arr[i] = Number(arr[i])
        }
        let size = 10;
        for (let i = 0; i <Math.ceil(arr.length/size); i++){
            arr1[i] = arr.slice((i*size), (i*size) + size);
        }
        for(let i=0; i<arr1.length; i++) {
            for(let j=0; j<arr1[i].length; j++) {
                if (j % 2 == 0) {
                    if (arr1[i][j] == 1 && arr1[i][j + 1] == 0) {
                        morse1 += '.'
                    }
                    if (arr1[i][j] == 1 && arr1[i][j + 1] == 1) {
                        morse1 += '-'
                    }
                }
            }
            morse.push(morse1);
            morse1 = '';
        }
        let word = '';
        for (let i = 0; i<morse.length; i++) {
            word += MORSE_TABLE[morse[i]]
        }
        return word
    }
}

module.exports = {
    decode
}