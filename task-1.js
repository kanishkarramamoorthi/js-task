let name=prompt("your name?","0");
let age=prompt("your age?","0");
age=Number(age);
if (age>=18){
    alert(`Hello ${name},you are eligible to vote`);
}
else{
    alert(`Sorry ${name},you are not eligible to vote`);
}
let t= confirm("Do you want to check again?");
        if (t) {
            alert("repeat");
        
        }
        else{
            alert("Goodbye!");
        }
