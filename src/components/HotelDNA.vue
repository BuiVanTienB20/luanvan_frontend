<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 50px;">
      <img src="../assets/img/yt.png" style="width: 50px; height: 50px;  margin-left: 22px;" alt="">
      <h2 style="margin-left: 10px;">Điểm đến hot Đông Nam Á</h2>
    </div>
    <div class="button-container" style="display: flex; align-items: center; margin-bottom: 50px; margin-left: 16px;">
      <button class="btn" :class="{ 'btn-info': showImages1, 'btn-secondary': !showImages1 }" @click="showImages(1)"
        @mouseover="highlightButton(1)" @mouseleave="resetButton(1)">Singapore</button>
      <button class="btn" :class="{ 'btn-info': showImages2, 'btn-secondary': !showImages2 }" @click="showImages(2)"
        @mouseover="highlightButton(2)" @mouseleave="resetButton(2)">Kualar Lumpua</button>
      <!-- Add 6 more buttons here -->
      <button class="btn" :class="{ 'btn-info': showImages3, 'btn-secondary': !showImages3 }" @click="showImages(3)"
        @mouseover="highlightButton(3)" @mouseleave="resetButton(3)">Bali</button>

    </div>
    <!-- Similarly, add divs and buttons for each group of images -->
    <div v-if="showImages1">
      <div class="image-container">
        <div v-for="(image, index) in images1.slice(startIndex, startIndex + 5)" :key="index" class="image-item">
          <img :src="image" :alt="'Ảnh ' + (startIndex + index + 1)">
        </div>
      </div>
      <button class="button-circle bg-white text-primary" @click="previousImages" v-show="startIndex > 0"><svg
          xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-left-filled" width="24"
          height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
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
    <!-- Add similar div and button structure for other groups -->
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
      images1: [
        '../src/assets/img/si1.webp', '../src/assets/img/si2.webp', '../src/assets/img/si3.webp', '../src/assets/img/si4.webp', '../src/assets/img/si5.webp',
        '../src/assets/img/si6.webp', '../src/assets/img/si7.webp', '../src/assets/img/si8.webp', '../src/assets/img/si9.webp', '../src/assets/img/si10.webp'
      ],
      images2: [
        '../src/assets/img/ku1.webp', '../src/assets/img/ku2.webp', '../src/assets/img/ku3.webp', '../src/assets/img/ku4.webp', '../src/assets/img/ku5.webp',
        '../src/assets/img/ku6.webp', '../src/assets/img/ku7.webp', '../src/assets/img/ku8.webp', '../src/assets/img/ku9.webp', '../src/assets/img/ku10.webp'
      ],
      images3: [
      '../src/assets/img/ba1.webp', '../src/assets/img/ba2.webp', '../src/assets/img/ba3.webp', '../src/assets/img/ba4.webp', '../src/assets/img/ba5.webp',
        '../src/assets/img/ba6.webp', '../src/assets/img/ba7.webp', '../src/assets/img/ba8.webp', '../src/assets/img/ba9.webp', '../src/assets/img/ba10.webp'
      ],

      highlightedButton: 0
    };
  },
  methods: {
    showImages(buttonNumber) {
      this.startIndex = 0;
      // Reset startIndex when switching between image sets
      this.showImages1 = false;
      this.showImages2 = false;
      this.showImages3 = false;
      switch (buttonNumber) {
        case 1:
          this.showImages1 = true;
          break;
        case 2:
          this.showImages2 = true;
          break;
        case 3:
          this.showImages3 = true;
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
    previousImages() {
      this.startIndex -= 5;
    },
    nextImages() {
      this.startIndex += 5;
    }
  }
};
</script>