import "./style-modules.css"

export function Especializacao(props) {
    return ( 
        <>
            <section className="Header">
                <h3 className="CNTA">Centro Nacional de Treinamento em Atletismo</h3>
            </section>
            <h1>{props.especNome}</h1>
        </>
     );
}
