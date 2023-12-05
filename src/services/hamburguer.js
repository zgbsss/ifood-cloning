import api from '../plugins/api'

class HamburguerService {
    async getAllHambugueres() {
        const response = await api.get("/hamburgueres/");
        return response.data;
    }
}
export default new HamburguerService();