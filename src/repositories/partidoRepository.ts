import axiosInstance from "../shared/utils/axiosService";
class PartidoRepository{
    async getPartidos(){
        const data = await axiosInstance.get('/partidos?dataInicio=2023-01-01&ordem=ASC&ordenarPor=sigla');
        return data.data;
    }
    async getMembros(id: number){
        const data = await axiosInstance.get(`/partidos/${id}/membros?dataInicio=2023-01-01`);
        return data.data;
    }
}

export default new PartidoRepository();