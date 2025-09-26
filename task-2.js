let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === "kani" && password === "2007") {
    let B = confirm("Do you want to borrow a book?");

    if (B) {
        let c = prompt("Select a book category:\n1 = Fiction\n2 = Science\n3 = History");
        switch (c) {
            case "1":
                alert("You selected Fiction");
                break;
            case "2":
                alert("You selected Science");
                break;
            case "3":
                alert("You selected History");
                break;
            default:
                alert("Invalid category");
        }
    } else {
        alert("Maybe next time! Goodbye!");
    }
} else {

    alert("Invalid login!");
}