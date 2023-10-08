function f4(){
    let inp=document.getElementById("inpbox");
    inp.value="";
}
function f8(){
    let inp=document.getElementById("inpbox");
    inp.value+=Math.PI;
}
function f6(){
    let exp=document.getElementById("inpbox");
    exp.value=1/eval(exp.value);
}
function f7(){
    let exp=document.getElementById("inpbox");
    exp.value=Math.pow(eval(exp.value),2);
}
function f3(){
    let exp=document.getElementById("inpbox");
    exp.value=exp.value.slice(0,-1);
}
function f1(x){
    let inp=document.getElementById("inpbox");
    inp.value+=x;
}
function f5(){
    let exp=document.getElementById("inpbox");
    let x=exp.value;
    if(x[0]=='-') exp.value=exp.value.slice(1,);
    else exp.value="-"+exp.value;
}
function f2(){
    let exp=document.getElementById("inpbox");
    let ans=eval(exp.value);
    exp.value=ans;
}