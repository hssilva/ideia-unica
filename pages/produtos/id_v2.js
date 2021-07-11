export async function getServerSideProps(context){
    console.log('[idx.js] - function getServerSideProps: ' + Date.now());

    const id = context.query.id;

    return {
        props: {
            id: id
        }
    } 

}

function Produtos(props){
    console.log('[idx.js] - function Produtos: ' + Date.now());

    return <div>Id do Produto {props.id} </div>

}

export default Produtos;