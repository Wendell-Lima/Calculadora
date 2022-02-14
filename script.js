function inserir(num){
    document.form.visor.value += num;
}

function calcular(){
    var valor = document.form.visor.value;

    if(valor){
        document.form.visor.value = eval(valor);
    }
    else{
        /*document.form.visor.value ACHAR SOLUÇÃO! */ 
        setInterval(limpar(),5000) //tempo dado em milesimos 1 seg = 1000 milésimos
    }
}

function limpar(){
    document.form.visor.value = "";
}

function backspace(){
    var valor = document.form.visor.value;

    document.form.visor.value = valor.substring(0, valor.length-1)
}