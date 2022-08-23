let elemArr = localStorage.getItem("element") ? JSON.parse(localStorage.getItem("element")) : [];

function insert(num)
{
    document.form.textview.value=document.form.textview.value+num;
}
  
function equals()
{
    var txt = document.form.textview.value;
    if(txt)
    {
        document.form.textview.value=eval(txt);
        var exp = eval(txt);
        console.log("txt "+txt+ " exp "+exp);

        var str = txt+" = "+exp
        //var arr = [];
        elemArr.push(str);
        localStorage.setItem("element",JSON.stringify(elemArr));
    }
    else
    {
      document.form.textview.value='ERROR'
    }
}
  
function clean()
{
    document.form.textview.value="";
}
  
function back()
{
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
}
function saveToStorage()
{
    document.getElementById("view").value = localStorage.getItem("element");
}