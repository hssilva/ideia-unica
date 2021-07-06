async function tempo(request, response){
    const dynamic = new Date();

    const regiaoResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}")
    const regiaoJson = await regiaoResponse.json();
    const regiao = regiaoJson.nome;


    response.json({
        date: dynamic.toGMTString(),
        regiao: regiao
    });
}

export default tempo;