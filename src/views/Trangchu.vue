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
            <VueAIcarousel :Property="{ ID: 'Unique_id' }" style="width: 460px;">
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

    <div class="qc">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <HotelTrainVue></HotelTrainVue>

          </div>
        </div>
      </div>

    </div>

    <div class="qc">
      <div class="container">
        <div class="row">

          <div class="col-sm-12">
            <HotelInterTrain></HotelInterTrain>

          </div>
        </div>
      </div>

    </div>

    <div class="qc ">
      <div class="container">
        <div class="row ">
          <div class="col-sm-3">
            <h2
              style="margin-bottom: 30px; color: rgba(67, 67, 67, 1.00); font-size: 22px; line-height: 28px; font-weight: 700;">
              Nhiều tính năng tiện lợi</h2>
          </div>
          <div class="container col-sm-12 ntn">
            <div class="container tn">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" color="white" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-file-check">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 15l2 2l4 -4" />
              </svg>
              <h5 class="text-white">
                Miễn phí vận chuyển
              </h5>

            </div>

            <div class="container tn">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" color="white" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cash-banknote">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M18 12l.01 0" />
                <path d="M6 12l.01 0" />
              </svg>
              <h5 class="text-white">
                Thanh toán tại khách sạn
              </h5>

            </div>
            <div class="container tn">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" color="white" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-due">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
              <h5 class="text-white">
                Dễ dàng đổi lịch
              </h5>

            </div>
            <div class="container tn">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" color="white" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-coins">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
                <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                <path
                  d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
                <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                <path d="M3 11c0 .888 .772 1.45 2 2" />
              </svg>
              <h5 class="text-white" style="font-size: 14px;">
                Tích xu Travoloka sau mỗi lần giao dịch
              </h5>

            </div>
            <div class="container tn">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" color="yellow" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-stars">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                <path
                  d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                <path
                  d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
              </svg>
              <h5 class="text-white">
                Review chân thực
              </h5>

            </div>


          </div>

        </div>
      </div>

    </div>


    <div class="qc ">
      <div class="container">
        <div class="row ">
          <div class="col-sm-4 dt">
            <h2 class="text-left">
              Đối tác khách sạn
            </h2>
            <p class="text-left">
              Đối tác khách sạn trong nước và quốc tế
            </p>
            <p class="text-left">
              Chúng tôi hợp tác với các chuỗi khách sạn trên toàn thế giới để bảo đảm mang lại kỳ nghỉ tuyệt vời nhất
              tại mọi điểm đến trong mơ của bạn!
            </p>
          </div>
          <div class="col-sm-4 ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2022/10/26/1666769812521-2f9e73b3dfa37b1a8774517477bce6f3.png"
              alt="" style="width: 88px;height: 35px; margin: 10px; ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/29/1517200921330-784c7f0f6798fdb7c3b14d23881d5090.jpeg"
              alt="" style="width: 88px;height: 59px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/29/1517200871912-592258729faec3c08e23d4f7c8c0da07.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/08/1502200776552-f852b752ae88e7e0902fb0d3bfc41a00.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/29/1517201056739-4030efe3d4ea793a40904f712cec37af.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/08/1502200809743-5dde6f77b2b13ac38a752953eb78e692.png"
              alt="" style="width: 88px;height: 72px;margin: 10px;">


          </div>
          <div class="col-sm-4 ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/29/1517201226378-8affc1dfeeafe879121fc94652a7332f.png"
              alt="" style="width: 88px;height: 72px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/08/1502200796134-3e687ae7c1e145253ef72691f5f18318.png"
              alt="" style="width: 88px;height:72px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/29/1517201184025-b629781230030dbfc28bcbfb127286f6.png"
              alt="" style="width: 88px;height:72px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/08/1502200785889-c88f0b3d3f0c0711af02b5ecda331105.png"
              alt="" style="width: 88px;height:72px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/08/1502200813329-e3ef4b6c35b64c4ec14d596f3306f239.png"
              alt="" style="width: 88px;height:72px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/29/1517201013000-1f5c98cc6081ca889e0ee99d4bdae1ce.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">


          </div>
        </div>
      </div>
    </div>

    <div class="qc">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 dt">
            <h2 class="text-left">
              Đối tác thanh toán
            </h2>
            <p class="text-left">
              Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch
              một cách thuận lợi nhất!
            </p>
          </div>
          <div class="col-sm-4 ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214095745-950140744e8aaa6adc5f20c9070ec099.png"
              alt="" style="width: 58px;height: 35px; margin: 10px; ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214097094-68a8e4013fffaf9e3eb509ab01c443cd.png"
              alt="" style="width: 88px;height: 59px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214118270-af8e9adc7a6c728d0df9c6590279dd48.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214182554-3d9057e89f3e8013c6b5623a0b3fd72d.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778862778-43a622292ba164040d7264969df8725d.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214295854-530deeeeef4c927cf42574a9c4f18f26.png"
              alt="" style="width: 88px;height: 35px;margin: 10px;">


          </div>
          <div class="col-sm-4 ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214099540-8d8fe069f3c5f30b42c6067bb66bf7b5.png"
              alt="" style="width: 88px;height: 40px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214169837-2e167f93c28a31c50929ff25141af9c7.png"
              alt="" style="width: 88px;height: 40px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214177572-608f357f64d150269e946dd01dc35f6c.png"
              alt="" style="width: 88px;height: 40px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214297342-0f18b61b9af8466c550a64863c2f7fc9.png"
              alt="" style="width: 88px;height: 40px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214299520-8bfa969c933323094f1f75162ae3fc0f.png"
              alt="" style="width: 88px;height: 40px;margin: 10px;">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214302804-b2cfe4878f3d09ee6b42932a00fac1be.png"
              alt="" style="width: 88px;height: 40px;margin: 10px;">


          </div>
        </div>
      </div>
    </div>










    <div class="tc ">
      <div class="container">
        <div class="dh">
          <h2>Điểm đến hot nhất do Traveloka đề xuất</h2>

        </div>

        <div class="row">


          <div class="col-sm-4" @click="OpenModalRegister" v-for="product in products" :key="product._id">
            <div class="ks">
              <img :src="product.imgURL" alt="Hình ảnh" class="imgsp" />



              <div class="ten">
                <p class="text-white" style="font-size: 24px; font-weight: 600;">{{ product.TenHH }}</p>
                <p class="text-white" style=" font-weight: 600;">Có 500 khách sạn</p>

              </div>


              <!-- <homeModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister"
                class="homeNodal" /> -->
            </div>
          </div>




        </div>

        <!-- 3 -->



      </div>
      


    </div>


    <div class="qc" style="margin: 50px; border-top-width: 1px;">
      <div class="container">
        <div class="row line">
          <div class="col-sm-6  " style="margin-top: 52px;">
            <h2 class="text-left">
              Đăng ký nơi nghỉ của bạn
            </h2>
            <p class="text-left">
              Tiếp cận hàng triệu khách hàng tiềm năng và nâng tầm doanh nghiệp của bạn với chúng tôi.
            </p>
          </div>
          <div class="col-sm-6 ">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/24/1579840685837-76cf8c0f1f54757df1c8a7a5ec3d0811.jpeg"
              alt="" style="width: 448px;height: 180px; margin: 10px; border-radius: 5px">


          </div>

        </div>
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

import HotelTrainVue from "../components/HotelThai.vue";

import HotelInterTrain from "../components/HotelDNA.vue";



export default {

  components: {
    VueAIcarousel,
    findhotel,
    khuyenmai,
    HotelTrainVue,
    HotelInterTrain
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


<!-- <script setup>
import { ref } from "vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
  isShowModalRegister.value = true;
};
const closeModalRegister = () => {
  isShowModalRegister.value = false;
};
</script> -->

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
  text-align: center;
  margin-bottom: 80px;
  /* Để căn giữa nội dung ngang */
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
  width: 288px;
  height: 180px;
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

.ntn {
  display: flex;
}

.tn {
  width: 184px;
  height: 138px;
  padding: 24px;

  border-radius: 5px;
  background-color: #0056b3;
}

.dt {
  width: 420px;
  display: flex;
  flex-direction: column;
}

.dh {
  display: flex;
  justify-content: center;

  margin-bottom: 30px;



}

.dh>h2 {
  font-size: 28px;
  line-height: 28px;
  font-weight: 600;
}

.ks {
  position: relative;
  /* Đặt vị trí tương đối cho phần tử cha */
  display: inline-block;
  /* Đảm bảo phần tử chiếm không gian dọc tối thiểu cần thiết */
  padding: 7px;
}

.ten {
  position: absolute;
  /* Đặt vị trí tuyệt đối cho phần tử con */
  bottom: 0;
  /* Đặt phần tử con ở dưới cùng của phần tử cha */
  left: 0;
  /* Đặt phần tử con ở bên trái của phần tử cha */
  width: 100%;
  /* Đảm bảo phần tử con chiếm toàn bộ chiều rộng của phần tử cha */
  color: rgba(255, 255, 255, 0.7);
  /* Màu nền cho phần tử con */
  padding: 5px;


  /* Khoảng cách giữa nội dung và biên của phần tử con */
}

.ten p {
  margin: 0;
  /* Loại bỏ khoảng trắng xung quanh văn bản */
}

.tinh {
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.line {

  border-top: 1px solid rgba(53, 49, 49, 0.5);
  /* Màu nhạt cho đường gạch trên */
  border-bottom: 1px solid rgba(53, 49, 49, 0.5);
  /* Màu nhạt cho đường gạch dưới */
  width: 100%;
  /* Độ rộng của đường gạch */
  margin: 20px 0;
  /* Khoảng cách từ đường gạch đến các phần tử xung quanh */


}
</style>