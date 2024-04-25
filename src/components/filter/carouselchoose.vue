<template>
    <div class="">
        <button class="btn mb-3" style="margin-left: -45px;" @click="prevTab" v-show="activeTab !== 'all'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-left">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 20l-3 -8l3 -8" />
            </svg>
        </button>
        <button v-show="showAll" class="t btn text-dark" @click="changeColor('all')"
            :class="{ 'selected': activeTab === 'all' }">
            <p class="carousel">All</p>
        </button>
        <button v-show="showAll" class="t btn text-dark" @click="changeColor('payment')"
            :class="{ 'selected': activeTab === 'payment' }">
            <p class="carousel">Thanh toán tại khách sạn</p>
        </button>
        <button v-show="!showAll" class="t btn text-dark" @click="changeColor('family')"
            :class="{ 'selected': activeTab === 'family' }">
            <p class="carousel">Phù hợp với gia đình</p>
        </button>
        <button v-show="!showAll" class="t btn text-dark" @click="changeColor('special')"
            :class="{ 'selected': activeTab === 'special' }">
            <p class="carousel">Ưu đãi đặt biệt</p>
        </button>
        <button class="btn mb-3" :style="{ marginLeft: showAll ? '34px' : '-18px' }" @click="nextTab">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 4l3 8l-3 8" />
            </svg>
        </button>

    </div>

</template>

<script>
import Carousel from 'primevue/carousel';
import InputText from 'primevue/inputtext';
import Slider from 'primevue/slider';
export default {
    components: {
        Slider,
        InputText,
        Carousel
    },
    data() {
        return {
            activeTab: null,
            showAll: true
        };
    },
    methods: {
        changeColor(tab) {
            this.activeTab = tab;
        },
        nextTab() {
            this.showAll = false;
        },
        prevTab() {
            this.showAll = true;
        }
    }
};
</script>

<style scoped>
.card {
    margin-bottom: 160px;
    margin-top: 160px;
    width: 300px;
}

.bc {
    border: 1px solid #333;
    margin-left: 50px;
    border-radius: 50px;

}

button {
    margin-top: 10px;
}

.t.btn:hover {
    cursor: pointer;
}

.selected p {
    color: rgb(24, 141, 176);
    /* Thay đổi màu chữ khi được chọn */
}

.carousel {
    font-weight: 700;
    font-size: 14px;
}
</style>
