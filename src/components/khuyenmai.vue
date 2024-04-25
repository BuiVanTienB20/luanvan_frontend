<!-- Component hiện tại -->
<template>
  <div>
   
    <div v-if="showImages">
      <div class="image-container">
        <div v-for="(image, index) in images1.slice(startIndex, startIndex + 5)" :key="index" class="image-item">
          <router-link :to="{name:'localhotelPro'}">
            <img :src="image" :alt="'Ảnh ' + (startIndex + index + 1)" class="soanh">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImages: true,
      startIndex: 0,
      images1: [
        '../src/assets/img/trongnuoc1.webp', '../src/assets/img/trongnuoc2.webp', '../src/assets/img/trongnuoc3.webp', '../src/assets/img/trongnuoc4.webp', '../src/assets/img/trongnuoc5.webp',
      ],
      highlightedButton: 0
    };
  },
  methods: {
    // Nếu bạn cần thêm hành động khi nút được nhấn, bạn có thể thêm hàm ở đây
  }
};
</script>




<style>
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

.soanh:hover {
  transform: scale(1.05);
  /* Increase the size by 5% */
  transition: transform 0.4s ease;
  /* Add a smooth transition effect */
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
}
</style>
