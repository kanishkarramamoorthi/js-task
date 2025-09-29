let a=prompt("enter the monthly income",'0');
a=Number(a);
r=prompt("enter the rent",'0');
r=Number(r);
g=prompt("enter the Groceries",'0');
g=Number(g);
t=prompt("enter the Transport",'0');
t=Number(t);
let totalspend=r+g+t;
let v=a-totalspend;
let p=(a/totalspend)*100;
alert(`Total Expenses:${totalspend}\nRemaining Balance:${v}\nPercentage Spent:${p}%`);
if(a<totalspend){
    alert("Message: You are overspending.")
}
else{
    alert("Message: You are within budget.");
}
