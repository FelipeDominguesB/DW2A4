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

    
    Client.fullSearch(cepValue)
    .then(async data =>{
        await createTable(data);
    }).catch(err =>{
        alert("Erro ao buscar informações: " + err);
        document.querySelector('table').style.display = 'none';
    });

});


async function createTable(obj)
{
    let keys = Object.keys(obj);    
    console.log(keys);
    keys.forEach(key =>{
        if(document.querySelector(`#${key}`))
        {
            document.querySelector(`#${key}`).innerHTML = obj[key];
        }
    })

    document.querySelector('table').style.display = 'block';
}