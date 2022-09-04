class Formatters{

    formatCPF(cpf)
    {
        return cpf
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .replace(/(-\d{2})\d+?$/, '$1');
    }

    formatDate(date)
    {
        return date
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
        .replace(/(\/\d{4})\d+?$/, '$1');
    }

    formatTelephone(telephone)
    {
        return telephone
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{5})(\d{4})/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})\d+?$/, '$1');
    }

    formatCep(cep)
    {
        return cep
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{3})/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, '$1');
    }

}

export const formatter = new Formatters();
