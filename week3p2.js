const sentence = document.getElementById("sentence");
const word = document.getElementById("word");
const result = document.getElementById("result");
const btnCheck = document.getElementById("btnCheck");

btnCheck.addEventListener("click", function () {
    const searchSentence = sentence.value.trim();
    const searchWord = word.value.trim();

    if (!searchSentence || !searchWord) {
        result.innerHTML = "Please enter both values.";
        result.style.color = "orange";
        return;
    }

    if (searchSentence.toLowerCase().includes(searchWord.toLowerCase())) {
        result.innerHTML = "Found";
        result.style.color = "green";
    } else {
        result.innerHTML = "Not Found";
        result.style.color = "red";
    }
});


let txtInput = document.querySelector('#txtInput');
let btnReplaceAll = document.querySelector('#btnReplaceAll');
let txtOutput = document.querySelector('#txtOutput');

btnReplaceAll.addEventListener('click',function(){
    let str = txtInput.value;
    let result = str.replaceAll(" ","");
    
    if (result) {
        txtOutput.innerText = result;
        txtOutput.classList.remove('placeholder');
        txtOutput.style.color = "#007bff";
    } else {
        txtOutput.innerText = "Input is empty or contained only spaces.";
        txtOutput.classList.add('placeholder');
        txtOutput.style.color = "#999";
    }

});
