<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 50px;">
      <img src="../assets/img/yt.png" style="width: 50px; height: 50px;  margin-left: 22px;" alt="">
      <h2 style="margin-left: 10px;">Thái Lan ưu đãi đậm</h2>
    </div>
    <div class="button-container" style="display: flex; align-items: center; margin-bottom: 50px; margin-left: 16px;">
      <button class="btn" :class="{ 'btn-info': showImages1, 'btn-secondary': !showImages1 }"
        @click="showImages(images1, 1)" @mouseover="highlightButton(1)" @mouseleave="resetButton(1)">Bangkok</button>
      <button class="btn" :class="{ 'btn-info': showImages2, 'btn-secondary': !showImages2 }"
        @click="showImages(images2, 2)" @mouseover="highlightButton(2)" @mouseleave="resetButton(2)">Chiang Mai</button>
      <button class="btn" :class="{ 'btn-info': showImages3, 'btn-secondary': !showImages3 }"
        @click="showImages(images3, 3)" @mouseover="highlightButton(3)" @mouseleave="resetButton(3)">Pattaya</button>
    </div>
    <div v-if="currentImages">
      <div class="image-container">
        <div v-for="(image, index) in currentImages.slice(startIndex, startIndex + 5)" :key="index" class="image-item">
          <div class="location-discount">
            <div class="location-name">{{ locationNames[startIndex + index] }}</div>
            <div class="discount-code">{{ discountCodes[startIndex + index] }}</div>
          </div>
          <img :src="image" :alt="'Ảnh ' + (startIndex + index + 1)" class="img-thai">
          <h6 style="  color: rgba(67, 67, 67, 1.00); font-style: normal;">Khách sạn 4 sao</h6>
          <div class="css-1dbjc4n r-1awozwy r-18u37iz"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" accentcolor="#FFDC00" fillcolor="#0194F3">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.6549 2.76584C11.2051 1.65098 12.7949 1.65097 13.3451 2.76584L15.7542 7.64727L21.1412 8.43005C22.3715 8.60882 22.8628 10.1208 21.9725 10.9886L18.0745 14.7883L18.9947 20.1535C19.2049 21.3788 17.9187 22.3133 16.8183 21.7347L12 19.2016L7.18174 21.7347C6.0813 22.3133 4.79515 21.3788 5.00532 20.1535L5.92552 14.7883L2.02747 10.9886C1.13719 10.1208 1.62845 8.60882 2.85879 8.43005L8.24577 7.64727L10.6549 2.76584Z"
                fill="#FFDC00"></path>
            </svg><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              accentcolor="#FFDC00" fillcolor="#0194F3">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.6549 2.76584C11.2051 1.65098 12.7949 1.65097 13.3451 2.76584L15.7542 7.64727L21.1412 8.43005C22.3715 8.60882 22.8628 10.1208 21.9725 10.9886L18.0745 14.7883L18.9947 20.1535C19.2049 21.3788 17.9187 22.3133 16.8183 21.7347L12 19.2016L7.18174 21.7347C6.0813 22.3133 4.79515 21.3788 5.00532 20.1535L5.92552 14.7883L2.02747 10.9886C1.13719 10.1208 1.62845 8.60882 2.85879 8.43005L8.24577 7.64727L10.6549 2.76584Z"
                fill="#FFDC00"></path>
            </svg><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              accentcolor="#FFDC00" fillcolor="#0194F3">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.6549 2.76584C11.2051 1.65098 12.7949 1.65097 13.3451 2.76584L15.7542 7.64727L21.1412 8.43005C22.3715 8.60882 22.8628 10.1208 21.9725 10.9886L18.0745 14.7883L18.9947 20.1535C19.2049 21.3788 17.9187 22.3133 16.8183 21.7347L12 19.2016L7.18174 21.7347C6.0813 22.3133 4.79515 21.3788 5.00532 20.1535L5.92552 14.7883L2.02747 10.9886C1.13719 10.1208 1.62845 8.60882 2.85879 8.43005L8.24577 7.64727L10.6549 2.76584Z"
                fill="#FFDC00"></path>
            </svg><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              accentcolor="#FFDC00" fillcolor="#0194F3">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.6549 2.76584C11.2051 1.65098 12.7949 1.65097 13.3451 2.76584L15.7542 7.64727L21.1412 8.43005C22.3715 8.60882 22.8628 10.1208 21.9725 10.9886L18.0745 14.7883L18.9947 20.1535C19.2049 21.3788 17.9187 22.3133 16.8183 21.7347L12 19.2016L7.18174 21.7347C6.0813 22.3133 4.79515 21.3788 5.00532 20.1535L5.92552 14.7883L2.02747 10.9886C1.13719 10.1208 1.62845 8.60882 2.85879 8.43005L8.24577 7.64727L10.6549 2.76584Z"
                fill="#FFDC00"></path>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              accentcolor="#687176" fillcolor="#0194F3">
              <g clip-path="url(#clip0)">
                <path
                  d="M15.9886 16.0268C15.9886 14.0528 18.3724 11.6204 19.4865 10.1939C21.5632 7.53787 24 5.00369 24 5.00369C24 5.00369 21.2666 5.31206 18.465 6.21272C16.7087 6.77652 15.0488 7.59063 13.3958 8.3995C13.3073 6.27545 13.4489 4.12079 13.5969 2C13.5969 2 9.56369 3.00599 8.26139 5.90024C7.5257 7.53724 8.72553 9.70817 9.01454 11.3204C9.14141 12.0365 8.74246 14.1024 7.52665 13.4945C7.0365 13.2401 6.22054 12.8296 5.52132 12.8223C5.03946 12.8223 4.69858 12.9923 4.41455 13.1339C4.16528 13.2582 3.90097 13.3748 3.61625 13.3698L0 12.6424C0 12.6424 2.36095 13.5555 4.25 14.5C5.22762 14.9888 5.75278 15.4971 6.25943 15.9874C6.78926 16.5002 7.29886 16.9934 8.28455 17.4243C10.2083 18.2631 13.0065 18.7688 15.5 19.5C18.0862 20.2674 20.0568 21.0384 20.6976 21.3836C20.4968 21.2735 20.4721 21.0343 20.5 21C20.553 20.9223 21.1995 21.1212 21.1995 21.1212C19.2753 20.2945 15.9478 18.5279 15.9886 16.0268Z"
                  fill="#1BA0E2"></path>
                <path
                  d="M15.9887 16.0043C15.9886 16.0118 15.9886 16.0193 15.9886 16.0268C15.9783 16.6591 16.1833 17.2445 16.5265 17.7797C14.8854 15.6821 13.3292 9.05031 13.3973 8.3987L13.4263 8.3845C14.0737 8.0677 14.7223 7.75033 15.3774 7.44775C15.358 7.97928 15.2069 12.824 15.9887 16.0043Z"
                  fill="#0F7EA6"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h6
            style="color: rgba(143, 143, 143, 1.00); font-style: normal;-webkit-text-decoration-line: line-through;text-decoration-line: line-through;">
            1.000.000</h6>
          <h5>999.999</h5>
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
      showImages3: false,

      startIndex: 0,
      currentImages: [],
      images1: [
        '../src/assets/img/bangkok1.webp', '../src/assets/img/bangkok2.webp', '../src/assets/img/bangkok3.webp', '../src/assets/img/bangkok4.webp', '../src/assets/img/bangkok5.webp',
        '../src/assets/img/bangkok6.webp', '../src/assets/img/bangkok7.webp', '../src/assets/img/bangkok8.webp', '../src/assets/img/bangkok9.webp', '../src/assets/img/bangkok10.webp'
      ],
      images2: [
        '../src/assets/img/chiang_mai1.webp', '../src/assets/img/chiang_mai2.webp', '../src/assets/img/chiang_mai3.webp', '../src/assets/img/chiang_mai4.webp', '../src/assets/img/chiang_mai5.webp',
        '../src/assets/img/chiang_mai6.webp', '../src/assets/img/chiang_mai7.webp', '../src/assets/img/chiang_mai8.webp', '../src/assets/img/chiang_mai9.webp', '../src/assets/img/chiang_mai10.webp'
      ],
      images3: [
        '../src/assets/img/pattaya1.webp', '../src/assets/img/pattaya2.webp', '../src/assets/img/pattaya3.webp', '../src/assets/img/pattaya4.webp', '../src/assets/img/pattaya5.webp',
        '../src/assets/img/pattaya6.webp', '../src/assets/img/pattaya7.webp', '../src/assets/img/pattaya8.webp', '../src/assets/img/pattaya9.webp', '../src/assets/img/pattaya10.webp'
      ],

      highlightedButton: 0,
      locationNames: [
        // Tên địa điểm cho các ảnh Bangkok
        'Bangkok 1', 'Bangkok 2', 'Bangkok 3', 'Bangkok 4', 'Bangkok 5', 'Bangkok 6', 'Bangkok 7', 'Bangkok 8', 'Bangkok 9', 'Bangkok 10',
        // Tên địa điểm cho các ảnh Chiang Mai
        'Chiang Mai 1', 'Chiang Mai 2', 'Chiang Mai 3', 'Chiang Mai 4', 'Chiang Mai 5', 'Chiang Mai 6', 'Chiang Mai 7', 'Chiang Mai 8', 'Chiang Mai 9', 'Chiang Mai 10',
        // Tên địa điểm cho các ảnh Pattaya
        'Pattaya 1', 'Pattaya 2', 'Pattaya 3', 'Pattaya 4', 'Pattaya 5', 'Pattaya 6', 'Pattaya 7', 'Pattaya 8', 'Pattaya 9', 'Pattaya 10',
      ],
      discountCodes: [
        // Mã code cho các ảnh Bangkok
        'CODE123', 'CODE456', 'CODE789', 'CODEABC', 'CODEDEF', 'CODEGHI', 'CODEJKL', 'CODEMNO', 'CODEPQR', 'CODESTU',
        // Mã code cho các ảnh Chiang Mai
        'CODEVWX', 'CODEYZA', 'CODEBCD', 'CODEEFG', 'CODEHIJ', 'CODEKLM', 'CODENOP', 'CODEQRS', 'CODETUV', 'CODEWXY',
        // Mã code cho các ảnh Pattaya
        'CODEZAB', 'CODECDE', 'CODEFGH', 'CODEIJK', 'CODELMN', 'CODEOPQ', 'CODERST', 'CODETUV', 'CODEWXY', 'CODEZAB',
      ],

    };
  },
  methods: {
    showImages(images, buttonNumber) {
      this.startIndex = 0;
      switch (buttonNumber) {
        case 1:
          this.showImages1 = true;
          this.showImages2 = false;
          this.showImages3 = false;
          this.currentImages = images;
          break;
        case 2:
          this.showImages1 = false;
          this.showImages2 = true;
          this.showImages3 = false;
          this.currentImages = images;
          break;
        case 3:
          this.showImages1 = false;
          this.showImages2 = false;
          this.showImages3 = true;
          this.currentImages = images;
          break;
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

  },
  created() {
    this.showImages(this.images1, 1);
  }

};
</script>

<style scoped>
.image-item {
  height: 258px;
  width: 192px;
  margin: 10px;
  background-color: aliceblue;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(3, 18, 26, 0.15);

}

.image-item>h5 {
  color: rgba(249, 109, 1, 1.00);
  font-style: normal;
}

.img-thai {
  width: 170px;
  height: 94px;
  margin-bottom: 50px;
}

.location-discount {
  position: relative;
}

.location-name {
  position: absolute;
  top: 0;
  left: 0;
  background-color: orange;
  /* Màu nền cam */
  padding: 2px 10px;
  /* Thêm padding cho đẹp */
  border-top-left-radius: 10px;
  /* Bo tròn góc */
}

.discount-code {
  position: absolute;
  bottom: -95px;
  left: 25%;
  transform: translateX(-50%);
  /* Canh giữa theo chiều ngang */
  background-color: orange;
  /* Màu nền cam */
  padding: 2px 10px;
  /* Thêm padding cho đẹp */
  border-bottom-left-radius: 10px;
  /* Bo tròn góc */
  height: 23px;
}
</style>
