if(localStorage.getItem('usuarioLogado') == null){
    alert('Você precisa fazer login!');
    window.location.replace('./login.html');
}

const spanUsuario = document.getElementById('spanUsuario');
const spanCpf = document.getElementById('spanCpf');
const botaoLogout = document.getElementById('botaoLogout');
botaoLogout.addEventListener('click', logout);

let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

spanUsuario.innerHTML = usuarioLogado.usuarioLog;
spanCpf.innerHTML = usuarioLogado.cpfLog;

function logout(){
    localStorage.removeItem('usuarioLogado');
    window.location.replace('http://127.0.0.1:5500/src/login.html');
}