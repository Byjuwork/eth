
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD5LeAPaNsd87UjGMknU6x2FKuNZ-7f3qw",
      authDomain: "kwiiter-a2e56.firebaseapp.com",
      projectId: "kwiiter-a2e56",
      storageBucket: "kwiiter-a2e56.appspot.com",
      messagingSenderId: "238802958880",
      appId: "1:238802958880:web:c7e1e9617423e371799a45"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
