```
function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
   const exPeso = ex * 1 
   const p1Peso = p1 * 2 
   const p2Peso = p2 * 3 
   
   const media = (exPeso + p1Peso + p2Peso) / 6
   
   
   
   if( media >= 9){
     return "A"
   } else if (media < 9 && media >= 7.5){
     return "B"
   } else if (media < 7.5 && media >= 6){
     return "C"
   } else {
     return "D"
   }
   
 }
 ```