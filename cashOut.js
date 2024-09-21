
document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const inputCash = getInputFieldById('input-cash-out-account');
        const cashPin = getInputFieldById('cash-out-pin-number');
        
        if (cashPin === 123){
            const accountBalance = getInputNewAddBalance('account-balance')
            const newBalance = accountBalance - inputCash;
            document.getElementById('account-balance').innerText = newBalance


            // add to transaction history.
            const p = document.createElement('p')
            p.innerText = `Minus: ${inputCash} Tk. New Balance: ${newBalance}`;
            document.getElementById('Transaction-container').appendChild(p)

            
        } else{
            alert('wrong information')
            
        }

    });