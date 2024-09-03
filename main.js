document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const message = document.getElementById('message').value;


    // Verifica se todos os campos estão preenchidos
    if (name && email && whatsapp && message) {
        alert('Sua mensagem foi enviada com sucesso!');
        // Aqui você poderia implementar o envio da mensagem, por exemplo, via API ou redirecionamento.
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    // Limpa todos os campos do formulário
    document.getElementById('contactForm').reset();
});
