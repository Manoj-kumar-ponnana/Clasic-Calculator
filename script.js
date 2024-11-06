let exp='';
let x=document.getElementById('display')
function mainFun(temp){
    if(temp=='d'){
        exp=exp.slice(0,-1);
    }
    else{
        exp+=temp;
    }
    x.value=exp;
}
function allClear(){
    exp='';
    x.value=exp;
}
function result(){
    try{
        let res=eval(exp);
        x.value=res;
    }
    catch{
        x.value='ERROR!!';
    }
}
