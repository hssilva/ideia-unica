function Tempo(props) {
    console.log('> [tempo.js] - function Tempo: ' + Date.now())
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
    console.log('> [tempo.js] - funcation getStaticProps: ' + Date.now());
    
    const staticDate = new Date();
    const staticDateStrimg = staticDate.toGMTString();

    return {
        props:{
            staticDateStrimg
        },
        revalidate: 10
    }
    
}

export default Tempo;