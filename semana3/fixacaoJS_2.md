```
function calculaPrecoTotal(quantidade) {
  let preco = 0
  if(quantidade < 12){
    preco = quantidade * 1.30
  } else {
    preco = quantidade * 1
  } 
   return preco
}
```