```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) { 
  
  const valorPorCarro = valorTotalVendas / qtdeCarrosVendidos 
  const salarioFixo = 2000
  const carrosVendidos = qtdeCarrosVendidos * 100
  const comissao = valorTotalVendas * 0.05 + carrosVendidos // Escreva seu código aqui
  const salarioTotal = salarioFixo + comissao
  return salarioTotal
  
} 
```
