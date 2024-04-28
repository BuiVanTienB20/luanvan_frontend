import axios from "axios";
import createApiClient from "./api.service";

class HotelService {
  constructor(baseUrl = "/api/hotels") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }
  async create(data) {
    createApiClient().post("/api/hotels", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async deleteAll() {
    return (await this.api.delete("/")).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async findAllByProvinceId(provinceId) {
    return (await this.api.get(`/province/${provinceId}`)).data;
  }
  async findOneByProvinceIdAndHotelId(provinceId, hotelId) {
    return (await this.api.get(`/province/${provinceId}/${hotelId}`)).data;
  }
  async updateHotelByProvinceIdAndHotelId(provinceId, hotelId, data) {
    await createApiClient().put(
      `/api/hotels/province/${provinceId}/${hotelId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async delete(id, data) {
    return (await this.api.delete(`/${id}`, data)).data;
  }
}

export default new HotelService();
