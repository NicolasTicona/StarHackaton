let btnRegistro = document.getElementById('btnRegistro')

btnRegistro.addEventListener('click', (e) => {
    e.preventDefault()
    let registro = getDataRegistro()

    let email = registro.email
    let password = registro.password

    CrearUsuario(email, password)
})

function getDataRegistro(){
    let formData = document.forms[0]
    
   return {
        email: formData['R-email'].value,
        password: formData['R-password'].value
    }
}

function CrearUsuario(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
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