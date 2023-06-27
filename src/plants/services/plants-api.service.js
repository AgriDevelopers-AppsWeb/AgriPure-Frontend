import httpCommon from "@/core/services/http-common";

export class PlantsApiService {
  getAll() {
    return httpCommon.get("/plant");
  }
  getById(id) {
    return httpCommon.get(`/plant/${id}`);
  }
  findByName(name) {
    return httpCommon.get(`/plant?name=${name}`);
  }
}
