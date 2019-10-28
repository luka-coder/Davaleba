function printNumbers(a, b){
    N = document.getElementById("div1");
    N.innerHTML += Math.floor(Math.random()*(b-a+1)+a);
}