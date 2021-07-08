async function tempo(request, response){
    const dynamic = new Date();
    const apiMacrorRegiao = process.env.MACRO_REGIAO;

    const regiaoResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${apiMacrorRegiao}`)
    const regiaoJson = await regiaoResponse.json();
    const regiao = regiaoJson.nome;

    response.setHeader('Cache-Contol', 's-maxge=10, stale-while-revalidate');

    response.json({
        date: dynamic.toGMTString(),
        regiao: regiao
    });
}


export default tempo;