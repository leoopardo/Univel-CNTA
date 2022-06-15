import "./style-modules.css"

export function Especializacao(props) {
    return ( 
        <div>
            <section className="Header">
                <h3 className="CNTA">Centro Nacional de Treinamento em Atletismo</h3>
            </section>
            <section className="BodyEspec">
                <h1>{props.especNome}</h1>
                <p className="descricao">{props.descricao}</p>
            </section>
            <hr/>
            <section className="ProfsSection">
                <div className="Profs">
                    <h4 style={{width: "400px"}}>Professores responsáveis</h4>
                    {props.children}
                </div>
            </section>
             
        </div>
     );
}
