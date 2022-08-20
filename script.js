function calcularMedia() {
  let nota1 = parseFloat(document.getElementById('nota1').value)
  let nota2 = parseFloat(document.getElementById('nota2').value)
  let nota3 = parseFloat(document.getElementById('nota3').value)
  
  let media = ((nota1 + nota2 + nota3) / 3).toFixed(1)
  
  let textoMedia = document.getElementById('resultadoMedia')
  
  if(media >= 7) {
    textoMedia.innerHTML = 'Média: ' + media + ' - Aprovado(a).'
    textoMedia.style.color = '#00008B'
  } else if (media >= 6 && media < 7) {
    textoMedia.innerHTML = 'Média: ' + media + ' - Recuperação.'
    textoMedia.style.color = '#FF8C00'
  } else {
    textoMedia.innerHTML = 'Média: ' + media + ' - Reprovado(a).'
    textoMedia.style.color = '#B22222'
   
  }
}

