if(localStorage.getItem('usuarioLogado') == null){
    alert('Você precisa fazer login!');
    window.location.replace('http://127.0.0.1:5500/src/login.html');
}

const spanUsuario = document.getElementById('spanUsuario');
const spanCpf = document.getElementById('spanCpf');


