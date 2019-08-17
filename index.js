document.getElementById("bt1").addEventListener("click",fnc)
document.getElementById("bt2").addEventListener("click",fnc1)

var state=window.localStorage;

function fnc()
{
    var out1=document.getElementById("id1").value;
    var out2=document.getElementById("id2").value;
    var out3=document.getElementById("id3").value;
    var out4=document.getElementById("id4").value;
    
    state.setItem("First name",out1);           
    state.setItem("last name",out2);
    state.setItem("mobile number or mail",out3);
    state.setItem("password",out4);
    alert("data stored successfully");
}
function fnc1()
{
    alert(state.getItem("First name"));
    alert(state.getItem("last name"));
    alert(state.getItem("mobile number or mail"));
    alert(state.getItem("password"));
}