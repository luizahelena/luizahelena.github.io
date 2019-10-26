var botao = document.getElementById('botao');
botao.addEventListener('click', function (event) {



    var codigo_cidade = document.getElementById('codigo_cidade');
    if (codigo_cidade.value === '') {
        codigo_cidade.style.borderColor = '#00258a';
        return false;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.hgbrasil.com/weather/?format=json-cors&key=development&woeid=' + codigo_cidade.value + '/json/');
    xhr.send();


    xhr.onload = function () {






        var retorno = xhr.responseText;

        retornoNovo = xhr.responseText;
        document.getElementById('cont').value = retornoNovo;
        let objJson = JSON.parse(xhr.responseText);

        var textJSON = document.getElementById('cont').value;
        var str = '';
        var strLi = '';
        
    
        document.getElementById('cidade').innerHTML = objJson.results.city_name;
        document.getElementById('temp').innerHTML = 'Temperatura: ' + objJson.results.temp + 'ºC'+ ' Umidade: ' + objJson.results.humidity + '%';
        document.getElementById('tempo').innerHTML = objJson.results.description;
        
        
 let url = "https://assets.hgbrasil.com/weather/images/" + objJson.results.img_id + '.png';
document.getElementById('imagem').src = url;
        
        for (const previsao of objJson.results.forecast) {

            str += 'Data:' + previsao.date + '-';
            str += 'Previsão:' + previsao.description + '-';
            str += 'MIN:' + previsao.min + '-';
            str += 'MAX:' + previsao.max + '\n';

            strLi += '<li>' + 'Data: ' + previsao.date + '</li>';
            strLi += '<li>' + 'Previsão: ' + previsao.description + '</li>';
            strLi += '<li>' + 'MIN: ' + previsao.min + ' MAX: ' + previsao.max + '</li>';


        }

        document.getElementById('cont').value = str;
        document.getElementById('tag').innerHTML = strLi;

    };



});
