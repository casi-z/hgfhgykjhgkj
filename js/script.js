const d = document

let processButton = d.querySelector('.button-container__process-button')
let input = d.querySelector('.input')
let output = d.querySelector('.output')
let log = (n) => console.log(n)
//?Словарь
//Русские буквы
let rusAlphabet = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 
    'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
]
//Английские буквы
let engAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]
//Иероглифы похожие на русские буквы
let chinAlphabet = [
    '丹', //!А
    '五', //!Б
    '乃', //!В
    '厂', //!Г
    '亼', //!Д
    '仨', //!Е
    '庄', //!Ё
    '米', //!Ж
    '乡', //!З
    '仈', //!И
    '认', //!Й
    '片', //!К
    '几', //!Л
    '从', //!М
    '廾', //!Н
    '口', //!О
    '冂', //!П
    '尸', //!Р
    '匚', //!С
    '丅', //!Т
    '丫', //!У
    '中', //!Ф
    '乂', //!Х
    '凵', //!Ц
    '丩', //!Ч
    '山', //!Ш
    '山', //!Щ
    '乙', //!Ъ
    '辷', //!Ы
    'ь',  //!Ь
    '彐', //!Э
    '扣', //!Ю
    '牙', //!Я
]
//Иероглифы похожие на английские буквы
let chinAlphabetEng = [
    '丹', //!A
    '乃', //!B
    '匚', //!C
    '力', //!D
    '仨', //!E
    '下', //!F
    '马', //!G
    '卄', //!H
    '工', //!I
    '亅', //!J
    '长', //!K
    '乚', //!L
    '从', //!M
    '卜丨', //!N
    '囗', //!O
    '尸', //!P
    '贝', //!Q
    '尺', //!R
    '丂', //!S
    '丅', //!T
    '凵', //!U
    'V', //!V
    '山', //!W
    '乂', //!X
    '丫', //!Y
    '乙', //!Z
    
]
//?Транслитератор
processButton.addEventListener('click', function(){
    
    if (input.value) {
        let inputText = input.value.toLowerCase()
        for (let i = 0; i < rusAlphabet.length; i++) {
            inputText = inputText.replaceAll(rusAlphabet[i], chinAlphabet[i])

        }
        for (let i = 0; i < engAlphabet.length; i++) {
            inputText = inputText.replaceAll(engAlphabet[i], chinAlphabetEng[i])

        }
        output.textContent = inputText
    }else alert(`Вы ничего не ввели`)
});
//?Кнопка копирования
function copyButton(){
    const copyBtn = d.querySelector('.text-container__copy-btn')
    copyBtn.onclick = function() {
        output.focus();    
        output.select();    
        document.execCommand("copy");
    }
}