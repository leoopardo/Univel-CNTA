
import { GoogleMaps } from "../GoogleMaps/googleMaps";
import "./style-modules.css"
export function Footer() {
    return ( 
    <section className="FooterSection">
        <div className="">
            <h4 className="Endereço">Endereço</h4>
            <p className="Endereço">Cascavel-PR</p>
            <p className="Endereço">Av. Amazônia - Parque Verde</p>
            <GoogleMaps />
        </div>
    </section> 
    );
}
