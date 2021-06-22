// let cot =document.getElementById('cot').value ;
//     let dong = document.getElementById('dong').value ;
//     var sOut="<table border=2>";
// tr: hàng td:ô
function created()
{
    if(col.value.length > 0 && row.value.length > 0)
    {
        var cot= parseInt(col.value);
        var don= parseInt(row.value);
       
        var vung= document.getElementById("show");
        var bang = document.createElement("table");
        
       
       
        for(var i=1; i<= don; i++)
        {
            var dong= document.createElement("tr");
            for(var j=1; j<=cot;j++)
            if(j<=i){
                var cott= document.createElement("td");
                var text=document.createTextNode(" "+ j);
                cott.appendChild(text);
                dong.appendChild(cott);
                

            }
            else{
                var cott= document.createElement("td");
                var text=document.createTextNode(" ");
                cott.appendChild(text);
                dong.appendChild(cott);

            }
           
            bang.appendChild(dong);
        }
        vung.appendChild(bang);
       
    }
}





