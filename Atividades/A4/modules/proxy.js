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
            }).catch(err =>{
                reject("Erro ao fazer requisição de CEP");
            });
        })
        
    }

    getCasesByState(ufValue)
    {
        return new Promise((resolve, reject) =>{
           
            const url = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${ufValue}`;

            fetch(url).then(covidInfo => covidInfo.json()).then(covidInfo => {
                if(covidInfo.error)
                {
                    reject("INFORMAÇÕES DO ESTADO NÃO ENCONTRADAS");
                }
                resolve(covidInfo);
            }).catch(err => {
                reject("Erro ao fazer requisição para dados da covid")
            });
        })
    }


    fullSearch(cepValue)
    {
        return new Promise((resolve, reject) =>{
            this
            .getStateByCep(cepValue)
            .then(cepData =>{
                return this.getCasesByState(cepData.uf)
            })
            .then(covidData =>{
               resolve(covidData);
            })
            .catch(err =>{
               
                reject(err);
            })
        });
        
    }
}

export const Client = new Requests();