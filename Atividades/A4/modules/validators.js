export class Validators{

    async validateGenericNumberic(value, size)
    {
        value = value.replace(/\D/g, '');
        return value.length == size;
    }
}

export const validator = new Validators();
