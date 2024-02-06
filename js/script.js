function mostrarPopup(mensagem, cor) {
    const popup = document.getElementById('popup');
    const popupMensagem = document.getElementById('popupMensagem');

    popupMensagem.innerText = mensagem;
    popupMensagem.style.color = cor;
    popup.style.display = 'flex';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

function cadastrar() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let cpf = document.getElementById('cpf').value.trim();

    telefone = telefone.replace(/[^0-9]/g, ''); 
    telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;

    
    cpf = cpf.replace(/[^0-9]/g, ''); 
    cpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;

    if (!validarCampoPreenchido(nome, 'Nome') ||
        !validarCampoPreenchido(email, 'E-mail') ||
        !validarCampoPreenchido(telefone, 'Telefone') ||
        !validarCampoPreenchido(cpf, 'CPF')) {
        return;
    }

    if (!validarFormatoEmail(email) || !validarFormatoTelefone(telefone) || !validarFormatoCPF(cpf)) {
        return;
    }

    mostrarPopup('Cadastro realizado com sucesso!', 'green');
}


function validarCampoPreenchido(valor, nomeCampo) {
    if (valor === '') {
        mostrarPopup(`${nomeCampo} é um campo obrigatório.`, 'red');
        return false;
    }
    return true;
}

function validarFormatoEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarPopup('Por favor, insira um e-mail válido.', 'red');
        return false;
    }
    return true;
}

function validarFormatoTelefone(telefone) {
    // Aceita diferentes formatos de telefone: (99) 9999-9999, (99) 99999-9999, 99999-9999, 9999-9999
    const telefoneRegex = /^(\(\d{2}\) ?\d{4,5}-?\d{4}|\d{4,5}-?\d{4})$/;
    if (!telefoneRegex.test(telefone)) {
        mostrarPopup('Por favor, insira um telefone válido.', 'red');
        return false;
    }
    return true;
}



function validarFormatoCPF(cpf) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        mostrarPopup('Por favor, insira um CPF válido.', 'red');
        return false;
    }
    return true;
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}
function logar() {
    // Apenas para simular o resultado do cadastro

    // Após autenticação bem-sucedida, redirecione para a página de notícia fictícia
    window.location.href = 'noticia.html';
}
