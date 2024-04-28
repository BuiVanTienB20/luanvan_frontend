<template>
    <div class="hotel">
        <button class="btn btn-sm text-white" style="">
            <router-link :to="{ name: 'admin-position' }" class="text-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 14l-4 -4l4 -4" />
                    <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                </svg>
            </router-link>
        </button>
        <button class="btn btn-sm" @click="goToAddHotel()" style="margin-left: 400px;">
            <router-link :to="{ name: 'addhotel' }" class="text-success">
                <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
            </router-link>
        </button>

        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Khách sạn</th>
                    <th>Tọa lạc</th>
                    <th>Loại</th>
                    <th>Mô tả</th>
                    <th>Chất lượng</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                    <th>Phòng</th>
                </tr>
            </thead>
            <tbody>

                <tr class="hotelt" v-for="hotel in hotels" :key="hotel._id">


                    <td>

                        <div class="d-flex align-items-center">
                            <img :src="hotel.imgURL" alt="" style="margin-right: 18px"
                                class="rrounded-circle square-image" />

                            <div class="ms-3">
                                <p class="fw-bold mb-1">{{ hotel.name }}</p>

                            </div>
                        </div>



                    </td>

                    <td>
                        <p class="fw-normal mb-1">{{ hotel.address }}</p>
                    </td>

                    <td>{{ hotel.type }}</td>
                    <td>{{ hotel.description }}</td>
                    <td class="fw-normal mr-4">
                        <span style="color: #ff7600;; font-size: 20px; opacity: 0.8;"> {{ hotel.rating
                            }} &#9733;</span>
                    </td>



                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded"
                            @click="handleEditHotel(hotel._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                            </svg>
                        </button>


                    </td>

                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded" style="color: rgb(201, 7, 7);"
                            @click=" deletehotel(hotel._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>
                    </td>
                    <td>
                        <router-link :to="{ name: 'admin-room', params: { id: hotel._id } }"
                            style="color: black;text-decoration: none;">
                            <button class="btn btn-link btn-sm btn-rounded" style="color: #363636;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="ico mr-2 icon-tabler icons-tabler-outline icon-tabler-category-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 4h6v6h-6z" />
                                    <path d="M4 14h6v6h-6z" />
                                    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                </svg>

                            </button>
                        </router-link>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import HotelService from '../services/khachsan.service';

export default {
    data() {
        return {

            hotels: [],
        };
    },
    methods: {
        async retrieveHotels() {
            try {
                const provinceId = this.$route.params.id;
                this.hotels = await HotelService.findAllByProvinceId(provinceId);
            } catch (error) {
                console.error('Error loading hotels:', error);
            }
        },
        async deletehotel(id) {

            try {
                await HotelService.delete(id);
                this.retrieveHotels();
            } catch (error) {
                console.error(error);
            }
        },
        goToAddHotel() {
            const provinceId = this.$route.params.id;
            this.$router.push({ name: 'addhotel', params: { id: provinceId } });
           
        },

        handleEditHotel(hotelId) {
            const provinceId = this.$route.params.id;
            this.goToEditHotel(provinceId, hotelId);
        },
        goToEditHotel(provinceId, hotelId) {
            this.$router.push({ name: 'edithotel', params: { provinceId: provinceId, hotelId: hotelId } });
        },
    },
    created() {
        this.retrieveHotels();
    },
};
</script>

<style scoped>
.hotel {
    margin-top: 110px;
    margin-right: 20px;
}

td {
    padding: 10px 40px 40px 10px;
}

.square-image {
    object-fit: cover;
    /* Đảm bảo hình ảnh không bị biến dạng */
    width: 65px;
    /* Kích thước vuông */
    height: 65px;
    /* Kích thước vuông */

    border-radius: 2px;
}
</style>