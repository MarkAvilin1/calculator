function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}

function eql(exp){
    var exp = document.form.textview.value;
   
    if (exp){
        document.form.restxt.value = eval(exp);
    }
}

function clean(){
    document.form.textview.value = "";
    document.form.restxt.value = "";
    }

function back(){
  var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

