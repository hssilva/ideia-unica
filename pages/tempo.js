function Tempo(props) {
    console.log('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateStrimg = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateStrimg} (dinâmico)</div>
            <div>{props.staticDateStrimg} (estático)</div>
        </div>
    )

}

export  function getStaticProps(){
    console.log('> Passando pelo getStaticProps();')
    const staticDate = new Date();
    const staticDateStrimg = staticDate.toGMTString();

    return {
        props:{
            staticDateStrimg
        }
    }

}

export default Tempo;