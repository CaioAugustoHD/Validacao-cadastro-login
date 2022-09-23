let cadUsuario = document.getElementById('cadUsuario');
let cadCPF = document.getElementById('cadCPF');
let cadSenha = document.getElementById('cadSenha');
let botaoCad = document.getElementById('botaoCad');

botaoCad.addEventListener('click', cadastrar);

let listaUsuarios = [];
function lerListaUsuarios(){
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
}

class novoUsuario {
    constructor(usuario, cpf, senha){
        this.usuario = usuario;
        this.cpf = cpf;
        this.senha = senha;
    }
}

function cadastrar(){
    let usuarioCadastrado = new novoUsuario (cadUsuario.value, cadCPF.value, cadSenha.value);

    lerListaUsuarios();
    listaUsuarios.push(usuarioCadastrado);

    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
}
