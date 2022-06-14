import { Card } from "../../components/card/card";
import Nutricao from "../../components/img/nutrição.png"
import Ortopedia from "../../components/img/ortopedia.png"
import Aquatica from "../../components/img/aquatica.png"
import Neurologia from "../../components/img/neuro.png"
import Desportiva from "../../components/img/desportiva.png"
import CNTA from "../../components/img/CNTA.jpeg"
import FisioUnivel from "../../components/img/FisioUnivel.webp"
import NutriUnivel from "../../components/img/NutriUnivel.jpg"
import "./style-modules.css"
import { Carroceu } from "../../components/Carousel/carousel";

export function Home() {
    return ( 
    <>
        <section className="Header">
            <h3 className="CNTA">Centro Nacional de Treinamento em Atletismo</h3>
        </section>
        <section className="carroceu">
            <Carroceu 
            Carroceu1={CNTA}
            Carroceu1Nome="CNTA"
            Carroceu1Descricao="O centro de treinamento em atletismo conta com instalações modernas para o treinamento de atletas e para competições."
            Carroceu2={NutriUnivel}
            Carroceu2Nome="Nutrição Univel"
            Carroceu2Descricao="Precisa de um acompanhamento nutricional? Agende um horário e seja atendido na nossa clínica escola."
            Carroceu3={FisioUnivel}
            Carroceu3Nome="Fisioterapia Univel"
            Carroceu3Descricao="Nossa Clinica escola de fisiterapia conta com os melhores equipamentos e instalações para te receber, agende já."
            />

        </section>
        <section className="especializacoes">
            <Card 
            especImg={Nutricao}
            especializacao="Nutrição"
            />
            <Card 
            especImg={Aquatica}
            especializacao="Fisioterapia Aquática"
            />
            <Card 
            especImg={Ortopedia}
            especializacao="Fisioterapia em Ortopedia"
            />
            <Card 
            especImg={Neurologia}
            especializacao="Fisioterapia em Neurologia"
            />
            <Card 
            especImg={Desportiva}
            especializacao="Fisioterapia Desportiva"
            />
            <Card 
            especImg={Aquatica}
            especializacao="Nutrição"
            />
        </section> 
    </>
    );
};
