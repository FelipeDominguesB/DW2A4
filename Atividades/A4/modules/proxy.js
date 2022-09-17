class Requests{

    getStateByCep(cepValue)
    {
        return new Promise((resolve, reject) =>{
            const url = `https://viacep.com.br/ws/${cepValue}/json/`;

            fetch(url).then(cepInfo => cepInfo.json()).then(cepInfoJson => {
                if(cepInfoJson.erro)
                {
                    reject("CEP NÃO ENCONTRADO");
                }
                resolve(cepInfoJson);
            });
        })
        
    }


    getCasesByState(ufValue)
    {

    }


    fullSearch(cepValue)
    {
        return new Promise((resolve, reject) =>{
            this.getCasesByState
            .then(cepValue =>{
                return cepValue
            })
            .then()
            .catch(err =>{
                console.log(err);
            })
        });
        
    }
}

export const Client = new Requests();