var D=prompt("Enter distance")
D=Number(D)
let T=prompt("Select your  destination\na)car\nb)Train\nc)ship\nd)plane")
switch(T){
    case "a":
        farperkm=7;
        break;
    case "b":
        farperkm=5;
        break;
    case "c":
        farperkm=8;
        break;
    case "d":
        farperkm=10;
        break;
    }
let total=D*farperkm;
alert(`total fare:${total}`)