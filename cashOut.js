
document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const inputCash = getInputFieldById('input-cash-out-account');
        const cashPin = getInputFieldById('cash-out-pin-number');

        // account number check (string or number)
        if(isNaN(inputCash)){
            alert('Failed to cash number');
            return;
        }
        
        if (cashPin === 123){
            const accountBalance = getInputNewAddBalance('account-balance')

            // balance override check. 
            if (inputCash > accountBalance){
                alert('you do not have enough money to cash out')
                return;
            }

            const newBalance = accountBalance - inputCash;
            document.getElementById('account-balance').innerText = newBalance

            // add to transaction history alternative option: (check index transaction history)
            const div = document.createElement('div');
            div.classList.add('bg-green-400');
            div.classList.add('m-4');
            div.innerHTML = `
                <h5 class ="text-2xl font-bold"> Cash Out</h5>
                <P> ${inputCash} withdraw. New Balance ${newBalance} </p>
            `
            document.getElementById('Transaction-container').appendChild(div)

            
        } else{
            alert('wrong information')
            
        }

    });