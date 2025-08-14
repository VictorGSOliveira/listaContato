/*
    1.   
*/

// Selecionando os elementos
const nomeInput = document.getElementById('nomeCadastro');
const numeroInput = document.getElementById('numeroCadastro');
const btnRegistro = document.getElementById('registro');
const listaContatos = document.querySelector('.lista');

btnRegistro.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    const numero = numeroInput.value.trim();

    // Verifica se os campos estão preenchidos
    if (nome === '' || numero === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Remove caracteres não numéricos para gerar link do WhatsApp
    const numeroWhatsApp = numero.replace(/\D/g, '');

    // Cria o elemento "contato"
    const contatoDiv = document.createElement('div');
    contatoDiv.classList.add('contato');

    contatoDiv.innerHTML = `
        <div class="img">
            <img src="./images/icone homem.png" alt="">
        </div>
        <div class="infoContato">
            <div class="tituloInfoContato" style="display:flex; justify-content: space-between; width: 100%;">
                <div class="tituloInfoContato2">
                    <p>Contato: ${nome}</p>
                </div>
                <button class="btnExcluir">X</button>
            </div>
            <div class="celularInfoContato" style="display:flex; gap: 5px;">
                <p>Celular:</p><p>${numero}</p>
            </div>
            <button class="btnWhats" type="button" style="color:white; border:none; padding:6px 10px; cursor:pointer;">
                Entrar em contato
            </button>
        </div>
    `;

    // Evento de exclusão
    contatoDiv.querySelector('.btnExcluir').addEventListener('click', () => {
        contatoDiv.remove();
    });

    // Evento para abrir o WhatsApp
    contatoDiv.querySelector('.btnWhats').addEventListener('click', () => {
        window.open(`https://wa.me/${numeroWhatsApp}`, '_blank');
    });

    // Adiciona o contato à lista
    listaContatos.appendChild(contatoDiv);

    // Limpa os campos
    nomeInput.value = '';
    numeroInput.value = '';
});