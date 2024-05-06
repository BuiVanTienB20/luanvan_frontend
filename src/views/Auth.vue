<template>
  <div class="auth">
    <Dropdown v-model="selectedProvince" :options="products" filter optionLabel="province_name"
      placeholder="Chọn một tỉnh thành" class="w-full md:w-14rem">
      <template slot="value" slot-scope="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <div>{{ slotProps.value.province_name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template slot="option" slot-scope="slotProps">
        <div class="flex align-items-center">
          <div>{{ slotProps.option.province_name }}</div>
        </div>
      </template>
    </Dropdown>

    <div class="m-4" style="display: flex;">
      <Calendar v-model="icondisplay" showIcon iconDisplay="input" inputId="icondisplay" style="width: 160px;"
        :disabledDates="disabledDates" />

      <Dropdown v-model="selectedNight" :options="nights" optionLabel="label" placeholder="" class="w-full md:w-14rem">
        <template slot="value" slot-scope="slotProps">
          {{ slotProps.value ? slotProps.value.label : slotProps.placeholder }}
        </template>
      </Dropdown>

      <Calendar v-model="returnDate" showIcon iconDisplay="input" inputId="returnDate" :readonly="true" />



    </div>

    <div class=" m-4">
      <Button :label="`${value1} Người lớn, ${value2} Trẻ em, ${value3} Phòng`" @click="showDialog"
        severity="secondary" />

      <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem', borderRadius: '10px' }"
        :showHeader="false">

        <div class="flex align-items-center gap-3  mt-3 mb-3 ">
          <b class="ngl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
          <b class="tre"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-horse-toy">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
              <path d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
              <path d="M5 18.5l2 -9.5" />
              <path d="M8 20l2 -5h4l2 5" />
            </svg>Trẻ em:</b>
          <InputNumber v-model="value2" :inputId="'horizontal-buttons2'" showButtons :buttonLayout="'horizontal'"
            :step="1" :inputStyle="{ width: '48px' }" :min="0" />
        </div>

        <div class="flex align-items-center gap-3  mb-3 ">
          <b class="tre"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
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

    <button class=" text-white" type="submit" @click="goToHotelPage"
      style="margin-left: 650px; font-weight: 500; border-radius: 5px ; background-color: rgb(255, 94, 31);">

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
</template>

<script>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';

import Knob from 'primevue/knob';

import Calendar from 'primevue/calendar';

import SplitButton from 'primevue/splitbutton';

import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';

import Card from 'primevue/card';
import ProductService from '../services/tinhthanh.service';

export default {
  components: {
    Button,
    Calendar,
    Toast,
    SplitButton,
    Dialog,
    Knob,
    Card,
    Dropdown,
    InputNumber
  },
  data() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return {
      selectedProvince: null,
      products: [],
      selectedNight: { label: '2 đêm', value: 2 },

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
      icondisplay: tomorrow,
      // cus
      visible: false,
      value1: 1,
      value2: 0,
      value3: 1,
    };
  },
  computed: {
    returnDate() {
      const returnDate = new Date(this.icondisplay);
      returnDate.setDate(returnDate.getDate() + this.selectedNight.value);
      return returnDate;
    },
    disabledDates() {
      const today = new Date();
      const disabledDates = [];

      // Lặp qua từ ngày hôm qua trở về 30 ngày trước
      for (let i = 1; i <= 30000; i++) {
        const disabledDate = new Date(today);
        disabledDate.setDate(today.getDate() - i);
        disabledDates.push(disabledDate);
      }

      return disabledDates;
    }


  },

  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    goToHotelPage() {
      if (this.selectedProvince) {
        this.$router.push({ name: 'test', params: { id: this.selectedProvince._id } });
      }
    },
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
  },
  created() {
    this.retrieveProducts();
  },
};
</script>

<style scoped>
.auth {
  margin: 160px;
}

.card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

p {
  line-height: 1.75;
}

.card {
  width: 400px;
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
