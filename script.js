

function log() {
    var email = document.getElementById('ema').value
    var senha = document.getElementById('psw').value
    var res = document.getElementById('res')

if (email === 'autista@gmail.com' && senha === "123456") {
    window.location.href = "logado.html"
    } else {
        res.innerHTML = 'Email ou senha incorretos'
    }
}