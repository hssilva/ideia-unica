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
    
    const staticDate = new Date();
    const staticDateStrimg = staticDate.toGMTString();

    return {
        props:{
            staticDateStrimg
        },
        revalidate: 1
    }

}

export default Tempo;