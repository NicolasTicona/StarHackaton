var providerBtn = document.getElementById('google')

providerBtn.addEventListener('click', (e) => {
    e.preventDefault()

    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)

})