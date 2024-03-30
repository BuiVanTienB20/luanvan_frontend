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

    </div>
    <div v-if="showImages2">
      <div class="image-container">
        <div v-for="(image, index) in images2.slice(startIndex, startIndex + 5)" :key="index" class="image-item">
          <img :src="image" :alt="'Ảnh ' + (startIndex + index + 1)">
        </div>
      </div>
     
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
        
      ],
      images2: [
        '../src/assets/img/quocte1.webp', '../src/assets/img/quocte2.webp', '../src/assets/img/quocte3.webp', '../src/assets/img/quocte4.webp', '../src/assets/img/quocte5.webp',
       
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
