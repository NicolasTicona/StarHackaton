var btnCreate = document.getElementById('crear')
var data;

btnCreate.addEventListener('click', (e) => {
    e.preventDefault()
    data = FormData()
    PostHackaton(data)
})

function FormData(){
    let form = document.forms[0]
    let nombre_hackaton = form['nombre'].value
    let nombre_user = firebase.auth().currentUser.displayName
    let descripcion = form['descripcion'].value

    return {
        nombre: nombre_hackaton,
        admin: nombre_user,
        descripcion: descripcion,
        miembros: 0,
        grupos: 0
    }
}


function PostHackaton(data){
    firebase.database().ref().child('hackatones').push(data).key;
    alert('Todo salió bien, seras redireccionado al Home')
}
