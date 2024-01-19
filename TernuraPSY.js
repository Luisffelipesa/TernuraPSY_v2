document.getElementById('botao').addEventListener('click', async function (event) {
    event.preventDefault();

    // Outros campos do formulário
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const foto = document.getElementById('foto').files[0];
    const crp = document.getElementById('crp').value;

    // Função para validar o formato do CRP
    function validarCRP(crp) {
        // Expressão regular para validar o formato do CRP
        const regexCRP = /^CRP\d{2}\/\d{5}$/;
        return regexCRP.test(crp);
    }

    // Verifica se o CRP é válido
    if (!validarCRP(crp)) {
        alert('Por favor, insira um número de CRP válido.');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const userId = userCredential.user.uid;
        let fotoURL = '';

        // Restante do código para fazer upload da foto e salvar no Firestore
        // ...

        alert('Cadastro realizado com sucesso!');
    } catch (error) {
        console.error('Erro no cadastro:', error);
        alert('Erro no cadastro:' + error.message);
    }
});

