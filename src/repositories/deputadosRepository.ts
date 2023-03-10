import axiosInstance from "../shared/utils/axiosService";
class DeputadosRepository{
    async getPartidos(){
        const data = await axiosInstance.get('/partidos?dataInicio=2023-01-01&ordem=ASC&ordenarPor=sigla');
        return data.data;
    }
}

export default new DeputadosRepository();