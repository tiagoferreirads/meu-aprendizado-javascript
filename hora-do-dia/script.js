function carregar() {
    function atualiarRelogio() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    var minFormatado = min < 10 ? '0' + min : min;
    
    msg.innerHTML = `Agora são ${hora}:${minFormatado} horas.`;

    

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'
    }
}

 atualiarRelogio();

    setInterval(atualiarRelogio, 1000);
}

