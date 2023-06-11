function getfun(){
document.querySelector("form").addEventListener("submit",myfun);
let count=0;
let sum=0;
let sub=0;
function myfun(event){
      event.preventDefault();
    let entername=document.querySelector("#empname").value;
    let enterrole=document.querySelector("#jobrole").value;
    let enterdepart=document.querySelector("#depart").value;
    let entersal=document.querySelector("#salary").value;
    let entermail=document.querySelector("#email").value;
    let enterexp=document.querySelector("#exp").value;
    if(entername==""){
        alert("please enter the name of an Employee");
    }
    else if(enterrole==""){alert("please specify the role")}
    else if(enterdepart==""){alert("please specify the Department")}
    else if(entersal==""){alert("please specify the Salary")}
    else if(entermail==""){alert("please enter the valid Email")}
    else if(enterexp==""){alert("please enter the experience")}
    else{
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=entername;
    let td2=document.createElement("td");
    td2.innerText=enterrole;
    let td3=document.createElement("td");
    td3.innerText=enterdepart;
    let td4=document.createElement("td");
    td4.innerText=entersal;
    sum=sum-Number(entersal);
    document.querySelector("#totalsal").innerText=sum;
    let td5=document.createElement("td");
    td5.innerText=entermail;
    let td6=document.createElement("td");
    td5.style.textTransform="lowerCase";
    td6.innerText=enterexp;
    let td7=document.createElement("td");
    if(enterexp>5){
        td7.innerText="Senior";
    }else if(enterexp==""||enterexp==0){
        td7.innerText=="Intern"
    }else{
        td7.innerText="Junior";
    }
    let td8=document.createElement("td");
    td8.innerText="Delete";
    td8.style.backgroundColor="red";
    td8.style.color="white";
    td8.style.cursor="pointer";
    td8.style.fontWeight="bold";
    td8.addEventListener("click",del);
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);
    count++;
    document.querySelector("#totalemp").innerText=count;
    }
}
function del(event){
event.target.parentNode.remove();
count--;
document.querySelector("#totalemp").innerText=count;
}
}
getfun();