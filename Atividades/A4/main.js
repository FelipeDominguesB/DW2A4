import { Client } from "./modules/proxy.js";
import { validator } from "./modules/validators.js";
import { formatter } from "./modules/formatters.js";


document.querySelector('#cep').addEventListener('input', (e) =>{
    e.target.value = formatter.formatCep(e.target.value);
});

document.querySelector('button').addEventListener('click', () =>{
    let cepValue = document.querySelector('#cep').value;

    if(!validator.validateGenericNumberic(cepValue, 8))
    {
        alert("CEP INVALIDO");
        return;
    }

    let estado;
    Client.getStateByCep(cepValue).then((localeData =>{
        estado = localeData.uf;
        
    }))
    .catch(() =>{
        return;
    });

})