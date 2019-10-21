function testString(elId, text){
    resultDiv = document.getElementById(elId); 
    // console.log(resultDiv);
    resultDiv.innerHTML = text;
}

function clikcedButten(){
    input1 = document.getElementById("in1").value;
    // console.log(input1);
    testString("res1", input1);
}

function dialoguriFanjara(){
    // alert();
    conf = confirm("Gaiget???");
    console.log(conf);
    resultDiv = document.getElementById("res3"); 
    if(conf==true){
        resultDiv.innerHTML = "Gavigeee!!!!! :)))))";
    }else if(conf==false){
        resultDiv.innerHTML = "Ver Gavigeee!!!!! :(((";
    }
    prom = prompt();
    console.log(prom);
    resultDiv = document.getElementById("res4"); 
    if(prom!=null){
        resultDiv.innerHTML = prom;
    }else{
        resultDiv.innerHTML = "Monacemebi Ar aris!!!!";
    }
}