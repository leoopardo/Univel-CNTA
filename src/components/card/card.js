import "./style-modules.css"
import { Link } from "react-router-dom";
export function Card(props) {
    return ( 
        <>
            <article className="cardBox">
                <div className="imgDiv">
                   <img src={props.especImg} alt={props.especializacao} className="especImg" /> 
                </div>
                <h5>{props.especializacao}</h5>
                <Link to={`/Especializacao/${props.link}`} style={{textDecoration: "none"}}><p>Saiba mais </p></Link>
            </article>
        </>
     );
}