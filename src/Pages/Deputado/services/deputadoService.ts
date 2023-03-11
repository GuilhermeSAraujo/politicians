import { IPartidos } from '../../../models/Partidos';
import PartidoRepository from '../../../repositories/partidoRepository';
class DeputadoService{
    async getMembros(id: number) : Promise<>{
        const data = await PartidoRepository.getMembros(id);
        return data;
    }
}

export default new DeputadoService();