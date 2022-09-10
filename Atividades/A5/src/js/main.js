import { validator } from "./modules/validators.js";
import { formatter } from "./modules/formatters.js";

const form = document.querySelector('form');
const allInptus = [...document.querySelectorAll('input')];


allInptus.find(el => el.id == 'cpf').addEventListener('input', (e) =>{
    let cpf = e.target.value;
    e.target.value = formatter.formatCPF(cpf);
});

allInptus.find(el => el.id == 'dt_nasc').addEventListener('input', (e) =>{
    let date = e.target.value;
    e.target.value = formatter.formatDate(date);
});

allInptus.find(el => el.id == 'fone').addEventListener('input', (e) =>{
    let telephone = e.target.value;
    e.target.value = formatter.formatTelephone(telephone);
});

allInptus.find(el => el.id == 'cep').addEventListener('input', (e) =>{
    let cep = e.target.value;
    e.target.value = formatter.formatCep(cep);
});


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let cpfValue = allInptus.find(el => el.id == "cpf").value;
    let dateValue = allInptus.find(el => el.id == "dt_nasc").value;
    let emailValue = allInptus.find(el => el.id == "email").value;
    let fonelValue = allInptus.find(el => el.id == "fone").value;
    let cepValue = allInptus.find(el => el.id == "cep").value;

    if(allInptus.find(el => el.value.trim("") == ""))
    {
        alert("Todos os valores devem estar preenchidos");
        return;
    }

    if(!validator.validateCPF(cpfValue))
    {
        alert("CPF informado invalido");
        return;
    }    
    if(!validator.validateDate(dateValue))
    {   
        alert("Data informada inválida");
        return;
    }

    if(!validator.validateEmail(emailValue))
    {   
        alert("Email inválido");
        return;
    }

    if(!validator.validateGenericNumberic(fonelValue, 11))
    {
        alert("Telefone incompleto");
        return;
    }

    if(!validator.validateGenericNumberic(cepValue, 8))
    {
        alert("CEP Incompleto");
        return;
    }
    let pessoa = {};
    [...document.querySelectorAll('[data-js]')].forEach((element) =>{
        pessoa[element.id] = element.value;
    });
    

    let pageBreak = "\r\n";
    let alerta = "Dados salvos" + pageBreak 
    + "Nome completo: " + pessoa.nome + pageBreak
    + "CPF: " + pessoa.cpf + pageBreak
    + "E-Mail: " + pessoa.email + pageBreak
    + "Data de Nascimento: " + pessoa.dt_nasc + pageBreak
    + "Telefone: " + pessoa.fone + pageBreak
    + "CEP: " + pessoa.cep + pageBreak
    alert(alerta);

});