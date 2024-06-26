import axios from "axios";
import createApiClient from "./api.service";

class RoomService {
  constructor(baseUrl = "/api/rooms") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }
  async create(data) {
    console.log("hello", data);
    createApiClient().post("/api/rooms", data, {
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
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async findByHotelIdAndRoomId(hotelId, roomId) {
    return (await this.api.get(`/hotel/${hotelId}/${roomId}`)).data;
  }

  async updateByHotelAndRoomId(hotelId, roomId, data) {
    await createApiClient().put(
      `/api/rooms/hotel/${hotelId}/${roomId}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  async delete(id, data) {
    return (await this.api.delete(`/${id}`, data)).data;
  }
  async findByHotelId(hotelId) {
    return (await this.api.get(`/hotel/${hotelId}`)).data;
  }
}

export default new RoomService();
