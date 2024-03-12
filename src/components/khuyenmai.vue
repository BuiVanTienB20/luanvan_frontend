<template>
  <div>
    <div class="button-container">
      <button class="btn" :class="{ 'btn-info': showImages1, 'btn-secondary': !showImages1 }" @click="showImages(1)"
        @mouseover="highlightButton(1)" @mouseleave="resetButton(1)">Trong nước</button>
      <button class="btn" :class="{ 'btn-info': showImages2, 'btn-secondary': !showImages2 }" @click="showImages(2)"
        @mouseover="highlightButton(2)" @mouseleave="resetButton(2)">Quốc tế</button>
    </div>
    <div v-if="showImages1">
      <div class="image-container">
        <div v-for="(image, index) in images1.slice(startIndex, startIndex + 5)" :key="index" class="image-item">
          <img :src="image" :alt="'Ảnh ' + (startIndex + index + 1)">
        </div>
      </div>
      <button class="button-circle bg-white text-primary" @click="previousImages" v-show="startIndex > 0"><svg
          xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-left-filled" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
            stroke-width="0" fill="currentColor" />
        </svg></button>
      <button class="button-circle bg-white text-primary" @click="nextImages"
        v-show="startIndex + 5 < images1.length"><svg xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-caret-right-filled" width="24" height="24" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
            stroke-width="0" fill="currentColor" />
        </svg></button>
    </div>
    <div v-if="showImages2">
      <div class="image-container">
        <div v-for="(image, index) in images2.slice(startIndex, startIndex + 5)" :key="index" class="image-item">
          <img :src="image" :alt="'Ảnh ' + (startIndex + index + 1)">
        </div>
      </div>
      <button class="button-circle bg-white text-primary" @click="previousImages" v-show="startIndex > 0"><svg
          xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-left-filled" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
            stroke-width="0" fill="currentColor" />
        </svg></button>
      <button class="button-circle bg-white text-primary" @click="nextImages"
        v-show="startIndex + 5 < images2.length"><svg xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-caret-right-filled" width="24" height="24" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
            stroke-width="0" fill="currentColor" />
        </svg></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImages1: true,
      showImages2: false,
      startIndex: 0,
      images1: [
        '../src/assets/img/trongnuoc1.webp', '../src/assets/img/trongnuoc2.webp', '../src/assets/img/trongnuoc3.webp', '../src/assets/img/trongnuoc4.webp', '../src/assets/img/trongnuoc5.webp',
        '../src/assets/img/trongnuoc6.webp', '../src/assets/img/trongnuoc7.webp', '../src/assets/img/trongnuoc8.webp', '../src/assets/img/trongnuoc9.webp', '../src/assets/img/trongnuoc10.webp'
      ],
      images2: [
        '../src/assets/img/quocte1.webp', '../src/assets/img/quocte2.webp', '../src/assets/img/quocte3.webp', '../src/assets/img/quocte4.webp', '../src/assets/img/quocte5.webp',
        '../src/assets/img/quocte6.webp', '../src/assets/img/quocte7.webp', '../src/assets/img/quocte8.webp', '../src/assets/img/quocte9.webp', '../src/assets/img/quocte10.webp'
      ],
      highlightedButton: 0
    };
  },
  methods: {
    showImages(buttonNumber) {
      this.startIndex = 0; // Reset startIndex when switching between image sets
      if (buttonNumber === 1) {
        this.showImages1 = true;
        this.showImages2 = false;
      } else if (buttonNumber === 2) {
        this.showImages1 = false;
        this.showImages2 = true;
      }
    },
    highlightButton(buttonNumber) {
      this.highlightedButton = buttonNumber;
    },
    resetButton(buttonNumber) {
      if (this.highlightedButton !== buttonNumber) {
        this.highlightedButton = 0;
      }
    },
    previousImages() {
      this.startIndex -= 5;
    },
    nextImages() {
      this.startIndex += 5;
    }
  }
};
</script>

<style >

.button-container {
  display: flex;
  margin-left: 45px;
  gap: 10px;
  /* Khoảng cách giữa các nút */
  margin-bottom: 50px;
}

.btn {
  border-radius: 30px;
}

.button-circle {
  width: 40px;
  /* Đảm bảo kích thước của nút là hình vuông */
  height: 40px;
  /* Đảm bảo kích thước của nút là hình vuông */
  border-radius: 50%;
  /* Biến nút thành hình tròn */
  border: 2px solid #007bff;
  /* Viền nút có độ rộng là 2px và màu sắc là xanh dương */
  background-color: transparent;
  /* Màu nền trong suốt */
  color: #007bff;
  /* Màu chữ là xanh dương */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  /* Hiệu ứng chuyển đổi */
}

.button-circle:hover {
  background-color: #007bff;
  /* Khi di chuột qua, thay đổi màu nền thành xanh dương */
  color: #fff;
  /* Khi di chuột qua, thay đổi màu chữ thành trắng */
}




.image-container {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  width: 20%;
  /* Each image takes up 20% of the container width */
  padding: 5px;
}

.image-item img {
  width: 80%;
  height: auto;
  border-radius: 5px;
 

}</style>
