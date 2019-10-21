function testNumbers1(){
    rs = document.getElementById("result1");
    rs.innerHTML = Number.MAX_VALUE;
    rs.innerHTML += "<br><br>";
    rs.innerHTML += Number.MIN_VALUE;
}

function testNumbers2(){
    return Math.floor(Math.random()*11);
}

function testNumbers3(a, b){
    rs = document.getElementById("result3");
    rand = Math.floor(Math.random()*(b-a+1))+a;
    rs.innerHTML = rand;
}

function testNumbers4(a, b, c){
    return Math.max(a, b, c) - Math.min(a, b, c); 
}

