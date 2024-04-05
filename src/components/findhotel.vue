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
      <div class="row ce" style="width: 640px;">
        <div>
          <label for="city">Thành phố, địa điểm/Khách sạn: </label>

        </div>
        <div style="width: 1200px;">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 icon-tabler icon-tabler-map-pin" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>

          <Dropdown v-model="selectedProvince" :options="provinces" filter optionLabel="name"
            placeholder="Chọn một tỉnh thành" class="w-full md:w-14rem">
            <template slot="value" slot-scope="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <img :alt="slotProps.value.label"
                  src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                  :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template slot="option" slot-scope="slotProps">
              <div class="flex align-items-center">
                <img :alt="slotProps.option.label"
                  src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                  :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>

        </div>
      </div>
      <div class="row ce">
        <div class="col-sm-4">

          <div>

            <label for="checkin">Ngày nhận phòng:</label>

          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 icon-tabler icon-tabler-calendar-up" width="24"
              height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M19 22v-6" />
              <path d="M22 19l-3 -3l-3 3" />
            </svg>




            <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" style="width: 140px;" />


          </div>

        </div>

        <div class="col-sm-4">
          <div>
            <label for="nights">Số đêm:</label>

          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 icon-tabler icon-tabler-moon-stars" width="24"
              height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
              <path d="M19 11h2m-1 -1v2" />
            </svg>
            <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder=""
              class="w-full md:w-14rem">
              <template slot="value" slot-scope="slotProps">
                {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
              </template>
            </Dropdown>

          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <label for="checkout">Ngày trả phòng:</label>

          </div>
          <div>
            <path
              d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z"
              stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <input type="date" id="checkout" v-model="booking.checkoutDate" required>

          </div>

        </div>


      </div>



      <div class="row ce">
        <div>
          <label for="guests">Khách và phòng:</label>

        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon mr-2 icon-tabler icon-tabler-calendar-user" width="24"
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

          <div class="cus">
            <Button :label="`${value1} Người lớn, ${value2} Trẻ em, ${value3} Phòng`" @click="showDialog"
              severity="secondary" />

            <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem', borderRadius: '10px' }"
              :showHeader="false">

              <div class="flex align-items-center gap-3  mt-3 mb-3 ">
                <b class="ngl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-user-share">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                    <path d="M16 22l5 -5" />
                    <path d="M21 21.5v-4.5h-4.5" />
                  </svg> Người lớn:</b>
                <InputNumber v-model="value1" :inputId="'horizontal-buttons1'" showButtons :buttonLayout="'horizontal'"
                  :step="1" :inputStyle="{ width: '48px' }" :min="1" />
              </div>

              <div class="flex align-items-center gap-3  mb-3 ">
                <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-horse-toy">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
                    <path
                      d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
                    <path d="M5 18.5l2 -9.5" />
                    <path d="M8 20l2 -5h4l2 5" />
                  </svg>Trẻ em:</b>
                <InputNumber v-model="value2" :inputId="'horizontal-buttons2'" showButtons :buttonLayout="'horizontal'"
                  :step="1" :inputStyle="{ width: '48px' }" :min="0" />
              </div>

              <div class="flex align-items-center gap-3  mb-3 ">
                <b><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-door">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 12v.01" />
                    <path d="M3 21h18" />
                    <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
                  </svg>Phòng:</b>
                <InputNumber v-model="value3" :inputId="'horizontal-buttons3'" showButtons :buttonLayout="'horizontal'"
                  :step="1" :inputStyle="{ width: '48px' }" :min="1" :max="value1" />
              </div>

              <div class="flex justify-content-end gap-2" :style="{ marginLeft: '250px' }">
                <Button type="button" label="Xong" severity="secondary" @click="closeDialog"></Button>
              </div>
            </Dialog>
          </div>




          <button class=" text-white" type="submit"
            style="margin-left: 349px; font-weight: 500; border-radius: 5px ; background-color: rgb(255, 94, 31);">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-map-search"
              width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
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
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';

export default {
  components: {
    Dropdown,
    Calendar,
    Dialog,
    Button,
    InputNumber

  },
  data() {
    return {
      selectedNight: null,

      nights: [
        { label: '1 đêm', value: 1 },
        { label: '2 đêm', value: 2 },
        { label: '3 đêm', value: 3 },
        { label: '4 đêm', value: 4 },
        { label: '5 đêm', value: 5 },
        { label: '6 đêm', value: 6 },
        { label: '7 đêm', value: 7 },
        { label: '8 đêm', value: 8 },
        { label: '9 đêm', value: 9 },
        { label: '10 đêm', value: 10 },
        { label: '11 đêm', value: 11 },
        { label: '12 đêm', value: 12 },
        { label: '13 đêm', value: 13 },
        { label: '14 đêm', value: 14 },
        { label: '15 đêm', value: 15 },
        { label: '16 đêm', value: 16 },
        { label: '17 đêm', value: 17 },
        { label: '18 đêm', value: 18 },
        { label: '19 đêm', value: 19 },
        { label: '20 đêm', value: 20 }
      ],
      selectedProvince: null,
      provinces: [
        { name: 'Hà Nội', code: 'HN' },
        { name: 'Hồ Chí Minh', code: 'HCM' },
        { name: 'Đà Nẵng', code: 'DN' },
        { name: 'Hải Phòng', code: 'HP' },
        { name: 'Cần Thơ', code: 'CT' },
        { name: 'Bình Dương', code: 'BD' },
        { name: 'Đồng Nai', code: 'DNai' },
        { name: 'Khánh Hòa', code: 'KH' },
        { name: 'Quảng Nam', code: 'QNam' },
        { name: 'Hải Dương', code: 'HD' }

      ].map(city => {
        return {
          ...city,
          nameWithCountry: `${city.name} (Việt Nam)`
        };
      }),
      booking: {
        city: '',
        checkinDate: '',
        checkoutDate: '',
        nights: 1,
        guests: 1,
      },
      icondisplay: null,
      // cus
      visible: false,
      value1: 1,
      value2: 0,
      value3: 1,
    };
  },
  methods: {
    submitForm() {
      // Gửi dữ liệu đặt phòng lên máy chủ
      console.log('Đã gửi dữ liệu đặt phòng:', this.booking);
      // Đoạn mã gửi dữ liệu lên máy chủ sẽ được thêm vào ở đây
      // Ví dụ: sử dụng axios hoặc fetch API để gửi dữ liệu
    },
    showDialog() {
      if (this.value1 === 0 || this.value3 === 0 || this.value3 > this.value1) {

      } else {
        this.visible = true;
      }
    },
    closeDialog() {
      this.visible = false;
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
}

.cus {
  margin: -35px -35px -35px 37px;

  border-radius: 10px;
}

b {
  margin-right: 100px;
}

.ngl {
  margin-right: 75px;
}
</style>