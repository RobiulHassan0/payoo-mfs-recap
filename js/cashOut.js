document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputValue('input-cashout');
        const cashOutPin = getInputValue('cashout-pin');
        const balance = getTextValue('account-balance');
        console.log(cashOut, cashOutPin, balance)

        if(isNaN(cashOut)){
            alert('Please Type the Amount Number instead Text!');
            return;
        }

        if(cashOutPin === 1234){
            if(cashOut > balance){
                alert("You don't have enough money! Please add more money to this transaction amount.");
                return;
            }
            
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;

            const div = document.createElement('div');
            div.innerHTML = `
                <h6 class='bg-orange-600 text-white'>Cash Out</h6>
                <p class="text-sm">${cashOut} Tk withdrawn! New balance ${newBalance} Tk.</p>
            `
            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            alert('Your Pin is Wrong!')
        }

    })