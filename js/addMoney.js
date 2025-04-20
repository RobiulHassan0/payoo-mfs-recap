
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = getInputValue('input-add-money');
        const pinNumber = getInputValue('input-pin')
        console.log(pinNumber, addMoney)
        const balance = getTextValue('account-balance');

        if(isNaN(addMoney)){
            alert('Please Type the Amount Number instead Text!')
            return;
        }

        if(pinNumber === 1234){
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance

            // show transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance ${newBalance} Tk!`;
            p.className = "bg-accent text-center text-sm text-black py-1 px-1 rounded mb-1 w-full";

            // should be a common Function
            document.getElementById('transaction-container').appendChild(p)
        }
        else(
            alert('Your Info enterd is wrong!')
        )

    })