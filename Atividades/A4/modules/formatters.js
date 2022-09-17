class Formatters{

    formatCep(cep)
    {
        return cep
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{3})/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, '$1');
    }

}

export const formatter = new Formatters();
