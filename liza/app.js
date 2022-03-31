// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABTMahcC3vLi7MvSOj04RqMBb1p-rFj-8",
    authDomain: "approkes-89937.firebaseapp.com",
    databaseURL: "https://approkes-89937-default-rtdb.firebaseio.com",
    projectId: "approkes-89937",
    storageBucket: "approkes-89937.appspot.com",
    messagingSenderId: "1053571501098",
    appId: "1:1053571501098:web:973d9d46b2d659174dc753"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    while (true) {
        firebase.database().ref('/test').once('value').then(function (snapshot) {
            var float = snapshot.val().float;
            var int = snapshot.val().int;
            var string = snapshot.val().string;
        
            document.getElementById("float").innerHTML = float;
            document.getElementById("int").innerHTML = int;
            document.getElementById("string").innerHTML = string;
        })
    }   
    
}