function tempo(request, response){
    const dynamic = new Date();
    response.json({
        date: dynamic.toGMTString()
    });
}

export default tempo;