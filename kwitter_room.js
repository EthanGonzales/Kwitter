
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB7vRyVdJISela-ptJAOXTKR0nta15BcVw",
      authDomain: "kwitter-database-70eb4.firebaseapp.com",
      databaseURL: "https://kwitter-database-70eb4-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-70eb4",
      storageBucket: "kwitter-database-70eb4.appspot.com",
      messagingSenderId: "320176275580",
      appId: "1:320176275580:web:8f53948007b9ce349509f9"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
