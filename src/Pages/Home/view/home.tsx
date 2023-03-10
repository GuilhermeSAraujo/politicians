import { useEffect, useState } from "react";
import homeService from "../services/homeService";
import { IPartidos } from "../../../models/Partidos";
const Home = () => {
    const [partidos, setPartidos] = useState<IPartidos | null>();

    const fetchPartidos = async () => {
        const partidos = await homeService.getPartidos();
        setPartidos(partidos);
    }

    useEffect(() => {
        fetchPartidos();
    }, []);
    
    return (
        <div>
            <h1>Partidos</h1>
            <div>
                {partidos && partidos.dados ?  partidos.dados.map((partido) => (<h2>{partido.sigla} - {partido.nome}</h2>)) : null}
            </div>
        </div>
    )

}

export default Home;