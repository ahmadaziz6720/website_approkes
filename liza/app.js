function getData() {

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
    })
}