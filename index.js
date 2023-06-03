//document.getElementById("bt").addEventListener("click" , getbmivalue);

function  getbmivalue(){
    let W  = document.getElementById("weight").value;
    let H  = document.getElementById("height").value;

    H = H*12;
    H = H*0.025;
 
    let newbmi = W/(H*H);
    newbmi = Math.round(newbmi);
    console.log(newbmi);
    document.getElementById("bmi").value = newbmi;
 }