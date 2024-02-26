<template>
  <div class="container">
    <div class="row head">


      <p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-search" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20.993 11.646a9 9 0 1 0 -9.318 9.348" />
          <path d="M12 7v5l1 1" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M20.2 20.2l1.8 1.8" />
        </svg>
        Khách sạn gần đây
      </p>

    </div>
    <form @submit.prevent="submitForm">
      <div class="row ce">
        <div>
          <label for="city">Thành phố, địa điểm/Khách sạn: </label>

        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <input type="text" id="city" placeholder=" Thành phố, Khách sạn, Điểm đến" v-model="booking.city" size="30"
            style="padding-right: 500px;" required>

        </div>
      </div>
      <div class="row ce">
        <div class="col-sm-4">

          <div>

            <label for="checkin">Ngày nhận phòng:</label>

          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-up" width="24"
              height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M19 22v-6" />
              <path d="M22 19l-3 -3l-3 3" />
            </svg>
            <input type="date" class="short-input" v-model="booking.checkinDate" required>


          </div>

        </div>

        <div class="col-sm-4">
          <div>
            <label for="nights">Số đêm:</label>

          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" width="24" height="24"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
              <path d="M19 11h2m-1 -1v2" />
            </svg>
            <input type="number" id="nights" v-model="booking.nights" required>

          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <label for="checkout">Ngày trả phòng:</label>

          </div>
          <div>
            <path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <input type="date" id="checkout" v-model="booking.checkoutDate" required>

          </div>

        </div>


      </div>



      <div class="row ce">
        <div>
          <label for="guests">Khách và phòng:</label>

        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-user" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
          </svg>
          <input type="number" id="guests" v-model="booking.guests" style="padding-right: 220px;  " required>
          <button class=" text-white" type="submit"
            style="margin-left: 200px; font-weight: 500; border-radius: 5px ; background-color: rgb(255, 94, 31);">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-map-search" width="24"
              height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" />
              <path d="M9 4v13" />
              <path d="M15 7v5" />
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M20.2 20.2l1.8 1.8" />
            </svg>
            Tìm khách sạn
          </button>


        </div>
      </div>

      <div class="row ce">
        <div>
          <input type="checkbox" id="checkboxId">

          Tôi đi công tác

          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-question" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M14.997 19.317l-1.583 1.583a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.657 -5.584" />
            <path d="M19 22v.01" />
            <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
          </svg>


        </div>

      </div>
      <div class="row foo">
        <div> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            data-id="IcHotelPayUponCheckIn">
            <path
              d="M19.5 14H21V10.9C21 8.1938 18.8062 6 16.1 6H13.5M6 11V10.9C6 8.1938 8.1938 6 10.9 6H13.5M19.5 17H21.5M13.5 6V3.5M15.5 9H16C17.1046 9 18 9.89543 18 11V11.5M3.75 8C3.75 8 4 6.5 5.25 5.25C6.5 4 8 3.75 8 3.75M2.25 5C2.25 5 2.5 4 3.25 3.25C4 2.5 5 2.25 5 2.25"
              stroke="#0194f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M15 13.75L17 13.5V16M15 13.75V13.75C13.6703 13.9162 12.3269 13.9439 10.9914 13.8326L9.0086 13.6674C7.67314 13.5561 6.32974 13.5838 5 13.75V13.75M15 13.75V14C15 15.1046 15.8954 16 17 16V16M17 16V19M17 19V21L15 21.25M17 19V19C15.8954 19 15 19.8954 15 21V21.25M15 21.25V21.25C13.6703 21.4162 12.3269 21.4439 10.9914 21.3326L9.0086 21.1674C7.67314 21.0561 6.32974 21.0838 5 21.25V21.25M3 19V21.5L5 21.25M3 19V19C4.10457 19 5 19.8954 5 21V21.25M3 19V16M5 13.75L3 14V16M5 13.75V14C5 15.1046 4.10457 16 3 16V16M12 17.5C12 18.6046 11.1046 19.5 10 19.5C8.89543 19.5 8 18.6046 8 17.5C8 16.3954 8.89543 15.5 10 15.5C11.1046 15.5 12 16.3954 12 17.5Z"
              stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg> Thanh toán tại khách sạn</div>

      </div>


    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      booking: {
        city: '',
        checkinDate: '',
        checkoutDate: '',
        nights: 1,
        guests: 1,
      }
    };
  },
  methods: {
    submitForm() {
      // Gửi dữ liệu đặt phòng lên máy chủ
      console.log('Đã gửi dữ liệu đặt phòng:', this.booking);
      // Đoạn mã gửi dữ liệu lên máy chủ sẽ được thêm vào ở đây
      // Ví dụ: sử dụng axios hoặc fetch API để gửi dữ liệu
    }
  }
};
</script>
  
<style scoped>
.container {
  background-color: #f0f0f0;
  /* Màu nền */
  padding: 20px;
  /* Khoảng cách đệm xung quanh */
  text-align: left;
  /* Canh lề trái */
  max-width: 850px;
  /* Chiều rộng tối đa */
  margin: 0 auto;
  /* Canh giữa theo chiều ngang */
  margin-top: -29px;
  border-radius: 10px;
}

.row {
  margin-bottom: 20px;
}

.head {

  background-color: rgba(247, 249, 250, 1.00);
  height: 50px;
  margin-top: -19px;
  color: rgba(1, 148, 243, 1.00);
  font-weight: 700;
}

.ce {
  font-weight: 500;
  color: rgba(104, 113, 118, 1.00);
  ;


}

.foo {
  background-color: rgba(247, 249, 250, 1.00);
  height: 50px;
  color: rgba(1, 148, 243, 1.00);
  font-weight: 700;
  margin-bottom: -15px;


}

svg {
  color: rgba(1, 148, 243, 1.00);


}

input {
  border-radius: 5px;
}




input svg {
  position: absolute;
  /* Đặt vị trí tuyệt đối để di chuyển biểu tượng vào trong input */
  top: 50%;
  /* Đặt biểu tượng ở giữa theo chiều dọc */
  right: 10px;
  /* Đặt biểu tượng ở phía bên phải của input */
  transform: translateY(-50%);
  /* Canh chỉnh biểu tượng ở giữa theo chiều dọc */
}

.input-wrapper {
  width: calc(50% - 20px);
  /* Đặt chiều rộng của input-wrapper là 50% và trừ đi khoảng cách giữa chúng */
  max-width: 400px;
  /* Giả sử input không nên rộng quá 400px */
  position: relative;
  display: inline-block;
  /* Hiển thị các input trên cùng một hàng */
  margin-right: 20px;
  /* Khoảng cách giữa các input */
}

.input-wrapper:last-child {
  margin-right: 0;
  /* Loại bỏ khoảng cách của input cuối cùng */
}

.input-wrapper input {
  width: 100%;
  /* Input sẽ chiếm toàn bộ chiều rộng của input-wrapper */
  padding-left: 30px;
  /* Khoảng cách giữa icon và chữ trong input */

}

.input-wrapper svg {
  position: absolute;
  /* Đặt vị trí tuyệt đối để di chuyển icon vào trong input */
  top: 50%;
  /* Đặt icon ở giữa theo chiều dọc */
  left: 10px;
  /* Đặt icon ở phía bên trái của input */
  transform: translateY(-50%);
  /* Canh chỉnh icon ở giữa theo chiều dọc */
}</style>