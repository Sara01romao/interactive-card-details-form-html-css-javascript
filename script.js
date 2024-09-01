
document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let valid = true;

    // Validação do nome
    const name = document.getElementById('cardName').value.trim();
    const inputName = document.getElementById('cardName');

    if (name === '' || name.length < 5) {
        document.getElementById('nameError').textContent = 'Can’t be blank';
        inputName.classList.add('activeErro');
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validação do número do cartão
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const inputNumber = document.getElementById('cardNumber');
    const cardNumberPattern = /^[0-9]{16}$/;

    if (!cardNumberPattern.test(cardNumber)) {
        document.getElementById('numberError').textContent = 'Wrong format, numbers only';
        inputNumber.classList.add('activeErro');
        valid = false;
    } else {
        document.getElementById('numberError').textContent = '';
    }

    // Validação da data de expiração
    const month = document.getElementById('cardMonth').value.trim();
    const inputMonth = document.getElementById('cardMonth');
    const year = document.getElementById('cardYear').value.trim();
    const inputYear = document.getElementById('cardYear');


    if ((month === '' || year === '') ||(month === '00' || year === '00') || (month.length < 2 || year.length < 2)) {
       
        inputMonth.classList.add('activeErro');
        inputYear.classList.add('activeErro');
        document.getElementById('dateError').textContent = 'Invalid date';
        valid = false;
    } else if (month && year) {
        
        inputMonth.classList.remove('activeErro');
        inputYear.classList.remove('activeErro');
        document.getElementById('dateError').textContent = ''; 
        valid = true;
    }

    // Validação do CVC
    const cvc = document.getElementById('cardCvc').value.trim();
    const cvcPattern = /^[0-9]{3}$/;
    const inputCvc = document.getElementById('cardCvc');

    if (!cvcPattern.test(cvc) ) {
        document.getElementById('cvcError').textContent = 'Can’t be blank';
        inputCvc.classList.add('activeErro');
        valid = false;
    } else {
        document.getElementById('cvcError').textContent = '';
        inputCvc.classList.add('activeErro');
    }

    // Se tudo estiver válido, você pode continuar com o processamento do formulário
    if (valid) {
     
        document.querySelector('.thank-container').style.display = 'flex';
        document.querySelector('#cardForm').style.display = 'none';
        clear()
    }
});

function clear(){
    document.getElementById('cardNumberTxt').innerHTML = '0000 0000 0000 0000';
    document.getElementById('cardNameTxt').innerHTML = 'JANE APPLESEED';
    document.getElementById('cardMonthTxt').innerHTML = '00';
    document.getElementById('cardYearTxt').innerHTML = '00';
    document.getElementById('cardCvcTxt').innerHTML = '000';

}

// Função de validação para campos individuais
function validateField(fieldId, errorId, validationFn) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (validationFn(field.value.trim())) {
        errorElement.textContent = '';
    } else {
        errorElement.textContent = 'Invalid input';
    }
}

document.getElementById('cardName').addEventListener('blur', function() {
    const name = this.value;
    const nextInput = this.nextElementSibling; 

    if (name === '' || name.length < 5) {
        this.classList.add('activeErro');
        document.getElementById('nameError').textContent = 'Can’t be blank';
        
        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.classList.add('activeErro');
        }
    } else {
        this.classList.remove('activeErro');
        document.getElementById('nameError').textContent = '';
    }
});

document.getElementById('cardNumber').addEventListener('blur', function() {
    const cardNumber = this.value.replace(/\s/g, '');
    const cardNumberPattern = /^[0-9]{16}$/;
    const nextInput = this.nextElementSibling; 

    if (!cardNumberPattern.test(cardNumber)) {
        this.classList.add('activeErro');
        document.getElementById('numberError').textContent = 'Wrong format, numbers only';

        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.classList.add('activeErro');
        }
    } else {
        this.classList.remove('activeErro');
        document.getElementById('numberError').textContent = '';
    }
});

document.getElementById('cardMonth').addEventListener('blur', function() {
    const month = this.value;
    const nextInput = this.nextElementSibling; 
    
    if (month === '' || month.length < 2 || month === "00") {
        this.classList.add('activeErro');
        document.getElementById('dateError').textContent = 'Can’t be blank';

        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.classList.add('activeErro');
        }
    } else {
        this.classList.remove('activeErro');
        document.getElementById('dateError').textContent = '';
    }
});

document.getElementById('cardYear').addEventListener('blur', function() {
    const year = this.value;
    const inputYear = document.getElementById('cardYear'); 

    if (year === '' ||  year.length < 2 || year ==="00") {
        inputYear.classList.add('activeErro');
        document.getElementById('dateError').textContent = 'Can’t be blank';

        if (nextInput && nextInput.tagName === 'INPUT') {
            inputYear.classList.add('activeErro');
        }
    } else {
        inputYear.classList.remove('activeErro');
        document.getElementById('dateError').textContent = '';
    }
});

document.getElementById('cardCvc').addEventListener('blur', function() {
    const cvc = this.value;
    const cvcPattern = /^[0-9]{3}$/;
    const inputCvc = document.getElementById('cardCvc'); 

    if (!cvcPattern.test(cvc)) {
        inputCvc.classList.add('activeErro');
        document.getElementById('cvcError').textContent = 'Can’t be blank';

        if (nextInput && nextInput.tagName === 'INPUT') {
            inputCvc.classList.add('activeErro');
        }
    } else {
        inputCvc.classList.remove('activeErro');
        document.getElementById('cvcError').textContent = '';
    }
});












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
    const maxLength = 15; 
    let valor = e.target.value;

    
    if (valor.length > maxLength) {
        valor = valor.slice(0, maxLength);
    }

   
    e.target.value = valor;
});
