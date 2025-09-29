let CPIN = "1234";
let b = 1000;
let PIN = prompt("Enter your PIN:");
if (PIN == CPIN) {
    let a = prompt("select the option:\n1. Withdraw\n2. Deposit\n3. Check Balance")
    switch (a) {
        case "1": {
            let amount = prompt("Enter amount to withdraw:");
            if (amount > 0 && amount <= b) {
                b -= amount;
                alert("balance: " + b);
            } else {
                alert("Invalid amount");
            }
            break;
        } case "2": {
            let amount = prompt("Enter amount to deposit:");
            if (amount > 0) {
                b+= amount;
                alert(" balance: " + b);
            } else {
                alert("Invalid deposit amount.");
                
            }
break;
        } case "3": {

            alert("Your current balance is: " + b);

        }
        break;
         default: {
            alert("Invalid selection.");
        }
    }}
        
else{
                alert("Incorrect PIN.");
}
        
