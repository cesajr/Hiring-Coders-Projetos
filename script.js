console.log('JavaScript Carregado...');

function validaCPF(cpf){
    if(cpf.length != 11){
        return false;
    } else {
        var number = cpf.substring(0, 9);
        var number = cpf.substring(9);

        console.log("números do cpf: " + number);
        console.log("dígitos do cpf: " + number);

        //percorrendo os caracteres de trás para frente
        var soma = 0;
        for(var i = 10 ; i > 1; i--){
                soma += number.charAt(10 - i) * i;
        }
        console.log(soma);

        /*Operador ternário: o resultado desta operação é 
        menor que 2? Se sim, atribuo o valor de zero.
        Senão realizo a operação seguinte.*/
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validacao do primeiro digito
        if(resultado != digitos.charAt(0)){
            return false;
        }
        console.log(digitos.toString().charAt(0) + "é a primeira posição da variável");

        soma = 0;
        number = cpf.substring(0, 10);
        for(var k = 11 ; k > 1; k--){
            soma += number.charAt(11 - k) * k;
        }
        console.log(soma);

        var resultado = (soma % 11) > 2 ? 0 : 11 - (soma % 11);

        //validacao do segundo digito
        if(resultado != digitos.charAt(1)){
            return false;
        }
        console.log(digitos.toString().charAt(1) + "é a segunda posição da variável");


        return true;
    }
}
function validacao()
{
    console.log('Iniciando validação do CPF');
    //limpando a interface
    getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    //como capturar inputs ou valores de uma interface
    var cpf = document.getElementById('cpf_digitado').value;
    //exibindo o input ou valor(es) no console
    console.log(cpf);

    var resultadoValidacao = validaCPF(cpf);

    //verificar se o resultado é verdadeiro ou nao
    if(resultadoValidacao){
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}