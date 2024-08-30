function atualizarElementoComInput(inputValue, elementId) {
    const element = document.getElementById(elementId);
    console.log(elementId)

    console.log(typeof(inputValue),  inputValue.charAt(0))

    if(inputValue === "" ){
        if(elementId === 'cardNumberTxt'){
            element.textContent = "0000 0000 0000 0000";

        }else if(elementId === 'cardNameTxt'){
       

            element.textContent = "e.g. Jane Applesee";
        
        } else if(elementId === 'cardMonthTxt' || elementId === 'cardYearTxt' ){
           
            element.textContent = "00";
            
        }else if(elementId === 'cardCvcTxt' ){
           
            element.textContent = "000";
            
        }
    }else{
            element.textContent = inputValue;
        }
    
}

// Adicionando o evento para múltiplos campos de input
document.querySelectorAll('input[data-update-target]').forEach(function(input) {
    input.addEventListener('input', function() {
        const inputValue = this.value;
        const targetId = this.getAttribute('data-update-target');
        atualizarElementoComInput(inputValue, targetId);
    });
});


document.getElementById('cardNumber').addEventListener('input', function(e) {
  
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 16) {
        valor = valor.slice(0, 16);
    }

 
    valor = valor.replace(/(\d{4})(?=\d)/g, '$1 ');

 
    e.target.value = valor.trim();
});


document.getElementById('cardName').addEventListener('input', function(e) {
    const maxLength = 15; // Defina o número máximo de caracteres permitidos
    let valor = e.target.value;

    // Verifica se o comprimento do valor excede o máximo permitido
    if (valor.length > maxLength) {
        valor = valor.slice(0, maxLength);
    }

    // Define o valor limitado no campo
    e.target.value = valor;
});
