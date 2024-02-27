<template>
  <div>
    <div class="blue-background">
      <div class="container">
        <div class="row">




          <div class="col-sm-6">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <ul>
                    <h4>
                      Tìm & đặt phòng khách sạn giá rẻ chỉ với 3 bước đơn giản!
                    </h4>
                    <h5>
                      Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại Traveloka!
                    </h5>





                  </ul>
                </div>


              </div>

            </div>
          </div>

          <div class="col-sm-6">
            <VueAIcarousel :Property="{ ID: 'Unique_id' }">
              <img src="../assets/img/ads1.webp" alt="">
              <img src="../assets/img/ads2.webp" alt="">
              <img src="../assets/img/ads3.webp" alt="">
              <img src="../assets/img/ads4.webp" alt="">
              <img src="../assets/img/ads5.webp" alt="">


            </VueAIcarousel>
          </div>





        </div>

      </div>



    </div>





    <div class="container">
      <findhotel></findhotel>


    </div>

    <div class="qc">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3 text-center">
            <!-- Thêm class col-md-6 để hình ảnh chiếm 50% chiều rộng, offset-md-3 để căn giữa -->
            <img class="imgqc" src="../assets/img/qc.webp" alt="">
          </div>
          <div class="col-sm-12">
            <khuyenmai> </khuyenmai>
            
          </div>
        </div>
      </div>

    </div>




    <div class="tc">
      <div class="container">

        <div class="row">

          <div class="col-sm-4" @click="OpenModalRegister" v-for="product in products" :key="product._id">
            <div class="ks">
              <img :src="product.imgURL" alt="Hình ảnh" class="imgsp" />



              <div class="ten">
                <p>{{ product.TenHH }}</p>
                <div class="ngoi-sao">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                </div>
                <p><b>{{ product.Gia }} VNĐ</b></p>
              </div>


              <homeModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister"
                class="homeNodal" />
            </div>
          </div>




        </div>

        <!-- 3 -->



      </div>


    </div>

  </div>




  <!-- Lời khuyên -->









  <!-- ####################################### -->
</template>

<script>
import VueAIcarousel from "vue-ai-carousel";

import ProductService from '../services/hanghoa.service';

import findhotel from '../components/findhotel.vue';

import khuyenmai from '../components/khuyenmai.vue';



export default {

  components: {
    VueAIcarousel,
    findhotel,
    khuyenmai
  },


  data() {
    return {
      products: [],
      location: '',
      checkInDate: '',
      duration: '',
      checkOutDate: '',
      occupancy: '',
      booking: {
        city: '',
        hotel: '',
        checkinDate: '',
        checkoutDate: '',
        nights: 1,
        guests: 1,
        rooms: 1
      },

    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    submitForm() {
      // Gửi dữ liệu đặt phòng lên máy chủ
      console.log('Đã gửi dữ liệu đặt phòng:', this.booking);
      // Đoạn mã gửi dữ liệu lên máy chủ sẽ được thêm vào ở đây
      // Ví dụ: sử dụng axios hoặc fetch API để gửi dữ liệu
    },
  },
  created() {
    this.retrieveProducts();
  },


}


</script>
<script setup>
import { ref } from "vue";
import homeModal from "./homeModal.vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
  isShowModalRegister.value = true;
};
const closeModalRegister = () => {
  isShowModalRegister.value = false;
};
</script>
  
<style scoped>
.blue-background {
  background-color: rgba(73, 179, 232, 1.00);
  background-image: linear-gradient(-180deg, rgba(0, 160, 255, 0), #0770cd);
  /* Blue color */
  padding: 20px;
  /* Make the div full screen height */
  margin-top: -20px;
  /* Remove the default margin from the header */
  height: 300px;
}



.carousel-item h4,
.carousel-item h5 {
  color: rgba(255, 255, 255, 1.00);
  margin: 20px;
  /* Chữ màu trắng */

}

.carousel-item h4 {
  color: #ffffff;
  /* Màu chữ trắng */
  font-size: 22px;
}

.carousel-item h5 {
  color: #f0f0f0;
  font-size: 19px;
  /* Màu chữ lợt hơn */
}

.hotel-search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-group label {
  margin-right: 10px;
}

.input-group input {
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.qc {
  margin-top: 20px;
  text-align: center; /* Để căn giữa nội dung ngang */
}

.imgqc {
  width: 850px; 
  max-height: 500px;
  border-radius: 5px;
  margin-left: -150px;
}

.tc {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 1;
  position: relative;


}

.ks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* Để căn giữa nội dung ngang trên các trình duyệt */
}




.tcs span {
  margin: 10px;

  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0074e4;


  margin-bottom: 10px;
  color: #ffffff;
}



.imgsp {
  width: 210px;
  border-radius: 5px;
}





.lk {
  background-color: #0066FF;
  border-radius: 10px;
  width: 100%;

}



.check,
.ban,
.exc {
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

.col-sm-6:hover {
  transform: scale(1.05);
  /* Increase the size by 5% */
  transition: transform 0.3s ease;
  /* Add a smooth transition effect */
}

.col-sm-3:hover {
  transform: scale(1.05);
  /* Increase the size by 5% */
  transition: transform 0.3s ease;
  /* Add a smooth transition effect */
}

.imgsp:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow on hover */
  transition: box-shadow 0.3s ease;
  /* Add a smooth transition effect */
}

.tcs:hover {
  background-color: #f0f0f0;
  /* Change the background color on hover */
  transition: background-color 0.3s ease;
  /* Add a smooth transition effect */
}


/* ############## */
.firstimg,
.col-sm-12,
.col-sm-6 {
  margin-bottom: 18px;
}
</style>