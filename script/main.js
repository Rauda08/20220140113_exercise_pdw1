const waktu = document.getElementById("waktu");

function tanggal() {
    const date = new Date();
    waktu.innerHTML = date;
    waktu.style.color = "white"; 
    waktu.style.fontSize = "15px"; 
    waktu.style.fontStyle = "Monaco"
}

setInterval(tanggal, 1000 )

tanggal();