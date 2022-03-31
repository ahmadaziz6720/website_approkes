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

function getData(){
    while(true){
        firebase.database().ref('/test').once('value').then(function (snapshot) {
            var Distance = snapshot.val().Distance;
            var IR_HS = snapshot.val().IR_HS;
            var IR_OUT = snapshot.val().IR_OUT;
            var People = snapshot.val().People;
            var State = snapshot.val().State;
            var Temperature = snapshot.val().Temperature;
        
            document.getElementById("Distance").innerHTML = Distance;
            document.getElementById("IR_HS").innerHTML = IR_HS;
            document.getElementById("IR_OUT").innerHTML = IR_OUT;
            document.getElementById("People").innerHTML = People;
            document.getElementById("State").innerHTML = State;
            document.getElementById("Temperature").innerHTML = Temperature;
        });}
}