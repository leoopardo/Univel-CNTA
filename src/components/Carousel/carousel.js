import { Carousel } from "react-bootstrap";
import "./style-modules.css"
export function Carroceu(props) {
    return ( 
  <Carousel variant="dark">
  <Carousel.Item>
    <img
      id="carroceuImg"
      className="d-block w-100"
      src={props.Carroceu1}
      alt={props.Carroceu1Nome}
      style={{filter:"contrast(50%)"}}
    />
    <Carousel.Caption>
      <h5 style={{color: "white", fontWeight: "600"}}>{props.Carroceu1Nome}</h5>
      <p style={{color: "white", fontWeight: "600"}}>{props.Carroceu1Descricao}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id="carroceuImg"
      className="d-block w-100"
      src={props.Carroceu2}
      alt={props.Carroceu2Nome}
      style={{filter:"contrast(50%)"}}
    />
    <Carousel.Caption>
        <h5 style={{color: "white", fontWeight: "600"}}>{props.Carroceu2Nome}</h5>
        <p style={{color: "white", fontWeight: "600"}}>{props.Carroceu2Descricao}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     id="carroceuImg"
      className="d-block w-100"
      src={props.Carroceu3}
      alt={props.Carroceu3Nome}
      style={{filter:"contrast(50%)"}} 
    />
    <Carousel.Caption>
        <h5 style={{color: "white", fontWeight: "600"}}>{props.Carroceu3Nome}</h5>
        <p style={{color: "white", fontWeight: "600"}}>{props.Carroceu3Descricao}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     );
}

