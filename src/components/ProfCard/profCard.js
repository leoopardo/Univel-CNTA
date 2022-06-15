import "./style-modules.css"
export function ProfCard(props) {
    return ( 
    <article className="ProfCard">
        <div className="ProfImg">
            <img src={props.ProfImg} alt={props.ProfNome} className="ProfImage"/>
        </div>
        <div className="NomeDescr">
            <h6 className="ProfNome">{props.ProfNome}</h6>
            <small className="ProfDescr">{props.ProfDescricao}</small>
        </div>
    </article>  
);
}
