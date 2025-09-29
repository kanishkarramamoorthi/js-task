let s=0;
let v=prompt("which letter is after l?\n a)j\nb)p\nc)m\nd)s")
switch(v){
    case "c":
        s++
        break;
}

let p=prompt("which letter is after r?\n a)j\nb)p\nc)m\nd)s")
switch(p){
    case "d":
    s++
    break;

}
let b=prompt("which is largest snake in world?\na)raja naakam\nb)python\nc)anaconda")
switch(b){
    case "c":
        s++
        break;
}
alert("score="+s+"/3")