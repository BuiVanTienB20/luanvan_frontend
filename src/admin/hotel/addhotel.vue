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
import { retrieveHotels } from "../hotel.vue";
export default {
  components: {
    add,

  },
  props: {
    hotel: { type: Object, require: true },

  },
  data() {
    return {
      hotels: [],
      message: "",

    };
  },

  methods: {

    async createHotel(data) {
      try {
        console.log("hello", data.name)
        let formData = new FormData();
        formData.append("name", data.name);


        console.log("mew", formData)
        formData.append("address", data.address);
        formData.append("description", data.description);
        formData.append("rating", data.rating);
        formData.append("type", data.type);
        formData.append("imgURL", data.imgURL);
        formData.append("province_id", data.province_id);
        formData.append("discount", data.discount);
        formData.append("price", data.price); // Thêm trường giá
        formData.append("discountTitle", data.discountTitle); // Thêm trường tiêu đề giảm giá
        formData.append("capacity[adults]", data.capacity.adults); // Thêm sức chứa người lớn
        formData.append("capacity[children]", data.capacity.children); // Thêm sức chứa trẻ em
        console.log("fomdata", formData)

        await HotelService.create(formData);
        await retrieveHotels.call(this);
        this.message = "Thêm khách sạn mới thành công";
        this.$router.push({ name: 'admin-hotel' });
      } catch (error) {
        console.log(error);
      }
    },


  },
  created() {
    retrieveHotels.call(this);
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
