<template>
  <div class="add">
    <h1 class="d-flex justify-content-center">Thêm Khách sạn</h1>
    <add @submit:hotel="createHotel" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import add from "../../components/hotels/addhotel.vue";
import HotelService from "../../services/khachsan.service";

export default {
  components: {
    add,
  },
  props: {
    hotel: { type: Object, require: true },
  },
  data() {
    return {
      message: "",

    };
  },

  methods: {
    async createHotel(data) {

      try {
        await HotelService.create(data);
        this.message = "Thêm khách sạn mới thành công";
        this.$router.push({ name: 'admin-hotel' });
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
.add {
  margin-top: 120px;
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
