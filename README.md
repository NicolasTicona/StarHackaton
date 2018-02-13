# Star Hackaton

## Desciption
It is a project that is looking for ideas for the Hackaton 2018 organized in Slack.

For this project we use only JavaScript and Firebase for the management of Sessions and the database in real time

### What do we use from firebase?

- Firebase Auth (Google Sign In)
- Firebase Data Base

## Use
I will explain step by step how you can see our project

#### Create a new Project in Firebase

#### Change Firebase Database rules by going to Firebase - Database - Rules and To .write .read properties, assign them the value of True

#### Now go to Firebase - Authentication and enable the access method by google

#### Firebase y Firebase-Tools

```
npm install -g firebase firebase-tools
```  

#### Start firebase

*Go to the project folder*

```
firebase init
```  

```
(*) Database
(*) Hosting
```

It will ask you to accept certain things, you give "Y" to everything and also to select your Firebase project

If everything goes well, you'll have 
.firebaserc
database.rules.json
firebase.json
public


#### Copy the Public folder of this repository to your project 

#### Go to your Firebase - Autentication - Config Web. And copy the code in your file index.html at the end of the body

It's like this

```
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
</script>
```

And for the other html files you only need the first script so you can use firebase
```
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
```

If everything goes well

Have a - firebase serve

#### That is All

## Creditos

- [Nicolas Ticona Valdivia](twitter.com/NicolasTicona)
- [Harvy Esteban Morales Leyton](https://twitter.com/HarvyML)