<template>
    <div class="room">

        <button class="btn btn-sm text-white">
            <router-link :to="{ name: 'admin-position' }" class="text-success">
                <p class="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l4 4" />
                        <path d="M5 12l4 -4" />
                    </svg>
                </p>
            </router-link>



        </button>


        <button class="btn btn-sm" @click="goToAddRoom()" style="margin-left: 400px">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-upload">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 9l5 -5l5 5" />
                <path d="M12 4l0 12" />
            </svg>

        </button>

        <div class="troom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3" style="margin: 20px;" v-for="room in rooms" :key="room._id">
                        <div class="card" style="width:320px">
                            <img :src="room.imgURL" alt="" style="margin-right: 18px"
                                class="rrounded-circle square-image" />

                            <div class="card-body">
                                <h4 class="card-title">{{ room.room_name }} {{ room.room_number }}</h4>
                                <div style="display: flex;justify-content: space-between;">
                                    <p class="card-text">{{ room.room_type }}</p>
                                    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon mr-2 icon-tabler icons-tabler-outline icon-tabler-bed">
                                            <path stroke="none" d="M0 0h20v20H0z" fill="none" />
                                            <path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                            <path d="M22 17v-3h-20" />
                                            <path d="M2 8v9" />
                                            <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
                                        </svg> {{ room.capacity }}</p>


                                </div>

                                <div style="display: flex;justify-content: space-between;">
                                    <p class="card-text" style="color: rgb(255, 94, 31);font-size: 24px;">Giá: {{
                                        room.price_per_night }}</p>
                                    <p class="card-text" style="font-weight: 600;color: red;">còn phòng :{{
                                        room.availability }}</p>

                                </div>

                                <div style="display: flex;justify-content: space-between;">
                                    <p class="card-text">{{ room.created_at }}</p>
                                    <p class="card-text">{{ room.updated_at }}</p>

                                </div>



                                <button type="button" class="btn btn-link btn-sm btn-rounded"
                                    @click="handleEditRoom(room._id)">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit"
                                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                        stroke="currentColor" fill="none" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                        <path
                                            d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z">
                                        </path>
                                        <path d="M16 5l3 3"></path>
                                    </svg>



                                </button>
                                <button type="button" class="btn  btn-link btn-sm btn-rounded"
                                    style="color: rgb(201, 7, 7); margin-left: 190px" @click="deleteRoom(room._id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
                                        <path d="M9 8l6 8" />
                                        <path d="M15 8l-6 8" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import RoomService from '../services/phong.service';

export default {
    data() {
        return {

            rooms: [],

        };
    },
    props: {
        id: { type: String, required: true },
    },

    methods: {
        goBack() {
            this.$router.go(-1); // Sử dụng $router của Vue Router để điều hướng trở lại trang trước đó
        },
        async retrieveRooms() {
            try {
                const hotelId = this.$route.params.id;
                this.rooms = await RoomService.findByHotelId(hotelId);
            } catch (error) {
                console.error('Error loading hotels:', error);
            }
        },
        async deleteRoom(id) {

            try {
                await RoomService.delete(id);
                this.retrieveRooms();
            } catch (error) {

            }

        },
        goToAddRoom() {
            const hotelId = this.$route.params.id;
            this.$router.push({ name: 'addroom', params: { id: hotelId } });
        },
        handleEditRoom(roomId) {
            const hotelId = this.$route.params.id;
            this.goToEditRoom(hotelId, roomId);
        },
        goToEditRoom(hotelId, roomId) {
            this.$router.push({ name: 'editroom', params: { hotelId: hotelId, roomId: roomId } });
        },


    },
    created() {
        this.retrieveRooms();
    },
};
</script>

<style scoped>
.room {
    margin-top: 110px
}
</style>