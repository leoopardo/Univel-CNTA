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
import { useState } from "react";

export function Home() {
    const [anime, setAnime] = useState("")
    const target = document.querySelectorAll("[data-anime]")
    
    function animeScroll(){
        const windowTop = window.pageYOffset
        console.log(windowTop)
        target.forEach((element) =>{
            console.log(element.offsetTop)
            if((windowTop) > 100){
                setAnime("animate")
            }
        })
    }
    window.addEventListener("scroll", () => {animeScroll()})
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
        <section className="especializacoes" >
            <div data-anime="left" className={anime}>
                <Card 
                especImg={Nutricao}
                especializacao="Nutrição"
                />
            </div>
            <div data-anime="right" className={anime}>
                <Card 
                especImg={Aquatica}
                especializacao="Fisioterapia Aquática"
                />
            </div>
            <div data-anime="left" className={anime}>
               <Card 
                especImg={Ortopedia}
                especializacao="Fisioterapia em Ortopedia"
                /> 
            </div>
            <div data-anime="right" className={anime}>
                <Card 
                especImg={Neurologia}
                especializacao="Fisioterapia em Neurologia"
                />
            </div>
            <div data-anime="left" className={anime}>
                <Card 
                especImg={Desportiva}
                especializacao="Fisioterapia Desportiva"
                
                />
            </div>
           
        </section> 
    </>
    );
};
