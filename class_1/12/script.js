function div(n){
    res = document.getElementById("div1");
    console.log(res);
    console.log(n);
    
        for(i=1;i<=n;i++){
            res.innerHTML +=i + "</br>";
        }
}
div(15)