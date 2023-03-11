import { IPartidos } from '../../../models/Partidos';
import PartidosRepository from '../../../repositories/partidoRepository';
class HomeService{
    async getPartidos() : Promise<IPartidos>{
        const data = await PartidosRepository.getPartidos();
        return data;
    }
}

export default new HomeService();