let btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    let login = getDataLogin()

    let email = login.email
    let password = login.password
    
    Login(email, password)
})


function getDataLogin(){
    let formData = document.forms[0]
    
   return {
        email: formData['L-email'].value,
        password: formData['L-password'].value
    }
}

function Login(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (res) => {
        alert('Bienvenido')
        setTimeout(()=>{
            window.location.href = '../index.html'
        }, 1000)
    })
    .catch( (err) => {
        console.log(err.code)
        console.log(err.message )
    } )
}

function SesionActiva(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            alert('Ha iniciado Sesion')
        } else {
            alert('Ha cerrado Sesion')
        }
      });    
}

