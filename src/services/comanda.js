import api from '../plugins/api'

class ComandaService {
    async getAllComandas() {
        const response = await api.get("/comandas/");
        return response.data;
    }
}
export default new ComandaService();