let cadUsuario = document.getElementById('cadUsuario');
let cadCPF = document.getElementById('cadCPF');
let cadSenha = document.getElementById('cadSenha');
let botao = document.querySelector('button');

botao.addEventListener('click', cadastrar);

let listaUsuarios = [];

class novoUsuario {
    constructor(usuario, cpf, senha){
        this.usuario = usuario;
        this.cpf = cpf;
        this.senha = senha;
    }
}

function cadastrar(){
    let usuarioCadastrado = new novoUsuario (cadUsuario.value, cadCPF.value, cadSenha.value);

    listaUsuarios.push(usuarioCadastrado);
    console.log(usuarioCadastrado);

    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
}
