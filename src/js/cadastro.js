let cadUsuario = document.getElementById('cadUsuario');
let cadCPF = document.getElementById('cadCPF');
let cadSenha = document.getElementById('cadSenha');
let botaoCad = document.getElementById('botaoCad');

botaoCad.addEventListener('click', validacao);

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

    listaUsuarios.push(usuarioCadastrado);

    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
}

function validacao(){

    lerListaUsuarios();


    let usuarioValido = true;
    if(cadUsuario.value.length < 3){
        alert('O nome de usuário deve possuir no mínimo 3 caracteres!')
        usuarioValido = false;
    } else {
        listaUsuarios.forEach((usuario) => {
            if(cadUsuario.value == usuario.usuario){
                alert ('Esse nome de usuário já existe!');
                usuarioValido = false;
            }    
        })
    }

    let cpfValido = true;
    if(cadCPF.value.length != 11){
        alert('CPF inválido!\nO CPF deve possuir 11 dígitos!');
        cpfValido = false;
    } else {
        listaUsuarios.forEach((usuario) => {
            if(cadCPF.value == usuario.cpf){
                alert('Esse CPF já está cadastrado!');
                cpfValido = false;
            }
        })
    }

    let senhaValida = true;
    if(cadSenha.value.length < 5){
        alert('Sua senha deve possuir no mínimo 5 caracteres!');
        senhaValida = false;
    }

    if((usuarioValido) && (cpfValido) && (senhaValida)){
        cadastrar();
    }
}