export default function Produtos(request, response){
    console.log(request.query.id)
    response.json({
        query_id: request.query.id
    });
}