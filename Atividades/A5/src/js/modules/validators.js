export class Validators{

    validateCPF(cpf)
    {
        let cpfString = cpf.replace(/\D/g, '')
        if(!cpfString.length == 11) return false;
        let soma;
        let resto;
        soma = 0;

        for (let i=1; i<=9; i++) 
            soma = soma + parseInt(cpfString.substring(i-1, i)) * (11 - i);
        
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11))  
            resto = 0;
        
        if (resto != parseInt(cpfString.substring(9, 10)) ) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) 
            soma = soma + parseInt(cpfString.substring(i-1, i)) * (12 - i);

        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11))  
            resto = 0;
        
        if (resto != parseInt(cpfString.substring(10, 11) ) ) 
            return false;
        
        return true;
    }

    validateDate(date)
    {

        let dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        return dateRegex.test(date);
    }

    validateEmail(email)
    {
        let emailRegex = (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
        return emailRegex.test(email);
    }

    validateGenericNumberic(value, size)
    {
        value = value.replace(/\D/g, '');
        return value.length == size;
    }
}

export const validator = new Validators();
