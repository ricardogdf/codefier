const html = document.querySelector("html");
const textArea = document.querySelector(".js-textarea");
const buttonEncrypt = document.querySelector(".js-encrypt");
const buttonDescrypt = document.querySelector(".js-descrypt");
const display = document.querySelector(".js-display-text");
const buttonCopy = document.querySelector(".js-btn-copy");

textArea.focus();

function pasteElement() {
    display.textContent = "";
    display.classList.remove("is-show-text");
}

function displayText(text) {
    display.classList.add("is-show-text");
    display.textContent = text;
}

function checkLowerCase() {

    const regex = /^([a-z\s])+$/;
    const lowerCase = regex.test(textArea.value);

    if(lowerCase) {
        encryptText();
    } else {
        alert("Por favor, digite apenas letras minúsculas e sem acento.");
    }
}

function encrypt(match) {

    const mutateKeys = {
        0: '@.-LkV!@',
        1: '~AnJ~',
        2: '.224.',
        3: '474',
        4: '-8L-',
        5: 'KhVK',
        6: 'v0Lv',
        7: 'mlWm',
        8: 'TmvT',
        9: 'pqlp',
        10: '!04!',
        11: 'eie',
        12: ':ht:',
        13: 'lsl',
        14: 'omno',
        15: 'quvq',
        16: '0020',
        17: '_115_',
        18: 'u98u',
        19: '7-N7',
        20: '}Kc}',
        21: '9nk9',
        22: ']tca]',
        23: 'çaaç',
        24: '8klvas8',
        25: '&kj&',
        26: '%bbae%',
        27: '#.kl#',
    }

    const keysOfEncrypt = {
        "a": mutateKeys[0],
        "b": mutateKeys[1],
        "c": mutateKeys[2],
        "ç": mutateKeys[3],
        "d": mutateKeys[4],
        "e": mutateKeys[5],
        "f": mutateKeys[6],
        "g": mutateKeys[7],
        "h": mutateKeys[8],
        "i": mutateKeys[9],
        "j": mutateKeys[10],
        "k": mutateKeys[11],
        "l": mutateKeys[12],
        "m": mutateKeys[13],
        "n": mutateKeys[14],
        "o": mutateKeys[15],
        "p": mutateKeys[16],
        "q": mutateKeys[17],
        "r": mutateKeys[18],
        "s": mutateKeys[19],
        "t": mutateKeys[20],
        "u": mutateKeys[21],
        "v": mutateKeys[22],
        "w": mutateKeys[23],
        "x": mutateKeys[24],
        "y": mutateKeys[25],
        "z": mutateKeys[26],
        " ": mutateKeys[27],
    }

    return keysOfEncrypt[match];
}

function scrollPage(ycoord) {
    window.scroll({top: ycoord, behavior: "smooth"});
}

function encryptText() {
    const text = textArea.value;
    if(text != "") {
        const encrypted = text.replace(/[a-z]/g, encrypt);
        displayText(encrypted);
        scrollPage(html.scrollHeight);
    }

}

function descrypt(match) {
    const mutateKeys = {
         0: "a",        
         1: "b",
         2: "c",
         3: "ç",
         4: "d",
         5: "e",
         6: "f",
         7: "g",
         8: "h",
         9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z",
        27: " ",
    }

    const  keysOfDescrypt = {
        '@.-LkV!@': mutateKeys[0],
        '~AnJ~': mutateKeys[1],
        '.224.': mutateKeys[2],
        '474': mutateKeys[3],
        '-8L-': mutateKeys[4],
        'KhVK': mutateKeys[5],
        'v0Lv': mutateKeys[6],
        'mlWm': mutateKeys[7],
        'TmvT': mutateKeys[8],
        'pqlp': mutateKeys[9],
        '!04!': mutateKeys[10],
        'eie': mutateKeys[11],
        ':ht:': mutateKeys[12],
        'lsl': mutateKeys[13],
        'omno': mutateKeys[14],
        'quvq': mutateKeys[15],
        '0020': mutateKeys[16],
        '_115_': mutateKeys[17],
        'u98u': mutateKeys[18],
        '7-N7': mutateKeys[19],
        '}Kc}': mutateKeys[20],
        '9nk9': mutateKeys[21],
        ']tca]': mutateKeys[22],
        'çaaç': mutateKeys[23],
        '8klvas8': mutateKeys[24],
        '&kj&': mutateKeys[25],
        '%bbae%': mutateKeys[26],
        '#.kl#': mutateKeys[27],
    }    
    return keysOfDescrypt[match];
}

function descryptText() {
    const text = textArea.value;

    if(text != "") {

        const valuesToReplace = {
            0: '@.-LkV!@',
            1: '~AnJ~',
            2: '.224.',
            3: '474',
            4: '-8L-',
            5: 'KhVK',
            6: 'v0Lv',
            7: 'mlWm',
            8: 'TmvT',
            9: 'pqlp',
            10: '!04!',
            11: 'eie',
            12: ':ht:',
            13: 'lsl',
            14: 'omno',
            15: 'quvq',
            16: '0020',
            17: '_115_',
            18: 'u98u',
            19: '7-N7',
            20: '}Kc}',
            21: '9nk9',
            22: ']tca]',
            23: 'çaaç',
            24: '8klvas8',
            25: '&kj&',
            26: '%bbae%',
            27: '#.kl#',
        }
        
        let stringUnica = "";

        // Percorrer as propriedades do objeto e concatenar as strings
        for (let key in valuesToReplace) {
            if (valuesToReplace.hasOwnProperty(key)) {
                stringUnica += valuesToReplace[key] + "|";
            }
        }

        stringUnica = stringUnica.trim()

        const stringRegExp = new RegExp(stringUnica.slice(0, -1), "g");

        const descrypted = text.replace(stringRegExp, descrypt); 
        displayText(descrypted);
        scrollPage(html.scrollHeight);
    }
}

function copyText() {
    if(display.textContent.length) {
        navigator.clipboard.writeText(display.textContent).then(() => {
            alert("Texto cópiado para a área de transferência");
            pasteElement();
            pasteText();
            scrollPage(html.scrollHeight - html.scrollHeight);
        })
    
    }

}

function pasteText() {
    
    try {
        textArea.focus();
        textArea.value = "";
        navigator.clipboard.readText().then((clipText) => {
            textArea.value = clipText;
        })

    } catch {
        
        alert("Erro: seu navegador não é compativel com a função de colar ou você não deu as permissões necessárias, use o atalho CRTL+V para colocar o texto cópiado");
    }
                  

}

buttonEncrypt.addEventListener("click", checkLowerCase);
buttonDescrypt.addEventListener("click", descryptText);
buttonCopy.addEventListener("click", copyText);