<template>
    <div class="hotel">
        <div class="blue-background">
            <div class="container">
                <div class="row">












                </div>

            </div>



        </div>

        <div class="container" style="margin-top: -76px;">
            <findhotel></findhotel>


        </div>
        <div class="container">

            <div class="row">

                <div class="col-sm-12">
                    <img class="nen"
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/28/1711598887333-2257e9caaf26d52dfa07f589b77b15f1.png"
                        alt="">
                </div>


                <div class="lc col-sm-3">
                    <div class="lck col-sm-12">
                        <b>Các nơi lưu trú</b>
                        <p>Biệt thự ở Hội An</p>
                        <p>Căn hộ ở Hội An</p>

                    </div>
                    <div class="lck col-sm-12">
                        <b>Các khách sạn hạng sao khác ở

                        </b>
                        <p>Khách sạn 5 sao Hội An</p>
                        <p>Khách sạn 4 sao Hội An</p>
                        <p>Khách sạn 3 sao Hội An</p>
                        <p>Khách sạn 2 sao Hội An</p>
                    </div>
                    <div class="lck col-sm-12">
                        <b>Các khách sạn khác ở </b>


                    </div>
                    <div class="lck col-sm-12">
                        <b>Khách sạn gần các địa điểm nổi tiếng</b>

                    </div>
                    <div class="lck col-sm-12">
                        <b>Khách sạn ở các thành phố lân cận</b>

                    </div>



                </div>
                <div class="col-sm-9">
                    <h5 class="mb-4" style="font-weight: 700;">Các khách sạn được yêu thích ở</h5>
                    <div class="ks col-sm-12" v-for="hotel in hotels" :key="hotel._id">
                        <div class="ht mr-4">
                            <img :src="hotel.imgURL" alt="">

                        </div>
                        <div class="kt">
                            <p style="color: rgba(3, 18, 26, 1.00); font-weight: 700; font-size: 16px;">
                                {{ hotel.name }}
                            </p>

                            <p style="color:rgba(2, 100, 200, 1.00); font-weight: 500;font-size: 12px;">
                                {{ hotel.type }}


                                <span class="ml-4" style="color: yellow; font-size: 26px;"> <a-rate
                                        :value="hotel.rating" disabled /></span>



                            </p>
                            <p style="color: rgb(104, 113, 118);font-weight: 700; font-size: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style=" font-weight: 500;" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg> {{ hotel.
                                    address }}
                            </p>
                            <p style=" font-weight: 600;font-size: 14px;"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="icon mr-4 icon-tabler icons-tabler-outline icon-tabler-brand-binance">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
                                    <path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
                                    <path d="M20 10l2 2l-2 2l-2 -2z" />
                                    <path d="M4 10l2 2l-2 2l-2 -2z" />
                                    <path d="M12 10l2 2l-2 2l-2 -2z" />
                                </svg>{{ hotel.
                                    description }}</p>


                        </div>
                        <div class="bt">

                            <div class="thpd">

                                <div class="tt">
                                    <button class="chooserom btn text-white">
                                        <router-link :to="{ name: 'bookroom', params: { id: hotel._id } }" class="link">
                                            Xem
                                            giá</router-link>

                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>














            </div>


            <div class="row">
                <div class="col-sm-12">
                    <View></View>
                </div>
            </div>

        </div>

    </div>


</template>

<script>
import VueAIcarousel from "vue-ai-carousel";
import HotelService from '../services/khachsan.service';

import findhotel from '../components/findhotel.vue';

import View from '../components/view.vue'
export default {
    components: {
        HotelService,
        VueAIcarousel,
        findhotel,
        View



    },
    data() {
        return {
            hotels: [],
            provinceIdInput: '',

        };
    },
    props: {
        id: { type: String, required: true },
    },
    created() {
        this.loadHotels();
    },
    methods: {
        async loadHotels() {
            try {
                // Trích xuất provinceId từ URL
                const provinceId = window.location.pathname.split('/').pop();

                // Gọi phương thức findAllByProvinceId(provinceId) từ HotelService
                this.hotels = await HotelService.findAllByProvinceId(provinceId);
            } catch (error) {
                console.error('Error loading hotels:', error);
            }
        },
        gotobookroom() {
            this.$router.push({ name: 'bookroom' });

        },


    }

}
</script>

<style scoped>
.hotel {
    margin-top: 140px;
    margin-bottom: 160px;



}

.blue-background {
    background-color: rgba(73, 179, 232, 1.00);
    background-image: linear-gradient(-180deg, rgba(0, 160, 255, 0), #0770cd);
    /* Blue color */
    padding: 20px;
    /* Make the div full screen height */
    margin-top: -20px;
    /* Remove the default margin from the header */
    height: 300px;
    width: 100%;
}



.nen {
    border-radius: 10px;
    width: 938px;
    /* Chiều rộng cố định của ảnh */
    height: 213px;
    /* Chiều cao cố định của ảnh */
    display: block;
    /* Hiển thị là block element để sử dụng margin: auto */
    margin-left: 100px;
    /* Đẩy ảnh về phía bên trái */
    margin-right: auto;
    /* Đẩy ảnh về phía bên phải */
    margin-bottom: 40px;
}

.link {
    color: aliceblue;
    text-decoration: none;
}


.ks {

    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.ks:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.5);
    /* Màu viền khi rê chuột vào */
}

.ht {
    padding: 10px;

}

.ht>img {
    margin-top: 16px;
    width: 205px;
    height: 164px;
    border-radius: 10px;

}

.kt {
    padding-top: 4px;
    margin-right: 62px;
}


.bt {
    padding: 10px;

}

.thpd {
    display: flex;
    padding-top: 5px;
    width: 150px;
}

.chooserom {
    background-color: rgb(1, 148, 243);
    font-weight: 700;
}

.chooserom:hover {
    background-color: rgb(1, 148, 243 0.8);
}

.tt {
    padding: 100px 5px 5px 5px;

}

.lc {
    display: block;
    margin-top: 10px;
    border-radius: 20px;
    border: 1px solid #3333;
    width: 500px;
    height: 400px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.lck {

    font-size: 14px;
    line-height: 16px;
    margin-top: 10px;
    white-space: nowrap;
}

.lck>b,
.lck>p {
    padding-top: 10px;

}

.lck>b {
    font-weight: 700px;
}

.lck>p {

    font-weight: 700px;
    padding-left: 10px;
    color: #0770cd;
}
</style>