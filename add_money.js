document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const addedMoney = getInputFieldById('add-money-account');
        const pinNumber = getInputFieldById('add-money-pin-number');

        // number check there.
        if (isNaN(addedMoney)){
            alert('Failed to add money')
            return;
        }


        if (pinNumber === 123){
            const accountBalance = getInputNewAddBalance('account-balance')
            const newBalance = addedMoney + accountBalance;
            document.getElementById('account-balance').innerText = newBalance


            // add to transaction history.
                const p = document.createElement('p')
                p.innerText = `Added: ${addedMoney} Tk. New Balance: ${newBalance}`;
                document.getElementById('Transaction-container').appendChild(p)

                
        } else{
            alert('wrong information')
            
        }

    });