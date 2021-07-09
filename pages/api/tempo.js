async function tempo(request, response){
    const apiMacrorRegiao = process.env.MACRO_REGIAO;
    const dynamic = new Date();

    const regiaoResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${apiMacrorRegiao}`)
    const regiaoJson = await regiaoResponse.json();
    const regiao = regiaoJson.nome;

    response.setHeader('Cache-Contol', 's-maxage=20, stale-while-revalidate');

    response.json({
        date: dynamic.toGMTString(),
        regiao: regiao
    });
}


export default tempo;