document.getElementById("yesBtn").addEventListener("click", function() {
    // Iniciar la música
    var iframe = document.getElementById("soundcloudPlayer");
    var src = iframe.src;
    iframe.src = src + "&auto_play=true";
    
    // Descargar el PDF
    var link = document.createElement('a');
    link.href = "https://drive.google.com/uc?export=download&id=1vaOHv5j_MlHirCLlEfwGbwlpb22bHoI5";  // Enlace modificado
    link.download = "Mi_carta.pdf";  // Nombre del archivo cuando se descargue
    link.click();
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});