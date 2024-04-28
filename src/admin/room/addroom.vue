<template>
  <div class="add">
    <h1 class="d-flex justify-content-center">Thêm Khách sạn và Phòng</h1>
    <add @submit:room="createRoom" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import add from "../../components/room/addroom.vue";

import RoomService from "../../services/phong.service";

export default {
  components: {
    add,
  },
  props: {
    room: { type: Object, require: true },
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {

    async createRoom(data) {
      try {

        let formData = new FormData();
        // console.log("hello", data.room_name)
        formData.append("room_name",data.room_name);
        console.log("new",formData)
        formData.append("room_number",data.room_number);
        formData.append("room_type",data.room_type);
        formData.append("capacity",data.capacity);
        formData.append("price_per_night",data.price_per_night);
        formData.append("availability",data.availability);
        formData.append("hotel_id",data.hotel_id);
        formData.append("imgURL",data.imgURL);
        console.log("img",data.imgURL)



        await RoomService.create(formData);
        this.message = "Thêm phòng mới thành công";
        this.$router.push({ name: 'admin-room' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.add {
  margin-top: 120px;
  margin-left: 35px;
  margin-right: 50px;
}

.add h1 {
  font-size: 24px;
  color: #333;
  text-align: center;
}

.add p {
  text-align: center;
  color: green;
  margin-top: 20px;
}

.add p.error {
  color: red;
}

.add .btn {
  display: block;
  margin: 20px auto;
  text-align: center;
}
</style>