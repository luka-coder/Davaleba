function generateTable(numberOfTr,numberOfTd){
       st = document.getElementById("showtable");
       console.log(st);
       tb = "<table class='randomImg'>";

       for (j=0; j<numberOfTr; j++){
              tb += "<tr>";
       for (i=0; i<numberOfTd; i++){
              r = Math.ceil(Math.random()*4);
              //console.log(r);
              tb += "<td>";
              tb+= "<img src=img/"+r+".png>";
              tb += "</td>";
       }
       
       tb += "</tr>";
       }
       tb += "</table>";
       console.log(tb);
       st.innerHTML = tb;
}