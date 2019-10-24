function div(m,n){
    res = document.getElementById("div1");
    //console.log(res);
    //console.log(m);
    //console.log(n);
    console.log(res);
    if(m<n){
        for(i=m; i<=n; i++){
            res.innerHTML += i + "</br>";
        }
    }
        
    else{
        for(i=n; i<=m; i--){
            res.innerHTML += i + "</br>";
        }

    }
}
div(1,9);