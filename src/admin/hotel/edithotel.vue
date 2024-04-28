<template>
  <div class="edit">
    <h1 class="d-flex justify-content-center">Chỉnh sửa khách sạn</h1>
    <edit :hotel="hotel" @submit:hotel="editHotel" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import edit from "../../components/hotels/edithotel.vue";
import HotelService from "../../services/khachsan.service";

export default {
  components: {
    edit,
  },
  data() {
    return {
      hotel: null,
      message: "",
    };
  },
  methods: {
    async getHotel() {
      const provinceId = this.$route.params.provinceId;

      const hotelId = this.$route.params.hotelId;
      console.log("Province ID:", provinceId);
      console.log("Hotel ID:", hotelId);
      try {
        this.hotel = await HotelService.findOneByProvinceIdAndHotelId(provinceId, hotelId);
      } catch (error) {
        // Xử lý lỗi, ví dụ: chuyển hướng đến trang 404
        this.$router.push({ name: "notfound" });
      }
    },
    async editHotel(data) {

      try {
        const provinceId = this.$route.params.provinceId;
        const hotelId = this.$route.params.hotelId;

        await HotelService.updateHotelByProvinceIdAndHotelId(provinceId, hotelId, data);
        this.message = "Cập nhật khách sạn thành công";
        this.$router.push({ name: 'admin-hotel',params: { id: provinceId } });
      } catch (error) {
        console.error(error);

      }
    },
  },
  created() {
    this.getHotel();
  },
};
</script>
<style scoped>
.edit {
  margin-top: 110px;
   margin-left: 35px;
  margin-right: 50px;
}
</style>