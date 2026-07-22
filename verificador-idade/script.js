function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criança-menino.png')
            } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'jovem-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else if (idade < 70) {
                //adulto meio idoso
                img.setAttribute('src', 'adulto-idoso.png')
            }
            
                else {
                //idoso
                img.setAttribute('src', 'idoso.png' )
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'criança-menina.png')
            } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'jovem-menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else if (idade < 70) {
                //adulta meio idosa
                img.setAttribute('src', 'adulto-idosa.png')

            }
                else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }  
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}
