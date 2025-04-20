function getInputValue(id){
    const inputValue = document.getElementById(id).value.trim();
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}   

function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSection(id){
    // Hide the All Sections
    document.getElementById('addmoney-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // Show the Specifiq Section by Provided ID
    document.getElementById(id).classList.remove('hidden');
}

