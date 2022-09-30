if(localStorage.getItem('usuarioLogado')){
    window.location.replace('./index.html');
}

const usuarioLog = document.getElementById('usuario');
const senhaLog = document.getElementById('senha');


let cadUsuario = document.getElementById('cadUsuario');
let cadCPF = document.getElementById('cadCPF');
let cadSenha = document.getElementById('cadSenha');


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

    window.location.replace('./login.html');
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

function login(){

    lerListaUsuarios();

    let verificacaoLogin = false;
    listaUsuarios.forEach((usuario) => {
        if((usuarioLog.value == usuario.usuario) && (senhaLog.value == usuario.senha)){
            let usuarioLogado = {
                usuarioLog : usuario.usuario,
                cpfLog : usuario.cpf,
                senhaLog : usuario.senha
            }

            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

            verificacaoLogin = true;

            window.location.replace('./index.html');
        }
    })

    if(verificacaoLogin){
        return;
    } else {
        alert('Usuário ou senha inválido!');
    }
}