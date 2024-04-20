<template>
    <div class="edit">
        <h1 class="d-flex justify-content-center">Chỉnh sửa phòng khách sạn</h1>
        <edit :room="room" @submit:room="editRoom" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import edit from "../../components/room/editroom.vue";
import RoomService from "../../services/phong.service";

export default {
    components: {
        edit,
    },
    data() {
        return {
            room: null,
            message: "",
        };
    },
    methods: {
        async getRoom() {
            const hotelId = this.$route.params.hotelId;

            const roomId = this.$route.params.roomId;
            console.log("Hotel ID:", hotelId);
            console.log("Room ID:", roomId);
            try {
                this.room = await RoomService.findByHotelIdAndRoomId(hotelId, roomId);
            } catch (error) {
                // Xử lý lỗi, ví dụ: chuyển hướng đến trang 404
                this.$router.push({ name: "notfound" });
            }
        },
        async editRoom(data) {

            try {
                const hotelId = this.$route.params.hotelId;
                const roomId = this.$route.params.roomId;

                await RoomService.updateByHotelAndRoomId(hotelId, roomId, data);
                this.message = "Cập nhật phòng  thành công";
                this.$router.push({ name: 'admin-room', params: { id: hotelId } });
            } catch (error) {
                console.error(error);

            }
        },
    },
    created() {
        this.getRoom();
    },
};
</script>
<style scoped>
.edit {
    margin-top: 110px;
}
</style>