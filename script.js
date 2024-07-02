const ticBtn  =document.getElementsByClassName("btn");
const dis = document.getElementById("btt");
const btn1 =document.getElementById("1");
const btn2 =document.getElementById("2");
const btn3 =document.getElementById("3");
const btn4 =document.getElementById("4");
const btn5 =document.getElementById("5");
const btn6 =document.getElementById("6");
const btn7 =document.getElementById("7");
const btn8 =document.getElementById("8");
const btn9 =document.getElementById("9");
const dis2 =document.getElementById("q");
const dialog = document.getElementById("end-dialog");
const restart = document.getElementById("restart");
const statement =document.getElementById("statement");
const ss =document.querySelectorAll("btn")
//const btnClass = document.getElementsByClassName('btn');
const opp = document.getElementById("turn");
const xarray = [];
const oarray = [];
const re1 = ["1", "2", "3"];
const re2 =["1", "4", "7"];
const re3 = ["4", "5", "6"];
const re4 = ["7", "8", "9"];
const re5 = ["2", "5", "8"];
const re6 = ["3", "6", "9"];
const re7 = ["1", "5", "9"];
const re8 = ["3", "5", "7"];
let turn  = 1
let reset = 1;


opp.textContent = "turn: X";


const test =(arr1, arr2)=>{
   return arr1.every((x)=>arr2.includes(x));
  
}
const finished=()=>{

        turn  != 1? statement.textContent = " X wins" : statement.textContent = " O wins" ;
        dialog.showModal(); 
        oarray=[];    
    
}
const clickBtn =(ex, ex1)=>{
    ex.disabled = true;
    ex.innerText = turn == 1? "x": "o";
    turn  = turn * (-1);
    turn == 1? xarray.push(ex1): oarray.push(ex1);
    //dis2.textContent = "";
    if(turn ==  1){
        test(re1, xarray)? finished():
        test(re2, xarray)? finished():
        test(re3, xarray)? finished():
        test(re4, xarray)? finished():
        test(re5, xarray)? finished():
        test(re6, xarray)? finished():
        test(re7, xarray)? finished():
        test(re8, xarray)? finished(): dis2.textContent = "next"
    }else{
        test(re1, oarray)? finished():
        test(re2, oarray)? finished():
        test(re3, oarray)? finished():
        test(re4, oarray)? finished():
        test(re5, oarray)? finished():
        test(re6, oarray)? finished():
        test(re7, oarray)? finished():
        test(re8, oarray)? finished(): dis2.textContent = "next"
    }
    turn==1? opp.textContent ="turn: X": opp.textContent ="turn: O"
   
}


btn1.addEventListener("click", ()=>{ 
    clickBtn(btn1, "1");
});

btn2.addEventListener("click", ()=>{
    clickBtn(btn2, "2");
});

btn3.addEventListener("click", ()=>{
    
    clickBtn(btn3, "3");
   
});
btn4.addEventListener("click", ()=>{
    
    clickBtn(btn4, "4");
   
});
btn5.addEventListener("click", ()=>{
    
    clickBtn(btn5, "5");
});
btn6.addEventListener("click", ()=>{
    
    clickBtn(btn6, "6");
   
});
btn7.addEventListener("click", ()=>{
    
    clickBtn(btn7, "7");
   
});
btn8.addEventListener("click", ()=>{
    
    clickBtn(btn8, "8");
   
});
btn9.addEventListener("click", ()=>{
    
    clickBtn(btn9, "9");
   
});
restart.addEventListener("click", ()=>{
    dialog.close();
    turn =1;
    btn1.innerText = '.';
    btn1.disabled = false;
    btn2.innerText = '.';
    btn3.textContent = '.';
    btn4.textContent = '.';
    btn5.textContent = '.';
    btn6.textContent = '.';
    btn7.textContent = '.';
    btn8.textContent = '.';
    btn9.textContent = '.';
    btn2.disabled = false;
    btn3.disabled = false;
    btn8.disabled = false;
    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn7.disabled = false;
    btn9.disabled = false;
    xarray.pop();
    xarray.pop();
    xarray.pop();
    xarray.pop();
    oarray.pop();
    oarray.pop();
    oarray.pop();
    oarray.pop();
    oarray.pop();
    
})

ticBtn.addEventListener("click", ()=>{
    ticBtn.innerText = "e";
    xarray.push("4");
    dis2.textContent = xarray;

});





 
