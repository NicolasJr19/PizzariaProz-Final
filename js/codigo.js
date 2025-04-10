const conteudo = document.getElementById("conteudo").innerHTML

function testa_form() {

    var nome = document.forms ["cadastro"]["nome"].value;
    
    if (nome == "") {
         alert("Nome precisa ser informado");
    
         document.forms["cadastro"]["aluno"].focus();
    
         return false;
    }
    
    var numero = document.forms ["cadastro"]["numero"].value;
    
    if (numero == "") {
         alert("Número precisa ser informado");
    
         document.forms["cadastro"]["numero"].focus();
    
         return false;
    }
    
    var email = document.forms ["cadastro"]["email"].value;
    
    if (email == "") {
         alert("email precisa ser informado");
    
         document.forms["cadastro"]["email"].focus();
    
         return false;
    }

    return true;
}

    function mascara(input) {
     // Obtém o valor atual do campo de entrada
     var v = input.value;
   
    //A função isNaN() determina se o valor é NaN ou não.
     //NaN - Not a number, verifica se o último caractere digitado não é um número.
     
     // Se não for um número, remove o último caractere e retorna,
   
     // o que impede a entrada de caracteres inválidos.
     if (isNaN(v[v.length - 1])) { // Acessa o último caractere da string e verifica se é número.
       
        input.value = v.substring(0, v.length - 1); //Começa pelo primeiro caracter 0
                                                    //Remove o último caracter da string -1.
             
       return;
        // A instrução return encerra a execução da função imediatamente. 
        // Isso impede que o restante do código na função seja executado.
     }
   
     // Obtém o tipo de máscara a partir do atributo data-mask do elemento
     var tipo = input.getAttribute("data-mask");
   
    // Verifica o tipo de máscara (cel) a ser aplicado.
   
     if (tipo === "cel") {
       // Define o limite máximo de caracteres para 14.
       input.setAttribute("maxlength", "14");
        
       // Adiciona um parêntese de abertura após o primeiro dígito.	
       if (v.length === 1) input.value = "(" + v;
        
        // Adiciona um parêntese de fechamento e um espaço após o terceiro dígito.
       if (v.length === 3) input.value += ")";
        
       // Adiciona um hífen após o oitavo dígito, para formatar no padrão "(##)#####-####".
       if (v.length === 9) input.value += "-";
     }
}

function narrarDescricao() {
     const conteudo = document.getElementById("conteudos");
     const texto = conteudo.innerText;
 
     const utterance = new SpeechSynthesisUtterance(texto);
     utterance.lang = 'pt-BR';
     window.speechSynthesis.speak(utterance);
 }

function narrarPizza(botao) {
     window.speechSynthesis.cancel();
 
     const pizzaItem = botao.closest('.pizza-item');
     
     // Esconde o botão antes de pegar o texto
     botao.style.display = 'none';
     
     const texto = pizzaItem.innerText;
     
     // Mostra o botão de novo
     botao.style.display = 'inline';
 
     const utterance = new SpeechSynthesisUtterance(texto);
     utterance.lang = 'pt-BR';
     window.speechSynthesis.speak(utterance);
 }

 function narrarSobre() {
     window.speechSynthesis.cancel();
 
     const sobre = document.getElementById('sobre');
     if (!sobre) return;
 
     // Pega só os parágrafos e títulos dentro da seção principal
     const paragrafos = Array.from(sobre.querySelectorAll('p, h2')).map(el => el.innerText).join(' ');
 
     const utterance = new SpeechSynthesisUtterance(paragrafos);
     utterance.lang = 'pt-BR';
     window.speechSynthesis.speak(utterance);
 }

function alternarModoDaltonico() {
    document.body.classList.toggle('modo-daltonico');
}
