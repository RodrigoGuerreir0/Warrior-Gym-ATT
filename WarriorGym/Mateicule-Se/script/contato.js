const formulario = document.getElementById('meuFormulario') // Variavel que não pode ser alterada
// var formularioVar = document.getElementById('meuFormulario') // Variavel que pode ser alterada
// let formularioLet = document.getElementById('meuFormulario') // Variavel temporaria


// event click -> click esquerdo do mouse
//event contextmenu -> click direito do mouse
formulario.addEventListener('submit', function(event) {
    event.preventDefault() //desligando o evento padrão do formulario

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value 
    var cpf = document.getElementById('cpf').value
    var telefone = document.getElementById('telefone').value
    var duvida = document.getElementById('duvida').value
    var arquivo = document.getElementById('arquivo').value
    
    window.location.href = 'envio.html' +
    '?nome='+encodeURIComponent(nome) +
    '&mail='+encodeURIComponent(email) +
    '&CPF='+encodeURIComponent(cpf) +
    '&Telefone='+encodeURIComponent(telefone) +
    '&Duvida='+encodeURIComponent(duvida) +
    '&Arquivo='+encodeURIComponent(arquivo)

    alert(nome+' | '+ email +' | '+ cpf + ' | ' + telefone + ' \n Aguarde 5 segundos paraser cadastro ser realizado \n'+ duvida + arquivo+ "\n Sua duvida será respondida em breve no seu E-mail")
})