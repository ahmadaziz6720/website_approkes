munculkan("profil");
munculkan("form");
munculkan("edit");
munculkan("notAvailable");

function munculkan(id){
    var elem = document.getElementById(id);
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

function hilangkan(id){
    var elem = document.getElementById(id);
    if (elem.style.display === "none") {
        elem.style.display = "block";
    }
}

function kirim() {
    munculkan("edit");
    munculkan("form");
    munculkan("profil");

    var nama = document.getElementById("nama").value;
    var role = document.getElementById("role").value;
    var availability = document.getElementById("availability").value;
    var usia = document.getElementById("usia").value;
    var lokasi = document.getElementById("lokasi").value;
    var experience = document.getElementById("experience").value;
    var email = document.getElementById("email").value;

    document.getElementById("nama2").innerHTML = nama;
    document.getElementById("nama-p").innerHTML = nama;
    document.getElementById("role2").innerHTML = role;
    document.getElementById("availability2").innerHTML = availability;
    document.getElementById("usia2").innerHTML = usia;
    document.getElementById("lokasi2").innerHTML = lokasi;
    document.getElementById("experience2").innerHTML = experience;
    document.getElementById("email2").innerHTML = email;
    document.getElementById("email-p").innerHTML = email;
}