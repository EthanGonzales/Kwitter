//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            tweet: message,
            like: 0
      });
      document.getElementById("message").value="";

};

function logOut()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
};