function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}



function getInputNewAddBalance(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}



function showSectionById(id){
    // hide all the section:
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section-form').classList.add('hidden');
    
    // show the section with the provide parameter.
    document.getElementById(id).classList.remove('hidden')

}