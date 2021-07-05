function Tempo(props) {
    console.log('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateStrimg = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateStrimg} (dinâmico)</div>
            <div>{props.staticDateStrimg} (estático - com delay)</div>
        </div>
    )

}

export async     function getStaticProps(){
    console.log('> Passando pelo getStaticProps();');
    console.log('> Adicionando delay de 5 segundos');
    
    await delay(5000);
    const staticDate = new Date();
    const staticDateStrimg = staticDate.toGMTString();

    return {
        props:{
            staticDateStrimg
        }
    }

}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;