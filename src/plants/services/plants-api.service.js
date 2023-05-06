import httpCommon from "@/core/services/http-common";

export class PlantsApiService {
    getAll() {
        return httpCommon.get('/plants');
    }
    getById(id) {
        return httpCommon.get(`/plants/${id}`);
    }
    findByName(name) {
        return httpCommon.get(`/plants?name=${name}`);
    }
}
